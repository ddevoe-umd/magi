/* 
   Main MAGI Javascript code
*/

// Globals:

// All possible targets with chart display properties:
const targets = {          
  "MecA": ["#4C4CEB", "solid"],   
  "FemB": ["#5ED649", "solid"],
  "Nuc": ["#DD4444", "solid"],
  "POS": ["#222222", "dash"],
  "NEG": ["#555555", "dot"]
};

var cardFilename;     // Assay card file name selected by user
var wellConfig = [];  // Well array configuration, starting at upper left
var positives = {};   // positive detection events (not yet used...)

var isRunning = false;  // flag to track if assay is currently running

var wakeLock;

var assayTimer;              // timer for running an assay
var startTime;               // assay start time stamp
const img = document.getElementById('image');      // chip image
var imgCaptureTime;                              // time stamp for image

const serverURL = "http://raspberrypi.local:8080";
const serverFilePath = "/path/to/ramdisk/"
var currentFileName;          // base data file name for most recent assay

const startColor = "#3d8f13";   // start button color when active
const stopColor = "#a82c25";    // stop button color when active

var showAllWells = false;     // select TTP display mode (all wells vs. grouped)
var ttpData = [];             // array to hold TTP results
var filteredChart;            // chart to display filtered curves
var ttpChartAll;              // chart to display all TTP values
var ttpChartGrouped;          // chart to display avg & stdev TTP values
// Note: other charts do not currently use global variables...

var resizeTimer;           // set delay between image window resizing detection

var exposureTime = 50;     // imager parameters, initial vals must match server vals
var analogueGain = 0.5;
var redGain = 1.2;
var blueGain = 1.0;

// Prevent zooming with Ctrl +/-
document.addEventListener('keydown', function(event) {
  let k = event.key;
  if ((event.ctrlKey || event.metaKey) && (k === '+' || k === '-' || k === '=')) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && k === '0') {
    event.preventDefault();  // Prevent resetting zoom with Ctrl + 0
  }
});


// Custom log function:
function log(message, color=null, fontSize=null, bold=false, lines=false) {
	textToAdd = "";
  document.getElementById('log').style.backgroundColor = 'white';
  if (lines) {
    textToAdd = `<span style="font-family: 'Courier New', Courier, monospace;">`;
  	textToAdd += "\u2014".repeat(50) + "</span><br>";
  }
  let style = "";
  if (color) {
  	style += `color:${color};`;
  }
  if (fontSize) {
  	style += `font-size:${fontSize}pt;`;
  }
  if (bold) {
    style += "font-weight: bold;";
  }
  if (color || fontSize) {
    textToAdd += `<span style="${style}">` + message + "</span>";
  } else {
    textToAdd += message;
  }
  if (lines) {
    textToAdd += `<span style="font-family: 'Courier New', Courier, monospace;">`;
    textToAdd += "<br>" + "\u2014".repeat(50) + "</span>";
  }
	console.log(textToAdd);      // display message in Javascript console
	const log = document.getElementById("log");
	log.innerHTML += textToAdd + "<br />";      // display message in div
	log.scroll({top: log.scrollHeight, behavior: 'smooth'}); // pin scroll to bottom
}


// Custom notification window:
function notification(message) {
    const win = document.createElement('div');        // create the window container
    win.className = 'notification-window';
    win.style.opacity = '0.9';
    const content = document.createElement('div');    // create the content container
    content.className = 'notification-content';
    const text = document.createElement('p');
    const div = document.createElement('div');
    text.textContent = message;
    content.appendChild(text); 
    content.appendChild(div);
    div.className = 'spinner';
    win.appendChild(content); 
    document.body.appendChild(win); 
    log(`notification window added: ${message}`);
    makeDraggable(win);
    return(win);             // return the window so it can be deleted later
}

