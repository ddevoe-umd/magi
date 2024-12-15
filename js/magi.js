
// Globals:

var targets = {          // Targets with chart display properties:
  "MecA": ["#4C4CEB", "solid"],   
  "FemB": ["#5ED649", "solid"],
  "Nuc": ["#DD4444", "solid"],
  "POS": ["#222222", "dash"],
  "NEG": ["#222222", "dot"]
};

var wellConfig = [           // Well array configuration (start at upper left):
	"MecA", "Nuc", "FemB", "POS",
	"MecA", "Nuc", "FemB", "POS",
	"MecA",	"Nuc", "FemB", "NEG"
];

var sampleInterval;          // image sampling period (msec), value assigned via slider

var assayTimer;              // timer for running an assay
var startTime;               // assay start time stamp
var img = document.getElementById('image');      // chip image
var imgCaptureTime;                              // time stamp for image
var serverURL = "http://raspberrypi.local:8080";
var serverFilePath = "/path/to/ramdisk/"
var currentFileName;          // base data file name for most recent assay
var showTTPallWells = false;  // select TTP display mode (all wells vs. grouped)
var ttpData = [];             // array to hold TTP results
var wakeLock;

var filteredChart;            // chart to display filtered curves
var ttpChartAll;                 // chart to display all TTP values
var ttpChartGrouped;                 // chart to display avg & stdev TTP values

// Custom log function:
function log(message) {
  document.getElementById('log').style.backgroundColor = 'white';
	console.log(message);      // display message in Javascript console
	const log = document.getElementById("log");
	log.innerHTML += message + "<br />";      // display message in div
	log.scroll({ top: log.scrollHeight, behavior: 'smooth' }); // pin scroll to bottom
}

