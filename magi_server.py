# Multiplexed Array Gene Imager (MAGI) server
#
# Run at startup via rc.local
#
# Start in background, with stdout logged to nohup.out:
# nohup python3 -u python_server.py &

from simple_pid import PID   # see https://pypi.org/project/simple-pid/
print('simple_pid loaded')
import json
print('json loaded')
import imager       # camera image capture and analysis
print('imager loaded')
from http.server import BaseHTTPRequestHandler, HTTPServer
print('http.server loaded')
import sys
print('sys loaded')
import os
print('os loaded')
import time
print('time loaded')
import threading
print('threading loaded')
import RPi.GPIO as GPIO
print('RPi.GPIO loaded')
from gpiozero import MCP3008
print('gpiozero loaded')

# GLOBALS:

# PID:
PWM_PIN = 19
FAN = 15
LED_PIN = 13
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.setup(FAN, GPIO.OUT) 
GPIO.setup(PWM_PIN, GPIO.OUT) 
pwm = GPIO.PWM(PWM_PIN,490)
pid = PID(Kp=13, Ki=0.17, Kd=1.2, setpoint=60)     # Can add sample_time, output_limits, etc.
pid.output_limits = (0,100)
b_bias = 0.82                   # value for linear interpolation of temperature
well_temp = 0                   # current well temperature

# Start heater PWM:
duty_cycle = 0
pwm.start(duty_cycle)

# ADC for temperature sensing:
const = MCP3008(channel=0)
Tb = MCP3008(channel=1)
Tt = MCP3008(channel=2)

# Flag to halt temperature control thread:
stop_event = threading.Event()

class S(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.send_header('Access-Control-Allow-Origin', '*');
        self.end_headers()




    def do_GET(self):
        file_path = self.path 
        if os.path.isfile(file_path):
            file_size = os.path.getsize(file_path)
            if file_path.endswith(".csv"):
                content_type = "text/csv"
            else:
                content_type = "application/octet-stream"
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Disposition", f'attachment; filename="{os.path.basename(file_path)}"')
            self.send_header("Content-Length", str(file_size))
            self.end_headers()

            # Send the file content:
            with open(file_path, "rb") as file:
                self.wfile.write(file.read())
        else:
            # If file not found, send a 404 response
            self.send_response(404)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(b"File not found.")




    # File download requests come as GET requests:
    def do_GET2(self): 
        print(self.path)
        try:
            if self.path.endswith(".csv"):
                with open(self.path) as f:
                    self.send_response(200)
                    self.send_header('Content-type', 'text/csv')
                    self.end_headers()
                    results = f.read()
                    self.wfile.write(results.encode('utf-8'))

                    f.close()
                    return

        except IOError:
            print("error")
            self.send_error(404,'File Not Found: %s' % self.path)


        #self._set_response()
        #results = imager.get_data()
        #self.wfile.write(bytes(results).encode('utf-8'))
        #self.wfile.write(",".join([str(x) for x in results]).encode('utf-8'))

    # Server function requests come as POST requests:
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])  # gets the size of data
        post_data = self.rfile.read(content_length)           # get the data
        self._set_response()
        post_data_decoded = post_data.decode('utf-8')
        post_dict = dict(pair.split('=') for pair in post_data_decoded.split('&'))
        info = json.loads(post_dict['todo'])
        action = info[0]
        data = info[1]
        #print(f'{action}: {data}')
        if action == 'start':            # Start the PID loop for temp control
            start_pid()
            results = "PID thread started";
            self.wfile.write(results.encode('utf-8'))
        if action == 'getImage':         # Get an image of the chip with colored ROIs
            # data structure from magi.html: [wellConfig, target_dict]
            results = imager.get_image(data)
            self.wfile.write(results.encode('utf-8'))
        if action == 'getData':          # Capture & analyze single camera image
            results = imager.get_image_data()
            results.append(well_temp)
            self.wfile.write(",".join([str(x) for x in results]).encode('utf-8'))
        elif action == 'end':            # Turn off PID loop and rename final data file
            results = imager.end_imaging()
            end_pid()
            self.wfile.write(results.encode('utf-8'))
        elif action == 'analyze':        # Filter curves & extract TTP values
            filename = data;
            results = imager.analyze_data(filename)
            self.wfile.write(json.dumps(results).encode('utf-8'))
            #self.wfile.write(results.encode('utf-8'))
        elif action == 'shutdown':       # Power down the Pi
            shutdown()

    def log_message(self, format, *args):  # Suppress server output
        return

# Calibration function for PWM (temperature control):
def cali_fun(y_data):
    y_adj = (
        0.00000000000225474 * y_data ** 5 -
        0.00000000027648357 * y_data ** 4 -
        0.00000000611604906 * y_data ** 3 +
        0.00005022119088712 * y_data ** 2 +
        0.10392688339191500 * y_data +
        24.8772182731984000
        )
    return y_adj

# Temperature control (run in separate thread):
def run_pid(stop_event):
    global well_temp
    global const, Tb, Tt
    times, board, chip, well  = [], [], [], []
    rd = 50*1e6
    ptrd = time.time_ns()
    start_time = time.time_ns()
    while not stop_event.is_set():
        try:
            # Establish list that will store values from ADC and read the ADC
            value_raw = [const.value, Tb.value, Tt.value]
            values = [x*1023 for x in value_raw]
                
            # Change the duty cycle based on the ADC reading    
            duty_cycle = pid(b_bias*cali_fun(values[1] -  values[0]) + (1-b_bias)*cali_fun(values[2] -  values[0]))
            pwm.ChangeDutyCycle(duty_cycle)
    
            # Store values every 50ms to use for plotting
            if time.time_ns() - ptrd >= rd:
                ptrd = time.time_ns()
                times += [(ptrd - start_time)/60e9]
                board += [cali_fun(values[1] -  values[0])]
                chip += [cali_fun(values[2] -  values[0])]
                well_temp = b_bias*cali_fun(values[1] -  values[0]) + (1-b_bias)*cali_fun(values[2] -  values[0])
                well += [well_temp]
        except Exception as e:
            print(f'Exception in run_pid: {e}')


def start_pid():
    GPIO.output(FAN, GPIO.HIGH)   # Turn on system fan
    t = threading.Thread(target=run_pid, args=(stop_event,))    # Start the PID loop
    t.daemon = True
    t.start()

def end_pid():
    stop_event.set()
    pwm.ChangeDutyCycle(0)

def run(port):
    handler_class=S
    server_address = ('', port)
    httpd = HTTPServer(server_address, handler_class)
    print("MAGI server started")
    imager.setup_camera()
    print("Camera setup done")
    print("System ready")
    try:
        httpd.serve_forever()     # blocking call
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    GPIO.cleanup()
    print('\n\nGPIO cleaned up')

def shutdown():
    GPIO.cleanup()
    from subprocess import call
    call("sudo shutdown -h now", shell=True)


if __name__ == "__main__":
    run(8080)


