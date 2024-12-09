
// Globals:
var assayTimer;              // timer for running an assay
var sampleInterval = 5000;   // data sampling interval (msec)
var startTime;               // starting time stamp
var img = document.getElementById('image');      // chip image
var imgCaptureTime;                              // time stamp for image capture
var currentFileName;         // data file from most recent assay
var serverURL = "http://raspberrypi.local:8080";
var serverFilePath = "/path/to/ramdisk/"
var ttpMode = false;         // select TTP display mode (all wells vs. grouped)
var ttpData = [];            // array to hold TTP results

var target_dict = {          // Targets with chart display properties:
  "MecA": ["#1f009c", "solid"],   
  "FemB": ["#006aa8", "solid"],
  "Nuc": ["#338f4c", "solid"],
  "Ctrl+": ["#363636", "dash"],
  "Ctrl-": ["#363636", "dot"]
};

var wellConfig = [           // Well array configuration (start at upper left):
		"MecA", "Nuc", "FemB", "Ctrl+",
		"MecA", "Nuc", "FemB", "Ctrl+",
		"MecA",	"Nuc", "FemB", "Ctrl-"
		];


// Custom log function:
function log(message) {
  document.getElementById('log').style.backgroundColor = 'white';
	console.log(message);            // display message on Javascript console
	const log = document.getElementById("log");
	log.innerHTML += message + "<br />";      // display message in HTML
	//log.scrollTop = log.scrollHeight;       // pin scroll to bottom
	log.scroll({ top: log.scrollHeight, behavior: 'smooth' }); // pin scroll to bottom
}

// Prevent system from sleeping (does not work yet):
async function getScreenLock() {
	try {
		const wakeLock = await navigator.wakeLock.request('screen');
		log('Wake Lock acquired:', wakeLock);
	} catch(err) {
		log('Error acquiring wake lock:', err);
	}
	//return wakeLock;
}

window.onload = function () {
	// Disable buttons at start-up:
	document.getElementById("stop").disabled = true;
	document.getElementById("analyze").disabled = true;
	document.getElementById("saveraw").disabled = true;
	document.getElementById("savefiltered").disabled = true;
	document.getElementById("toggleTTP").disabled = true;
	// getScreenLock();   // Does not work yet
};

async function queryServer(message) {
	let response = await fetch( serverURL, {
		method: "POST",
    	headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: 'todo=' + message
		} );
	return(response)
}


async function startPID() {
	let message = 'start';
	let data = '';
	log("startPID() called");
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
	let response = confirm("End current assay?");
	if (response) {
		document.getElementById("stop").disabled = true;
		if (assayTimer) clearInterval(assayTimer);
		document.getElementById("start").disabled = false;
		let message = 'end';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) {
			results = await response.text();
			log("Server response:")
			log(results);
			currentFileName = results;
			document.getElementById("analyze").disabled = false;
			//document.getElementById('analyze').innerText = "Analyze " + currentFileName + ".csv";
			document.getElementById("saveraw").disabled = false;
			document.getElementById("shutdown").disabled = false;
			document.getElementById("toggleTTP").disabled = true;
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
		log(results);
		let results_array = results.split(",");
		newData = [];
		results_array.forEach( ele => newData.push(+ele))   // strings to numbers
		return(newData);
	}
}

async function getImage() {
	log("getImage() called");
  document.getElementById('image').style.backgroundColor = 'white';
	let message = 'getImage';
	let data = [wellConfig, target_dict];  // use to color ROIs in image
	let response = await queryServer(JSON.stringify([message,data]));
  if (response.ok) {
		results = await response.text();
		log("Image data received")
		const base64Image = results;
		let results_array = results.split(",");

		// Display the image:
		//document.getElementById('image').src = base64Image;
		img.src = base64Image;
    imgCaptureTime = ((Date.now()-startTime)/1000/60).toFixed(2);
	}
}

// Open image in new window when clicked:
img.addEventListener('click', () => {
	const iframe = "<iframe width='640px' height='480px' src='"+img.src+"'></iframe>"
	const imgWindow = window.open('', '_blank', 
		"width=640,height=500,menubar=no,resizable=yes");
	imgWindow.document.open();
	imgWindow.document.write(`Timestamp: ${imgCaptureTime} min<br>`)
	imgWindow.document.write(iframe);
	imgWindow.document.close();
	// Adjust window size to fit content:
	imgWindow.onload = () => {
    const w = imgWindow.document.body.scrollWidth;
    const h = imgWindow.document.body.scrollHeight;
    imgWindow.resizeTo(w+20, h+40); // Adjust for window borders
	};
});

// Enable image zoom/unzoom: NOT YET WORKING
document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.querySelector("iframe"); // Replace with the selector for your iframe
    let zoomed = false;
    iframe.addEventListener("load", () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const img = iframeDoc.querySelector("img");
        img.style.cursor = "pointer"; // Make it clear the image is clickable
        img.addEventListener("click", () => {
            zoomed = !zoomed;
            if (zoomed) {
                img.style.transform = "scale(2)";
                img.style.transformOrigin = "center"; // Adjust scaling origin if needed
                iframe.style.width = `${img.clientWidth * 2}px`;
                iframe.style.height = `${img.clientHeight * 2}px`;
            } else {
                img.style.transform = "scale(1)";
                iframe.style.width = `${img.clientWidth}px`;
                iframe.style.height = `${img.clientHeight}px`;
            }
        });
    });
});