// Custom notification window:
function notification(message) {
    const win = document.createElement('div');        // create the window container
    win.className = 'notification-window';
    const content = document.createElement('div');    // create the content container
    content.className = 'notification-content';
    const text = document.createElement('p');
    text.textContent = message;
    content.appendChild(text);          // Append the text to the content container
    win.appendChild(content);           // Append the content to the window container
    document.body.appendChild(win);     // Add the window to the body
    log(`notification window added: ${message}`);
    return(win);                        // return the window so it can be deleted later
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

// Disable / Enable HTML buttons in a list of button IDs:
function disableButtons(elements) {
	elements.forEach(e => document.getElementById(e).disabled = true);
}
function enableButtons(elements) {
	elements.forEach(e => document.getElementById(e).disabled = false);
}

// Initial window loading:
window.onload = function () {
	// Disable buttons at start-up:
	disableButtons(["stop","saveraw","savefiltered","saveTTP","toggleTTP"]);
	enableButtons(["start","period-slider","shutdown","reboot"]);
  // Set sampling period from default slider setting:
  period = document.getElementById('period-slider').value;
  sampleInterval = period * 1000;
  document.getElementById('period-slider-value').innerHTML = `Period: ${period}s`;
  log(`Saving Python output (stdio, stderr) to magi_server.log`);
  log(`sampleInterval updated (from slider): ${sampleInterval} msec`);
  getImage();        // Get initial chip image
};

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


// Add event listener to update assay period value from slider:
document.getElementById("period-slider").addEventListener('input', function() {
  document.getElementById('period-slider-value').innerHTML = `Period: ${this.value}s`;
  sampleInterval = this.value * 1000;
});


// Send POST message to server:
async function queryServer(message) {
	let response = await fetch( serverURL, {
		method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
		results_array.forEach( ele => newData.push(+ele))   // strings to numbers
		return(newData);
	}
}

async function endAssay() {
	log("endAssay() called");
	await wakeLock.release();          // Release the wake lock when assay ends
	log("wake lock released");
	let response = confirm("End current assay?");
	if (response) {
		disableButtons(["stop"]);
		if (assayTimer) clearInterval(assayTimer);
	  enableButtons(["start","period-slider"]);
		let message = 'end';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) {
			results = await response.text();
			log("Server response:")
			log(results);
			currentFileName = results;
	   	enableButtons(["saveraw","shutdown","reboot"]);
	   	analyzeData();
		}
	}
	else {
			log("endAssay() cancelled");
	}
}

async function getData() {
	log("getData() called");
	let message = 'getData';
	let data = '';
	let response = await queryServer(JSON.stringify([message,data]));
  if (response.ok) {
		results = await response.text();
		log("Server response:")
		log(`JSON data length = ${results.length}`);
		let results_array = results.split(",");
		newData = [];
		results_array.forEach( e => newData.push(+e))   // strings to numbers
		return(newData);
	}
}

async function getImage() {
	log("getImage() called");
  document.getElementById('image').style.backgroundColor = 'white';
	let message = 'getImage';
	let data = [wellConfig, targets];  // use to color ROIs in image
	let response = await queryServer(JSON.stringify([message,data]));
  if (response.ok) {
		results = await response.text();
		log("Image data received")
		const base64Image = results;

		// Display the image:
		img.src = base64Image;
    imgCaptureTime = ((Date.now()-startTime)/1000/60).toFixed(2);
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
            width: 200%;      /* image size when zoomed in */
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
    const width = imgWindow.innerWidth;
    const height = imgWindow.innerHeight;
    const aspectRatio = 640/480;
    const newHeight = width / aspectRatio;
    imgWindow.resizeTo(width, Math.round(newHeight));
  });
  // toggle 2x window zoom on user click:
  imgWindow.addEventListener('click', () => {
  	const width = imgWindow.innerWidth;
    const height = imgWindow.innerHeight;
    if (width == 640) { 
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
	let data = currentFileName;
	let response = await queryServer(JSON.stringify([message,data]));
	if (response.ok) {
		results = await response.text();
		log("Server response: ");
		if (results) { 
		  log(`JSON data length = ${results.length}`);
			let data = JSON.parse(results);
	    ttpData = data[0];  // ttpData is global
	    let xy = data[1];
	    displayFilteredData(xy);
			displayTTP();
		  enableButtons(["savefiltered","toggleTTP","saveTTP"]);
		}
		else { 
			log("Anlysis incomplete:");
			log("- check # data points, >21 required");
			log("- check Wn parameter in Butterworth filter");
			log("- check magi_server.log for NaN in data");
			log("- check if all camera brightness values == 0");
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
		disableButtons(["stop","start","saveraw","savefiltered","saveTTP","toggleTTP"]);
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
		disableButtons(["stop","start","saveraw","savefiltered","saveTTP","toggleTTP"]);
		let message = 'reboot';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) {} // Pi should reboot, so no response
	}
	else {
		log("reboot cancelled");
	}
}

// Function to display/hide grouped data sets in charts:
function onLegendClick(e) {
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


function setupAmplificationChart(targetContainer) {
  // wellArray is a list to hold plot data with format:
  //   [ [{x: t1, y: val1}, {x: t2, y: val2}, ...]  <- well 1
  //     [{x: t1, y: val1}, {x: t2, y: val2}, ...]  <- well 2
  //      ... ]                                     <- etc

  // Set up empty array with length equal to the number of wells:
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
		title: {
			text: "Fluorescence",
			fontFamily: "tahoma",
			fontSize: 16
		},
		axisX: {
			title: "Time (min)",
			titleFontSize: 14
		},
		axisY:{
			includeZero: true
		}, 
		toolTip: {
			shared: true
		},
		legend: {
	    cursor:"pointer",
	    verticalAlign: "top",
	    fontSize: 12,
			fontColor: "dimGrey",
	    itemclick: function(e) {
	      onLegendClick(e);
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
	plotInfo.push(
	{ 	
		type: "line",
    color: "#BB2222",
		showInLegend: true,
		name: "Temperature",
		dataPoints: temperature
	}
	)
	let chart = new CanvasJS.Chart(targetContainer, {
		zoomEnabled: true,
		title: {
			text: "Temperature",
			fontFamily: "tahoma",
			fontSize: 16
		},
		axisX: {
			title: "Time (min)",
			titleFontSize: 14
		},
		axisY:{
			includeZero: true
		}, 
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			verticalAlign: "top",
			fontSize: 12,
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
  // Dim data markers / lines:
	chart.options.data.forEach(dataSet => {
		const originalColor = dataSet.color || "#000000";
    dataSet.color = hexToRgba(originalColor, 0.5); // Set line color with 50% opacity
    if (dataSet.markerColor) dataSet.markerColor = "rgba(0, 0, 255, 0.5)"; 
  });
  // Dim gridlines and background:
  chart.options.axisX.gridColor = "rgba(0, 0, 0, 0.5)";
  chart.options.axisY.gridColor = "rgba(0, 0, 0, 0.5)";
  chart.options.backgroundColor = "rgba(200,200,200,0.4)";
  chart.options.interactivityEnabled = false;
  chart.render();
}

// Start a new assay:
async function startAssay() {
	log("startAssay() called");
	enableButtons(["stop"]);
	disableButtons(["start","period-slider","saveraw","savefiltered","saveTTP","toggleTTP","shutdown","reboot"]);
  document.getElementById("toggleTTP").innerHTML = "Show grouped";
  // Dim charts from previous run:
  if (filteredChart) {
  	log("Hiding filtered data & TTP charts");
    dimChart(filteredChart);
    dimChart(ttpChartAll);
    if (ttpChartGrouped) {
      dimChart(ttpChartGrouped);
    }
  }
  showTTPallWells = false;
	let [amplificationChart, wellArray] = setupAmplificationChart('rawDataChart')
	let [temperatureChart, temperature] = setupTemperatureChart('temperatureChart')
	startTime = Date.now();
  nullData = await startPID();    // Tell Python to start the PID controller

	async function updateChart() {
		//let now = new Date();
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
		// Display the real-time amplification & temperature curves:
		amplificationChart.render();
		temperatureChart.render();
	}
	// Start the assay:
	updateChart();   // Initial chart update to avoid delay
	assayTimer = setInterval(function(){updateChart()}, sampleInterval);
	// Note: timer wont work if window is minimized...need to use
	// a "web worker" instead to fix this, see 
	// https://stackoverflow.com/questions/5927284/how-can-i-make-setinterval-also-work-when-a-tab-is-inactive-in-chrome
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
  document.getElementById("toggleTTP").innerHTML = "Show grouped";
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
		title: {
			text: "Time to Positive",
			fontFamily: "tahoma",
			fontSize: 16,
			fontWeight: "normal"
		},
		axisY: {
			title: "TTP (min)",
			titleFontSize: 14
		},		
		animationEnabled: true,
		//theme: "light2",   // "light1", "light2", "dark1", "dark2"
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
	document.getElementById("toggleTTP").innerHTML = "Show all wells";
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
			color: targets[key][0]
		});
		errorBars.push({
			y: [mean-stdev, mean+stdev],
			label: key
		});
  }

	ttpChartGrouped = new CanvasJS.Chart("ttpChart", {
		zoomEnabled: true,
		title: {
			text: "Time to Positive",
			fontFamily: "tahoma",
			fontSize: 16,
			fontWeight: "normal"
		},
		axisY: {
			title: "TTP (min)",
			titleFontSize: 14
		},		
		animationEnabled: true,
			toolTip: {
			shared: true
		},
		axisX:{ interval: 1 },   // show all axis labels
		data: [
			{        
				type: "column",  
  			showInLegend: false, 
				dataPoints: dataPoints
			},
			{ 
        type: "error",
        showInLegend: false,
        markerType: "none",
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


// Switch between TTP display modes (all wells vs. mean & std dev):
function toggleTTP() {
	if (showTTPallWells) { 
		displayTTP(); 
	}
	else {
		displayTTPavgStdDev();
	}
	showTTPallWells = !showTTPallWells;
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