// Make the notification window draggable from any point:
function makeDraggable(element) {
    let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;
    element.onmousedown = function (e) {
        e.preventDefault();
        mouseX = e.clientX;     // Get initial mouse position
        mouseY = e.clientY;
        document.onmousemove = dragElement;     // Event listeners
        document.onmouseup = stopDragElement;
    };
    function dragElement(e) {
        e.preventDefault();
        offsetX = mouseX - e.clientX;    // Calculate the new cursor position
        offsetY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        element.style.top = (element.offsetTop - offsetY) + "px";    // Update the position
        element.style.left = (element.offsetLeft - offsetX) + "px";
    }
    function stopDragElement() {       // Remove the event listeners
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// Get wake lock to prevent system from sleeping:
async function getWakeLock() {
	try {
		wakeLock = await navigator.wakeLock.request('screen');
		log('Wake Lock acquired');
	} catch(err) {
		log(`Error acquiring wake lock: ${err}`);
	}
}

// Disable / Enable / Disable All HTML elements (buttons, sliders) in a list of IDs:
function disableElements(elements) {
	elements.forEach(e => document.getElementById(e).disabled = true);
}
function enableElements(elements) {
	elements.forEach(e => document.getElementById(e).disabled = false);
}
function disableAllElements() {
	allElements = ["load","start","stop","saveraw","adjust","period-slider","analyze",
								"filter-slider","cut-time-slider", "threshold-slider", 
                "toggleTTP","savefiltered","saveTTP","getImage","reboot",
                "shutdown","getLog","clearLog"];
	log(allElements);
	allElements.forEach(e => document.getElementById(e).disabled = true);
}


// Initial window loading:
window.onload = async function () {
  document.getElementById('start').style.height = '40px'; // double start button height
	disableAllElements();
  var period = document.getElementById('period-slider').value;  // Get sampling period
  document.getElementById('period-slider-text').innerHTML = `Period: ${period}s`;
  // reset imager parameters in case they were previously changed without Pi restart:
  imagerValuesToServer({
    'exposure-time': exposureTime,
    'analogue-gain': analogueGain,
    'red-gain': redGain,
    'blue-gain': blueGain
  });
  await getFirstImage();    // Get initial image w/o ROIs
  enableElements(["load","adjust","shutdown","reboot","getImage","getLog","clearLog"]);
  // set up arrow key adjustments for sliders:
  sliderKeySetup('cut-time-slider','cut-time-slider-text');    
  sliderKeySetup('threshold-slider','threshold-slider-text'); 
};




// Wait for initial image from the server at code start to make sure
// camera is ready before allowing an assay to be run:
async function getFirstImage() {
  win = notification("Searching for MAGI server");
  while (true) {
  	try {
      const awaitResult = await getImage();
	  	win.remove();    // close notification window
	  	return;     
	  } catch (e) {  // getImage() timed out
      log(e)
      if (e.message=="Load failed") {   // timeout error
      	log("getImage() attempt failed, retrying...");
      }
      else {   // some other kind of error, wait 5 sec before retrying
        log("getImage() load error (not timeout), retrying in 5 sec...");
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
	  }
	}
}


// Apply the maximum width to all buttons:
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  let maxWidth = 0;
  // Determine the maximum width of any button
  buttons.forEach(button => {
    const buttonWidth = button.offsetWidth;
    if (buttonWidth > maxWidth) {
      maxWidth = buttonWidth;
    }
  });
  buttons.forEach(button => {
	  button.style.width = maxWidth + "px";
  });
});


// Load a user-defined JSON card file defining the well configuration:
function loadCard() {
	document.getElementById('hidden-card-file-input').click();
}
// Use an HTML input element to handle local file loading:
document.getElementById('hidden-card-file-input').addEventListener('change', function (event) {
  const file = event.target.files[0];    // get filename from user dialog
  if (file && file.name.endsWith('.card')) {
    cardFilename = file.name;
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const cardJson = JSON.parse(e.target.result);
        // Extract card information:
        wellConfig = cardJson["well_config"];
        positives = cardJson["positives"];
			  // Display & dim initial empty charts:
        if (filteredChart == null) {   // filteredChart has not yet been displayed,
          displayFilteredData([[]]);}  // so display chart with empty data
			  dimChart(filteredChart);
			  displayTTP();
			  dimChart(ttpChartAll);
			  enableElements(["start","period-slider"]);		// Let user start the assay
			  log("Assay card loaded:");
        log(wellConfig);
        log(JSON.stringify(positives));
        // Display the assay card name in the start button:
        const html = `Run card:<br>${cardFilename.substring(0, cardFilename.length-5)}`;
        document.getElementById('start').innerHTML = html;
        // Get a new image with ROIs matched to the assay card:
			  getImage();
        // Highlight start button after card loading:
        document.getElementById('start').style.backgroundImage = `linear-gradient(${startColor}, ${startColor})`;
        document.getElementById('start').style.borderWidth = "1px";
      } catch (e) {
        log(e);
      }
    };
    reader.onerror = function () {
      log('Read error (check assay card format)');
    };
    reader.readAsText(file);
  } else {
    log('Please select a valid .card file');
  }
});


// Recieve values either programmatically or from the adjustImager modal dialog, 
// and make changes through the server:
async function imagerValuesToServer(values) {
  exposureTime = values["exposure-time"];
  analogueGain = values["analogue-gain"];
  redGain = values["red-gain"];
  blueGain = values["blue-gain"];
  log(`New imager settings:<br>
    Exposure time: ${exposureTime}<br>
    Analog gain: ${values["analogue-gain"]}<br>
    Red channel gain: ${redGain}<br>
    Blue channel gain: ${blueGain}`,
    color='#00ff00',
    fontsize=7,
    bold=false,
    lines=true
    );
  // Ask server to adjust camera settings:
  log("Adjusting imager settings...");
  let message = 'adjust';
  let data = [exposureTime, analogueGain, redGain, blueGain];
  let response = await queryServer(JSON.stringify([message,data]));
  if (response.ok) {
    results = await response.text();
    log(results);
    log("Imager settings updated");
  }
}

