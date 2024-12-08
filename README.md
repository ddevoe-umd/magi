Multiplexed Array Gene Imager (MAGI)
-

Hardware:
-
* Raspberry Pi Zero 2 W (Python3, Raspberry Pi OS)
* Pi Camera (InnoMaker CAM OV5647, 5MP)

Installation 
-
1. Install required Python modules and set up ram disk:
   `setup.sh`
2. Edit `/etc/rc.local` to run server code at boot:
   `nohup python3 -u ~/magi/magi_server.py > ~/magi/nohup.out &`
3. Synchronize Pi system time for correct timestamps on file names:
   `sudo timedatectl`

Operation:
-
Open `magi.html` on the client laptop

Pi:
-
* `magi_server.py`
	- set up to launch on boot via `/etc/rc.local`
	- handle Javascript client <--> Python server communication
	- manage PID control of heater
	- access `imager.py` to send data to client
* `imager.py`
	- get & process data from the camera
* `filter_curves.py`
	- filter noise and evaluate time-to-positive values

Client:
-
* `magi.html`
	- client user interface
* `css/style.css`
	- style sheet for plot.html
* `js/canvasjs.min.js`
	- Javascript code for plotting (js folder must be in same directory as `plot.html`)
* `fonts/OpenSans.ttf`
	- Truetype font for image annotations
