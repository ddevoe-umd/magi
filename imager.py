import time
from picamera2 import Picamera2
import numpy as np
import csv
import os
from filter_curves import filter
import RPi.GPIO as GPIO

from PIL import Image, ImageDraw, ImageFont
import base64
from io import BytesIO

LED_PIN = 13

# Image size:
w = 640         # min of 64, max of 2592 for 5MP camera
h = int(3*w/4)  # native 4:3 aspect ratio
res = (w,h)  

cam = Picamera2() 

data_directory = 'data'

# Set up list containing upper left corner of all ROIs:
well_cols = 4   # number of well columns
well_rows = 3   # number of well rows
roi_upper_left = (200,185)   # cordinates for upper left corner of upper left ROI
roi_spacing = 62     # spacing (x & y) between ROI centers
roi_width = 12
roi_height = 28 
ROIs = []            # list of upper left corners for all ROIs
for i in range(well_rows):
    for j in range(well_cols):
        x = roi_upper_left[0] + roi_spacing*j
        y = roi_upper_left[1] + roi_spacing*i
        ROIs.append((x,y))

def hex_to_rgb(h):   # convert "#rrggbb" to [R,G,B]
    return [int(h[i:i+2], 16) for i in (1, 3, 5)]

def add_ROIs(img, data):      # Add ROIs to a captured image
    # Extract well names & colors:
    well_config = data[0]             # well configuration
    target_dict = data[1]             # target colors
    colors = [target_dict[t][0] for t in well_config]

    img = img.convert('RGBA')   # convert captured image to support an alpha channel
    img_roi = Image.new('RGBA', img.size, (255, 255, 255, 0))  # create new image with ROIs only
    draw = ImageDraw.Draw(img_roi)
    for idx,roi in enumerate(ROIs):
        roi_lower_right = (roi[0] + roi_width, roi[1] + roi_height)
        fill_color = hex_to_rgb(colors[idx])  # convert "#rrggbb" to [R,G,B]
        fill_color.append(64)  # Add alpha channel for transparency
        # Draw the ROI box:
        draw.rectangle([roi, roi_lower_right], outline='#ffffff', fill=tuple(fill_color))
        # Add well target text:
        font = ImageFont.truetype("fonts/OpenSans.ttf", 9)
        text_position = (roi[0] + roi_width + 1, roi[1])
        draw.text(text_position, well_config[idx],'#ffffff',font=font)

    img_new = Image.alpha_composite(img, img_roi)  # composite captured & ROI images
    return(img_new)

def setup_camera():    # Set up camera
    config = cam.create_still_configuration(main={"size": res})
    cam.configure(config)
    cam.set_controls({
        "AeEnable": False,
        "ExposureTime": int(5 * 1e4),
        "AnalogueGain": 0.5,
        "AwbEnable": False,
        "ColourGains": (1.2,1.0)
        })
    os.makedirs(data_directory, exist_ok=True)
    time.sleep(3)   # time to stabilize settings

def roi_avg(image, roi):   # Return average pixel values in ROI
    r,b,g = 0,0,0
    px,py = roi
    for x in range(int(px),int(px+roi_width)):
        for y in range(int(py),int(py+roi_height)):
            xy = (x,y)
            r += image.getpixel(xy)[0]
            g += image.getpixel(xy)[1]
            b += image.getpixel(xy)[2]
    pixels = roi_width * roi_height;
    r /= pixels;
    g /= pixels;
    b /= pixels;
    return((r,g,b))

def get_image_data():    # Extract fluorescence measurements from ROIs in image
    cam.start()
    GPIO.output(LED_PIN, GPIO.HIGH)     # Turn on LED
    image = cam.capture_image("main")   # capture as PIL image
    cam.stop()
    GPIO.output(LED_PIN, GPIO.LOW)      # Turn off LED
    # Get average pixel value for each ROI:
    roi_avgs = []
    for roi in ROIs: 
        roi_avgs.append(roi_avg(image, roi)[1])  # green channel
    # Add timestamp & ROI averages to temp data file:
    timestamp = [int(time.time())]        # 1st entry is the time stamp
    with open('data/temp_data.csv', 'a') as f:
        writer = csv.writer(f, delimiter=',', lineterminator='\n')
        writer.writerow(timestamp + roi_avgs)
    return(roi_avgs)

def get_image(data):       # Return a PIL image with colored ROI boxes
    # data structure: [wellConfig, target_dict]
    # Acquire an image:
    cam.start()
    GPIO.output(LED_PIN, GPIO.HIGH)
    image = cam.capture_image("main")   # capture as PIL image
    cam.stop()
    GPIO.output(LED_PIN, GPIO.LOW)
    pil_image = add_ROIs(image, data)  # Add ROIs to image
    buffer = BytesIO()                   # create a buffer to hold the image
    pil_image.save(buffer, format="PNG") # Convert image to PNG
    png_image = buffer.getvalue()
    png_base64 = base64.b64encode(png_image).decode('utf-8')  # Encode as base64
    return(f"data:image/png;base64,{png_base64}")

def end_imaging():
    # Rename temp data file:
    date_str = time.strftime("%Y%m%d_%Hh%Mm%Ss")
    output_filename = date_str + '.csv'
    os.rename(data_directory + '/temp_data.csv', data_directory + '/' + output_filename)
    with open(data_directory + '/temp_data.csv', 'w') as f:
        pass      # Delete contents of the temp data file
    return(output_filename)

def analyze_data(filename):
    results = filter(data_directory + '/' + filename)   # run filter function from filter_data.py
    return(results)

