function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);
}

function processData(csv) {
	var allTextLines = csv.split(/\r\n|\n/);
	var lines = [];
	while (allTextLines.length) {
		lines.push(allTextLines.shift().split(','));
	}
	console.log(lines);
	drawOutput(lines);
}

function errorHandler(evt) {
	if (evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines) {
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");

	var header = table.createTHead();
	var headerRow = header.insertRow(-1);
	for (var j = 0; j < 6; j++) {
		if (j === 6) {
			j = 9;
		}
		var th = document.createElement('th');
		headerRow.appendChild(th);
		th.appendChild(document.createTextNode(lines[0][j]));

	}


	for (var i = 1; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < 6; j++) {
			if (j === 6) {
				j = 9;
			}
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}