async function analyzeData() {
	log("analyzeData() called");
  let message = 'analyze';
	let data = currentFileName;
	let response = await queryServer(JSON.stringify([message,data]));
	if (response.ok) {
		results = await response.text();
		log("Server response: ");
		log(results);
		let data = JSON.parse(results);
    ttpData = data[0];  // ttpData is global
    let xy = data[1];
    displayFilteredData(xy);
		displayTTP();
		document.getElementById("analyze").disabled = true;
    document.getElementById("savefiltered").disabled = false;
    document.getElementById("toggleTTP").disabled = false;
	}
}


// Download files with raw and filtered amplification data. 
// Can't combine into a single function since opening multiple
// windows leads to popup blocking in browser:
function saveRaw() {
	log("saveRaw() called");
  const url = serverURL + serverFilePath + currentFileName + ".csv";
	log(`opening ${url}`);
  window.open(url, '_blank');
  document.getElementById("saveraw").disabled = true;
}
function saveFiltered() {
	log("saveFiltered() called");
  const url = serverURL + serverFilePath + currentFileName + "_filt.csv";
	log(`opening ${url}`);
  window.open(url, '_blank');
  document.getElementById("savefiltered").disabled = true;
}

async function shutdown() {
	log("shutdown() called");
	let response = confirm("Do you want to shut down?");
	if (response) {
		log("System is powering off!!!");
		document.getElementById("stop").disabled = true;
		document.getElementById("start").disabled = true;
		document.getElementById("analyze").disabled = true;
		document.getElementById("saveraw").disabled = true;
		document.getElementById("savefiltered").disabled = true;
		document.getElementById("toggleTTP").disabled = true;
		let message = 'shutdown';
	  let data = '';
		let response = await queryServer(JSON.stringify([message,data]));
		if (response.ok) {} // Pi should shut down, so no response
	}
	else {
		log("shutdown cancelled");
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

	// Set up plot info:
	let plotInfo = [];

	let g = 1;   // group number (for grouping target sets in charts)
	for (const key in target_dict) {
		let key_found = false;
		for (let i=0; i<wellConfig.length; i++) {
      if (wellConfig[i] == key) {
      	// Set up plot data & shared plot attributes:
				data_dict = {	
					name: key,
					type: "line",
					group: g,
					dataPoints: wellArray[i],
		      color: target_dict[wellConfig[i]][0],
					lineDashType: target_dict[wellConfig[i]][1]
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

	// Set up plot info:
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


async function startAssay() {
	
	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
	document.getElementById("analyze").disabled = true;
	//document.getElementById("analyze").innerText = "Analyze";
	document.getElementById("shutdown").disabled = true;
	document.getElementById("saveraw").disabled = true;
	document.getElementById("savefiltered").disabled = true;
	document.getElementById("toggleTTP").disabled = true;

	let [amplificationChart, wellArray] = setupAmplificationChart('rawDataChart')
	let [temperatureChart, temperature] = setupTemperatureChart('temperatureChart')

	//let time = new Date;
	//startTime = time.getTime();
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
	// Note: timer wont work if window is minimized...nned to use
	// a "web worker" instead to fix this, see 
	// https://stackoverflow.com/questions/5927284/how-can-i-make-setinterval-also-work-when-a-tab-is-inactive-in-chrome
}


function displayFilteredData(data) {
	let [chart, wellArray] = setupAmplificationChart('filteredDataChart');
	chart.options.title.text = "Fluorescence (filtered)";
	for (let i=0; i<wellArray.length; i++) {
		for (let j=0; j<data[0].length; j++) {
			wellArray[i].push(data[i][j]);
		}
	}
	chart.render();
	chart.axisY[0].set('minimum',0);
	chart.axisY[0].set('maximum',1);
}


// Display TTP for all wells individually:
function displayTTP() {
  ttpBars = [];
  for (const key in target_dict) {
		for (let i=0; i<wellConfig.length; i++) {
			if (wellConfig[i] == key) {
				ttpBars.push({
					y: ttpData[i],
					label: key,
					color: target_dict[key][0]
				});
			}
		}
  }
	let chart = new CanvasJS.Chart("ttpChart", {
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
	chart.render();
	chart.axisY[0].set('minimum',0);   // Only show results with positive TTPs
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
	// Calculate mean and standard deviation for each target:
  let dataPoints = [];
  let errorBars = [];
  for (const key in target_dict) {
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
			label: key,
			color: target_dict[key][0],
			y: mean
		});
		errorBars.push({
			y: [mean-stdev, mean+stdev]
		});
  }

	let chart = new CanvasJS.Chart("ttpChart", {
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
        lineColor: "black",
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
		chart.render();
	}

	chart.render();
	chart.axisY[0].set('minimum',0);   // Only show results with positive TTPs
}


// Switch between TTP display modes (show all wells
// vs. show mean & std dev for each target set):
function toggleTTP() {
	if (ttpMode) { 
		displayTTP(); 
	}
	else {
		displayTTPavgStdDev();
	}
	ttpMode = !ttpMode;
}



