# Code to filter LAMP data and calulate times to positive (TTPs)
#
# Will remove noise due to bubbles and spurious measurement errors

import numpy as np
print('numpy loaded')
from scipy.signal import butter, filtfilt, sosfiltfilt
print('scipy.signal loaded')
import matplotlib.pyplot as plt
print('matplotlib.pyplot loaded')
import pandas as pd
print('pandas loaded')


def get_ttp(t,y):
    # Calculate slope at midpoint and project back to baseline to find TTP
    npoints = 2    # number of points before and after midpoint for linear fit
    idx = next((i for (i, val) in enumerate(y) if val > 0.5), None)   # idx of 1st value >0.5
    ttp = -0.001   # set initial value slightly less than zero
    if idx is not None:
        if idx > npoints+1 and idx < len(y)-npoints:
            # linear curve fit:
            t_ = t[idx-npoints:idx+npoints]
            y_ = y[idx-npoints:idx+npoints]
            m,b = np.polyfit(t_, y_, 1)
            ttp = (y[idx]-b)/m     # ttp is the x-axis intercept
    return ttp


def filter(filename, filter_factor=10.0, cut_time = 0.0):
    y_filtered_dict = []
    ttp = []
    with open(filename) as f:
        df = pd.read_csv(f, header=None)
        t = df.iloc[:, 0].tolist()
        t = [val/60.0 for val in t]              # Convert seconds -> minutes
        cut_num = int(cut_time/t[-1] * len(t))   # number of initial data points to drop
        print(f'cut_time: {cut_time}, cut_num: {cut_num}', flush=True)
        print(f't[-1]: {t[-1]}', flush=True)
        print(f'cut_time/t[-1]: {cut_time/t[-1]}', flush=True)
        print(f'len(t): {len(t)}', flush=True)
        print(f'cut_time/t[-1] * len(t): {cut_time/t[-1] * len(t)}', flush=True)
        print(f'int(cut_time/t[-1] * len(t)): {int(cut_time/t[-1] * len(t))}', flush=True)
        
        t = t[cut_num:]                          # Remove initial data points
        t = [float(val-t[0]) for val in t]       # start time axis at t=0
    
        cols = df.columns[1:]
    
        # Find TTP for each well:
        for idx in range(1,13):
            y = df.iloc[:,idx].tolist()
            y = y[cut_num:]          # Remove initial data points
            y = [float(val) for val in y]
    
            # Remove spurious dropped data:
            for i,val in enumerate(y):
                if val < 2 and i>0:
                    y[i] = y[i-1]
            
            # Butterworth low-pass filter:
            T = t[-1]                # sample Period (min)
            n = len(t)               # total number of samples
            fs = n/T                 # sample rate (cycles/min)
            f_nyquist = fs/2.0       # Nyquist frequency
            Wn = f_nyquist/filter_factor    # Low pass cutoff (cycles/min)
            if Wn >= f_nyquist:      # Wn < f_nyquist required
                Wn = 0.999*f_nyquist
            order = 6          # filter order       
            #
            # Pre-SOS filter:
            # b, a = butter(order, Wn, btype='low', analog=False, fs=fs)
            # yf = filtfilt(b, a, y)   # filtered data
            #
            # SOS filter is a better option:
            sos = butter(order, Wn, btype='low', analog=False, fs=fs, output='sos')
            yf = sosfiltfilt(sos, y)   # filtered data

            print(f'filter parameters: n={n}, T={T}, fs={fs}, f_nyquist={f_nyquist}, Wn={Wn}', flush=True)
            print(yf, flush=True)

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



