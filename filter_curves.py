# Code to filter LAMP data and calulate times to positive (TTPs)
#
# Will remove noise due to bubbles and spurious measurement errors

import numpy as np
print('numpy loaded')
from scipy.signal import butter, filtfilt
print('scipy.signal loaded')
import matplotlib.pyplot as plt
print('matplotlib.pyplot loaded')
import pandas as pd
print('pandas loaded')

def butter_lowpass_filter(data, cutoff, fs, order):
    nyq = 0.5 * fs  # Nyquist Frequency
    normal_cutoff = cutoff / nyq
    b, a = butter(order, normal_cutoff, btype='low', analog=False)
    return filtfilt(b, a, data)

def get_ttp(t,y):
    # Calculate slope at midpoint and project back to baseline to find TTP
    npoints = 2    # number of points before and after midpoint to use in linear fit
    indices = [idx for idx in range(len(y)) if y[idx] >= 0.5]
    ttp = -0.001   # set initial value slightly less than zero
    if len(indices)>0:
        idx = indices[0]    # 1st index > 0.5
        if idx > npoints+1:
            # linear curve fit:
            t_ = t[idx-npoints:idx+npoints]
            y_ = y[idx-npoints:idx+npoints]
            m,b = np.polyfit(t_, y_, 1)
            ttp = (y[idx]-b)/m   # x-axis intercept
    return ttp

def filter(filename):
    y_filtered_dict = []
    ttp = []
    with open(filename) as f:
        df = pd.read_csv(f, header=None)
        cut_number = 0        # number of initial data points to ignore
        t = df.iloc[:, 0].tolist()
        t = t[cut_number:]    # Remove initial data points
        t = [float(val-t[0]) for val in t]   # start time axis at t=0
        t = [val/60.0 for val in t]   # Convert seconds -> minutes
    
        cols = df.columns[1:]
    
        # Find TTP for each well:
        for idx in range(1,13):
            y = df.iloc[:,idx].tolist()
            y = y[cut_number:]     # Remove initial data points
            y = [float(val) for val in y]
    
            # Remove spurious data:
            for i,val in enumerate(y):
                if val < 2 and i>0:
                    y[i] = y[i-1]
            
            # Butterworth low-pass filter:
            T = t[-1]          # Sample Period (min)
            n = len(t)         # total number of samples
            fs = n/T           # sample rate (cycles/min)
            Wn = fs/10         # Wn cutoff (fs > Wn/2 required by Nyquist)
            order = 6          # filter order       
            yf = butter_lowpass_filter(y, Wn, fs, order)
            
            # shift curves to min value:
            y = [x-min(yf) for x in y]
            yf = [x-min(yf) for x in yf]
    
            # normalize to max value:
            y_norm = [x/max(yf) for x in y]
            yf_norm = [x/max(yf) for x in yf]

            yf_dict = [{'x':t[i], 'y':yf_norm[i]} for i in range(len(t))]
            y_filtered_dict.append(yf_dict)

            ttp.append(get_ttp(t,yf_norm))

    all_data = [ttp, y_filtered_dict]
    return(all_data)