// Open a modal dialog to allow user to change imager settings:
async function adjustImager() {
  const modalWindow = window.open('', 'ModalWindow', 'width=300,height=170');
  modalWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="css/slider.css">
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/buttons.css">
    </head>
      <body>
        <div class="modal">
            <div class="slider-container">
              <div id="exposure-time-text" class="slider-text">Exposure time: ${exposureTime} ms</div>
              <input id="exposure-time" type="range" min="0" max="500" value="${exposureTime}" class="slider">
            </div>
            <div class="slider-container">
              <div id="analogue-gain-text" class="slider-text">Analog gain: ${analogueGain}</div>
              <input id="analogue-gain" type="range" min="0" max="6" value="${analogueGain}" step="0.1" class="slider">
            </div>
            <div class="slider-container">
              <div id="red-gain-text" class="slider-text">Red gain: ${redGain}</div>
              <input id="red-gain" type="range" min="0" max="32" value="${redGain}" step="0.1" class="slider">
            </div>
            <div class="slider-container">
              <div id="blue-gain-text" class="slider-text">Blue gain: ${blueGain}</div>
              <input id="blue-gain" type="range" min="0" max="32" value="${blueGain}" step="0.1" class="slider">
            </div>
            <div class="text-center"><button id="adjust" class="button">Adjust</button></div>
        </div>
        <script>
          // Event listeners to update slider texts:
          slider1 = document.getElementById("exposure-time");
          slider1.addEventListener('input', function() {
            document.getElementById('exposure-time-text').innerHTML = "Exposure time: " + slider1.value + "ms";
          });
          slider2 = document.getElementById("analogue-gain");
          slider2.addEventListener('input', function() {
            document.getElementById('analogue-gain-text').innerHTML = "Analog gain: " + slider2.value;
          });
          slider3 = document.getElementById("red-gain");
          slider3.addEventListener('input', function() {
            document.getElementById('red-gain-text').innerHTML = "Red gain: " + slider3.value;
          });
          slider4 = document.getElementById("blue-gain");
          slider4.addEventListener('input', function() {
            document.getElementById('blue-gain-text').innerHTML = "Blue gain: " + slider4.value;
          });          
          // Send values back to main window on button click:
          document.getElementById('adjust').addEventListener('click', function() {
            window.opener.imagerValuesToServer({
              'exposure-time': document.getElementById('exposure-time').value,
              'analogue-gain': document.getElementById('analogue-gain').value,
              'red-gain': document.getElementById('red-gain').value,
              'blue-gain': document.getElementById('blue-gain').value
            });
            window.close();
          });
        </script>
      </body>
    </html> `);
}



// Event listener to update assay period value from slider:
document.getElementById("period-slider").addEventListener('input', function() {
  document.getElementById('period-slider-text').innerHTML = `Period: ${this.value}s`;
});

// Event listener to update curve filter factor from slider:
document.getElementById("filter-slider").addEventListener('input', function() {
  const html = `f<sub class="sub75">c</sub> = f<sub class="sub75">nyq</sub>/${this.value}`;
  document.getElementById('filter-slider-text').innerHTML = html;
});


// Helper function to update cut time slider text:
function updateCutTimeSlider() {
  const slider = document.getElementById('cut-time-slider');
  var sliderText = document.getElementById('cut-time-slider-text')
  const html = `t<sub class="sub75">cut</sub>: ${slider.value} min`;
  sliderText.innerHTML = html;
}

// Helper function to update threshold slider text:
function updateThresholdSlider() {
  const slider = document.getElementById('threshold-slider');
  var sliderText = document.getElementById('threshold-slider-text')
  const html = `threshold: ${slider.value}`;
  sliderText.innerHTML = html;
}

// Event listener to update filter cut time from slider:
document.getElementById("cut-time-slider").addEventListener('input', updateCutTimeSlider);

// Event listener to update filter threshold from slider:
document.getElementById("threshold-slider").addEventListener('input', updateThresholdSlider);

// Enable sliders to be adjusted using left/right arrow keys:
function sliderKeySetup(sliderName, sliderTextName) {
  const slider = document.getElementById(sliderName);
  const sliderText = document.getElementById(sliderTextName);
  let isHovered = false; // Tracks whether the mouse is hovering over the slider
  slider.addEventListener('mouseenter', () => {
    isHovered = true;
  });
  sliderText.addEventListener('mouseenter', () => {
    isHovered = true;
  });
  slider.addEventListener('mouseleave', () => {
    isHovered = false;
  });
  sliderText.addEventListener('mouseleave', () => {
    isHovered = false;
  });
  document.addEventListener('keydown', (event) => {
    if (!isHovered) return;   // Only respond to key events if the slider is hovered
    const step = parseFloat(slider.step);
    let currentValue = parseFloat(slider.value);
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault(); // Prevent default browser behavior
      if (currentValue + step <= slider.max) {
        slider.value = (currentValue + step).toFixed(1);
        // Update all sliders:
        updateCutTimeSlider();
        updateThresholdSlider();
      }
    }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault(); // Prevent default browser behavior
      if (currentValue - step >= slider.min) {
        slider.value = (currentValue - step).toFixed(1);
        // Update all sliders:
        updateCutTimeSlider();
        updateThresholdSlider();
      }
    }
  });
}


// Send POST message to server:
async function queryServer(message) {
	let response = await fetch( serverURL, {
		method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
		body: 'todo=' + message
	});
	return(response)
}

async function startPID() {
	log("startPID() called");
	wakeLock = getWakeLock();     // Acquire wake lock when assay starts
	let message = 'start';
	let data = '';
	let response = await queryServer(JSON.stringify([message,data]));
  if (response.ok) {
		results = await response.text();
		log(results);
		let results_array = results.split(",");
		newData = [];
		results_array.forEach(ele => newData.push(+ele))   // strings to numbers
		return(newData);
	}
}

async function endAssay() {
	log("endAssay() called");
	await wakeLock.release();          // Release the wake lock when assay ends
	log("wake lock released");
	let response = confirm(`End current assay for ${cardFilename}?`);
	if (response) {
		disableElements(["stop"]);
    isRunning = false;    // flip the flag to stop the assay
		//if (assayTimer) clearInterval(assayTimer);
	  enableElements(["load","start","period-slider"]);
		let message = 'end';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) {
			// Update interface elements appropriately:
      document.getElementById('stop').style.backgroundImage = "linear-gradient(#464d55, #25292e)";
      document.getElementById('stop').style.borderWidth = "0px";
      enableElements(["saveraw","analyze","filter-slider","cut-time-slider","threshold-slider",
                      "shutdown","reboot","getLog","clearLog"]);
      results = await response.text();
			log("Server response:")
			log(results);
			currentFileName = results;
	   	analyzeData();
		}
	}
	else {
			log("endAssay() cancelled");
	}
}

async function getData() {
  while (true) {   // repeat indefinitely in case of timeout error in server
  	log(`getData() called @ t = ${((Date.now()-startTime)/1000/60).toFixed(2)} min`);
    try {
    	let message = 'getData';
    	let data = '';
    	let response = await queryServer(JSON.stringify([message,data]));
      if (response.ok) {
    		results = await response.text();
    		log(`Server response: JSON data length = ${results.length}`);
    		let results_array = results.split(",");
    		newData = [];
    		results_array.forEach( e => newData.push(+e))   // strings to numbers
    		return(newData);
    	}
    } catch(e) {
      log(`Error in getData: ${e}`);
    }
  }
}

async function getImage() {
	log("getImage() called");
  document.getElementById('image').style.backgroundColor = 'white';
	let message = 'getImage';
	let data = [cardFilename, wellConfig, targets];  // info for image ROIs etc.
	let response = await queryServer(JSON.stringify([message,data]));
  if (response.ok) {
		results = await response.text();
		log("Image data received")
		const base64Image = results;
		// Display the image:
		img.src = base64Image;
    imgCaptureTime = ((Date.now()-startTime)/1000/60).toFixed(2);
    img.style.backgroundImage = "linear-gradient(#464d55, #25292e)"; // change background on image load
	}
}


// Get unscaled chip image:
function unscaledImage() {  
	const scaledImage = document.getElementById('image');
  const unscaledImage = new Image();
  unscaledImage.src = scaledImage.src;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = unscaledImage.naturalWidth;
  canvas.height = unscaledImage.naturalHeight;
  ctx.drawImage(unscaledImage, 0, 0);
  const dataURL = canvas.toDataURL("image/png");
  return(dataURL);
}


// Open chip image in a new window when clicked:
img.addEventListener('click', () => {
	const html = 
		`<!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
          body {
            margin: 0;
            overflow: hidden;  /* prevent scrollbars */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            background-color: #f0f0f0;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            width: 200%;      /* max image size when zoomed in */
            height: 200%;
            cursor: zoom-in;
          }
        </style>
      </head>
      <body>
        <img id="chipImg" src="${unscaledImage()}">
      </body>
      </html>`
	const imgWindow = window.open('', '_blank', "width=640, height=480, resizable=yes");
	imgWindow.document.open();
  imgWindow.document.write(html);
  imgWindow.document.close();

  // keep window aspect ratio on resizing:
  imgWindow.addEventListener('resize', () => {  
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {  // limit time between resizing events
      const w = imgWindow.innerWidth;
      const h = imgWindow.innerHeight;
      const AR = 640/480;
      if (h < w/AR) {
        imgWindow.resizeTo(w, Math.round(w/AR));
      }
      else {
        imgWindow.resizeTo(Math.round(h*AR), h);
      }
    }, 100);
  });
  // toggle 2x window zoom on user click:
  imgWindow.addEventListener('click', () => {
  	const w = imgWindow.innerWidth;
    if (w == 640) { 
    	imgWindow.resizeTo(1280,960);
      imgWindow.document.getElementById('chipImg').style.cursor = "zoom-out";
      log("zoomed in")
    }
    else { 
    	imgWindow.resizeTo(640,480);
      imgWindow.document.getElementById('chipImg').style.cursor = "zoom-in";
      log("zoomed out")
    }
  });
});


// Filter the raw data and get TTP values:
async function analyzeData() {
	log("analyzeData() called");
	let win = notification("Filtering data and extracting TTP values");
  let message = 'analyze';
  let filterFactor = document.getElementById('filter-slider').value;
  let cutTime = document.getElementById('cut-time-slider').value;
  let threshold = document.getElementById('threshold-slider').value;
	let data = [currentFileName, filterFactor, cutTime, threshold];  // package data for server
	let response = await queryServer(JSON.stringify([message,data]));
	if (response.ok) {
		results = await response.text();
		log("Server response: ");
		if (results) { 
		  log(`JSON data length = ${results.length}`);
		  // Check for NaN in filter results, which seems to happen when the
		  // raw image data contains too many zero values:
		  if (results.includes("NaN")) {
		  	log("Anlysis incomplete:");
		  	log("- NaN found in filter data");
		    log("- check if camera brightness values == 0");
		  }
		  else {
				let data = JSON.parse(results);
		    ttpData = data[0];  // ttpData is global
		    let xy = data[1];
		    displayFilteredData(xy);
				displayTTP();
			  enableElements(["savefiltered","toggleTTP","saveTTP"]);
			}
		}
		else { 
			log("Anlysis incomplete:");
			log("- check # data points, >21 required");
			log("- ensure Wn < f_nyquist");
		}
	}
  win.remove();    // Remove the notification window
}


// Download files with raw and filtered amplification data. 
// Can't combine into a single function since opening multiple
// windows leads to popup blocking in browser:
function downloadCrossOriginFile(fileName) {
	let fileUrl = serverURL + serverFilePath + fileName;
  fetch(fileUrl)
    .then(response => {
      if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
      return response.blob(); // Convert the response to a Blob
    })
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);   // Create a local URL for the Blob
      const a = document.createElement('a');       // Create a temporary <a> element
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);      // Trigger the download
      a.click();
      document.body.removeChild(a);      // Clean up
      URL.revokeObjectURL(blobUrl);
    })
    .catch(error => {
      console.error('Error downloading file:', error);
  });
}
function saveRaw() {
	log("saveRaw() called");
  downloadCrossOriginFile(currentFileName + ".csv");
}
function saveFiltered() {
	log("saveFiltered() called");
  downloadCrossOriginFile(currentFileName + "_filt.csv");
}

// System shutdown:
async function shutdown() {
	log("shutdown() called");
	let response = confirm("Do you want to shut down?");
	if (response) {
		log("System is powering off!!!");
		disableAllElements();
		let message = 'shutdown';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) {} // Pi should shut down, so no response
	}
	else {
		log("shutdown cancelled");
	}
}

// System reboot:
async function reboot() {
	log("reboot() called");
	let response = confirm("Do you want to reboot?");
	if (response) {
		log("System is rebooting!!!");
		disableAllElements();
		let message = 'reboot';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) { } // Pi should reboot, so no response
    // Wait a bit and try reloading after reboot:
    await new Promise(resolve => setTimeout(resolve, 8000));
		getFirstImage(); 
	}
	else {
		log("reboot cancelled");
	}
}


// Show server log:
async function getServerLog() {
	log("getServerLog() called");
	let message = 'getLog';
  let data = '';
	let response = await queryServer(JSON.stringify([message,data]));
  if (response.ok) { 
		let responseText = await response.text();
		responseText = responseText.replace(/\\n/g, "<br>");  // repace newline with html break
		responseText = responseText.replace(/^"|"$/g, '');    // strip double quotes @ start and end
		log("Start Server Log", color="#fff", fontSize=10, bold=false, lines=true);
		log(responseText, color="#fff", fontSize=8, bold=true); 
    log("End Server Log", color="#fff", fontSize=10, bold=false, lines=true);
	} 
}

// Clear server log:
async function clearServerLog() {
	log("clearServerLog() called");
	let conf = confirm("Clear the server log file?");
	if (conf) {
		disableElements(["clearLog"]);
		let message = 'clearLog';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) { 
			responseText = await response.text();
			log(`Server response: ${responseText}`); 
		} 
	}
	else {
		log("clearServerLog() cancelled");
	}
}

// Function to display/hide grouped data sets in charts:
function toggleGroupedSeries(e) {
  var groupSelected = e.dataSeries.group;
  for(var i = 0; i < e.chart.data.length; i++) {
    if(e.chart.options.data[i].group === groupSelected) {
      if (typeof (e.chart.options.data[i].visible) === "undefined" || e.chart.options.data[i].visible) {
        e.chart.options.data[i].visible = false;
      } else {
        e.chart.options.data[i].visible = true;
      }
    }
  }
}

// Helper function to (a) format an integer as a string with commas
// and (b) limit floats to 3 digits of precision
function addIntCommas(num) {
  if (num>1) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  } else {
    return num.toFixed(3).toString()
  }
}

// Set up charts for both the raw & filtered amplification curves:
function setupAmplificationChart(targetContainer) {
	// Set up empty array with length equal to the number of wells, see toggleGroupedSeries().
  // wellArray is a list to hold plot data with format:
  //   [ [{x: t1, y: val1}, {x: t2, y: val2}, ...]  <- well 1
  //     [{x: t1, y: val1}, {x: t2, y: val2}, ...]  <- well 2
  //      ... ]                                     <- etc
  let wellArray = Array.from({ length: wellConfig.length }, () => []);
	let plotInfo = [];
	let g = 1;   // group number (for grouping target sets in charts)
	for (const key in targets) {
		let key_found = false;
		for (let i=0; i<wellConfig.length; i++) {
      if (wellConfig[i] == key) {
      	// Set up plot data & shared plot attributes:
				data_dict = {	
					name: key,
					type: "line",
					group: g,
					dataPoints: wellArray[i],
		      color: targets[wellConfig[i]][0],
					lineDashType: targets[wellConfig[i]][1]
				};
				// Only show each gene target in the legend once:
				if (!key_found) {
					data_dict.showInLegend = true;
					key_found = true;
				}
				plotInfo.push(data_dict);
      }
    }
    g += 1;
  }
	let chart = new CanvasJS.Chart(targetContainer, {
		zoomEnabled: true,
		cornerRadius: 4,
 		title: {
			text: "Fluorescence",
			fontFamily: "tahoma",
			fontSize: 14
		},
		axisX: {
			title: "Time (min)",
			titleFontSize: 13
		},
		axisY: {
			includeZero: true,
			title: "Fluorescence (arb)",
			titleFontSize: 13
		}, 
    toolTip: {
			shared: true,
      cornerRadius: 6,
      animationEnabled: true,
      fontSize: 10,
      borderThickness: 0,
			borderColor: "#fff",
      // control display format of tooltip values:
      contentFormatter: function(e) {
        var content = "t = " + e.entries[0].dataPoint.x.toFixed(2) + " min<br/>";
        for (var i = 0; i < e.entries.length; i++) {
          var seriesColor = e.entries[i].dataSeries.color;
          content += "<span style='color:" + seriesColor + ";'>" 
              + e.entries[i].dataSeries.name + "</span>: " 
              + addIntCommas(e.entries[i].dataPoint.y) + "<br/>";
        }
        return content;
      }
    },
    legend: {
	    cursor:"pointer",
	    verticalAlign: "top",
	    fontSize: 10,
			fontColor: "dimGrey",
	    itemclick: function(e) {
	      toggleGroupedSeries(e);
	      e.chart.render();
	    }
	  },
		data: plotInfo
	});
	chart.render();
	return [chart, wellArray]
}


function setupTemperatureChart(targetContainer) {
	let plotInfo = [];
	let temperature = [];
	plotInfo.push({ 	
		type: "line",
    color: "#BB2222",
		showInLegend: true,
		name: "Temperature",
		dataPoints: temperature
	})
	let chart = new CanvasJS.Chart(targetContainer, {
		zoomEnabled: true,
		title: {
			text: "Temperature",
			fontFamily: "tahoma",
			fontSize: 14
		},
		axisX: {
			title: "Time (min)",
			titleFontSize: 13
		},
		axisY:{
			includeZero: true,
			title: "Temperature (\u00B0C)",
			titleFontSize: 13
		}, 
		toolTip: {
			shared: false,
      cornerRadius: 6,
			animationEnabled: true,
      fontSize: 10,
      borderThickness: 0,
			borderColor: "#fff",
      // control display format of tooltip values:
      contentFormatter: function(e) {
        var content = "t = " + e.entries[0].dataPoint.x.toFixed(2) + " min<br/>";
        for (var i = 0; i < e.entries.length; i++) {
          var seriesColor = e.entries[i].dataSeries.color;
          content += "<span style='color:" + seriesColor + ";'>" 
              + e.entries[i].dataSeries.name + "</span>: " 
              + e.entries[i].dataPoint.y.toFixed(2) + " \u00b0C<br/>";
        }
        return content;
      }      
		},
		legend: {
			cursor:"pointer",
			verticalAlign: "top",
			fontSize: 10,
			fontColor: "dimGrey",
			itemclick : toggleDataSeries
		},
		data: plotInfo
	});
	function toggleDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		chart.render();
	}
	chart.render();
	return [chart, temperature]
}

// Utility function to convert hex color to rgba:
function hexToRgba(hex, alpha) {
  let c = hex.substring(1).split('');
  if (c.length === 3) { c = [c[0], c[0], c[1], c[1], c[2], c[2]]; }
  c = '0x' + c.join('');
  return `rgba(${(c>>16)&255}, ${(c>>8)&255}, ${c&255}, ${alpha})`;
}

// Dim a canvasJS chart:
function dimChart(chart) {
  // Dim lines & markers:
	chart.options.data.forEach(dataSet => {
		const originalColor = dataSet.color || "#000000";
    dataSet.color = hexToRgba(originalColor, 0.5);
    if (dataSet.markerColor) dataSet.markerColor = "rgba(0, 0, 255, 0.5)"; 
  });
  // Dim gridlines & background:
  chart.options.axisX.gridColor = "rgba(0, 0, 0, 0.5)";
  chart.options.axisY.gridColor = "rgba(0, 0, 0, 0.5)";
  chart.options.backgroundColor = "rgba(200,200,200,0.4)";
  chart.options.interactivityEnabled = false;
  chart.render();
}


// Start a new assay:
async function startAssay() {
	log("startAssay() called");
	log(`Starting assay with ${cardFilename}`, color="#fff", fontSize=10, bold=false, lines=true);
  // Update interface elements appropriately:
  document.getElementById("toggleTTP").innerHTML = "Group wells";
  document.getElementById('stop').style.backgroundImage = `linear-gradient(${stopColor}, ${stopColor})`;
  document.getElementById('stop').style.borderWidth = "1px";
	enableElements(["stop"]);
	disableElements(["load","start","period-slider","saveraw","analyze",
									 "filter-slider","cut-time-slider","threshold-slider",
		               "savefiltered","saveTTP","toggleTTP","shutdown",
		               "reboot","getLog","clearLog"]);
  // Dim charts from previous run:
  if (filteredChart) {
  	log("Hiding filtered data & TTP charts");
    dimChart(filteredChart);
    dimChart(ttpChartAll);
    if (ttpChartGrouped) {
      dimChart(ttpChartGrouped);
    }
  }
  showAllWells = false;
	let [amplificationChart, wellArray] = setupAmplificationChart('rawDataChart')
	let [temperatureChart, temperature] = setupTemperatureChart('temperatureChart')
	startTime = Date.now();
  nullData = await startPID();    // Tell Python to start the PID controller

	async function updateChart() {
    if (!isRunning) {
      log("Assay stopped");
      return;
    }
		let now = Date.now();		
		minutes = (now - startTime)/1000/60;
  	newData = await getData();   		// Get data from Python
  		// extend the amplification curve data:
		for (let j=0; j<wellArray.length; j++) {
			wellArray[j].push({
				x: minutes,
				y: newData[j]
			});
		}
		// extend the temperature array:
		temperature.push({
				x: minutes,
				y: newData[wellArray.length]   // T is last element in newData
			});   
		// Update the real-time amplification & temperature curves:
		amplificationChart.render();
		temperatureChart.render();

    var sampleInterval = document.getElementById('period-slider').value * 1000;
    setTimeout(updateChart, sampleInterval);   // Execute again in sampleInterval sec
	}

  // Reset the analysis parameters to default values, and trigger
  // an input event to programmatically invoke event listeners:
  const inputEvent = new Event('input', {
    bubbles: true,   // Allow the event to bubble up the DOM
    cancelable: true // Allow the event to be canceled
  });
  document.getElementById('filter-slider').value = 10;
  document.getElementById('filter-slider').dispatchEvent(inputEvent);
  document.getElementById('cut-time-slider').value = 0;
  document.getElementById('cut-time-slider').dispatchEvent(inputEvent);
  log("Curve analysis parameters reset");
	// Start the assay:
  isRunning = true;
	updateChart();
  // ^^^ previously used setInterval() but had trouble with timing being
  // throttled when browser minimized or not focused:
  //     var sampleInterval = document.getElementById('period-slider').value * 1000;
	//     assayTimer = setInterval(function(){updateChart()}, sampleInterval);
}

function displayFilteredData(data) {
	let wellArray;
	[filteredChart, wellArray] = setupAmplificationChart('filteredDataChart');
	filteredChart.options.title.text = "Fluorescence (filtered)";
	for (let i=0; i<wellArray.length; i++) {
		for (let j=0; j<data[0].length; j++) {
			wellArray[i].push(data[i][j]);
		}
	}
	filteredChart.render();
	filteredChart.axisY[0].set('minimum',0);
	filteredChart.axisY[0].set('maximum',1);
}


// Display TTP for all wells individually:
function displayTTP() {
  document.getElementById("toggleTTP").innerHTML = "Group Wells";
  ttpBars = [];
  for (const key in targets) {
		for (let i=0; i<wellConfig.length; i++) {
			if (wellConfig[i] == key) {
				ttpBars.push({
					y: ttpData[i],
					label: key,
					color: targets[key][0]
				});
			}
		}
  }
	ttpChartAll = new CanvasJS.Chart("ttpChart", {
		zoomEnabled: true,
		title: {
			text: "Time to Positive",
			fontFamily: "tahoma",
			fontSize: 15,
			fontWeight: "normal"
		},
		axisY: {
			title: "TTP (min)",
			titleFontSize: 14
		},		
		axisX:{ interval: 1 },   // show all axis labels
		data: [{        
			type: "column",  
			showInLegend: false, 
			legendMarkerColor: "grey",
			legendText: "",
			dataPoints: ttpBars
		}]
	})
	ttpChartAll.render();
	ttpChartAll.axisY[0].set('minimum',0);   // Only show results with positive TTPs
}


// Helper function to sum values in an array:
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Helper function to calculate average of an array:
function avgArray(arr) {
	  const n = arr.length;
    if (n === 0) return 0; // Handle empty array case
    return sumArray(arr) / n;
}

// Helper function to calculate std dev of an array:
function stdDevArray(arr) {
	  const n = arr.length;
    const squaredDifferences = arr.map(value => (value - avgArray(arr)) ** 2);
    const variance = sumArray(squaredDifferences) / n;
    return Math.sqrt(variance);
}


// Display mean & std dev TTP for each target group:
function displayTTPavgStdDev() {
	document.getElementById("toggleTTP").innerHTML = "Show All Wells";
	// Calculate mean and standard deviation for each target:
  let dataPoints = [];
  let errorBars = [];
  for (const key in targets) {
  	let vals = [];
  	let sum = 0;
		for (let i=0; i<wellConfig.length; i++) {
			if (wellConfig[i] == key) {
				vals.push(ttpData[i]);
			}
		}
		mean = avgArray(vals);
		stdev = stdDevArray(vals);
		dataPoints.push({ 
			y: mean,
			label: key,
			mean: mean.toFixed(2),             // custom tooltip entry
			color: targets[key][0]
		});
		errorBars.push({
			y: [mean-stdev, mean+stdev],
			stdev: stdev.toFixed(2),           // custom tooltip entry
			rsd: (100*stdev/mean).toFixed(2),  // custom tooltip entry
			label: key
		});
  }
  // Set up chart:
	ttpChartGrouped = new CanvasJS.Chart("ttpChart", {
		zoomEnabled: true,
		title: {
			text: "Time to Positive",
			fontFamily: "tahoma",
			fontSize: 15,
			fontWeight: "normal"
		},
		axisY: {
			title: "TTP (min)",
			titleFontSize: 14
		},		
		toolTip: {
			shared: true,
      cornerRadius: 6,
			animationEnabled: true,
      fontSize: 12,
      borderThickness: 0,
			borderColor: "#fff"
		},
		axisX:{ interval: 1 },   // show all axis labels
		data: [
			{        
				type: "column",  
  			showInLegend: false, 
				toolTipContent: "<span style='\"'color:{color};'\"'>{label}</span>: {mean} min",				
				dataPoints: dataPoints,
			},
			{ 
        type: "error",
        showInLegend: false,
        markerType: "none",
				//toolTipContent: "\u03C3: {stdev}%",
				toolTipContent: "RSD = {rsd}%",
        lineThickness: 1,
        dataPoints: errorBars
			}
		]
	})

	function toggleDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		ttpChartGrouped.render();
	}

	ttpChartGrouped.render();
	ttpChartGrouped.axisY[0].set('minimum',0);   // Only show results with positive TTPs
}


// Switch between TTP display modes (all wells vs. grouped wells):
function toggleTTP() {
	if (showAllWells) { 
		displayTTP(); 
	}
	else {
		displayTTPavgStdDev();
	}
	showAllWells = !showAllWells;
}


// Helper function to save local JS data to a file on the client:
function saveFile(filename, content, mimeType = "text/plain") {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement("a");
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}

// Helper function to save 2D array to a CSV file on the client:
function saveCSV(filename, arr) {
    // Convert array to CSV string
    const csvContent = arr
        .map(row => row.map(cell => `"${cell}"`).join(",")) // Quote cells and join with commas
        .join("\n"); // Join rows with newlines
    saveFile(filename, csvContent, "text/csv");
    return(success)
}

// Save TTP data locally (on the client):
function saveTTP() {
	log("saveTTP called");
	// Package TTP results into an array:
	let arr = [];
	for (let i=0; i<wellConfig.length; i++) {
		arr.push([wellConfig[i], ttpData[i]]);
	}
	let filename = currentFileName+"_ttp.csv";
	saveCSV(filename, arr);
	log(filename + " saved");
}



