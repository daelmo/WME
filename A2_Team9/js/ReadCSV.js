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

function sort_table(asc){
	var tbody = document.getElementsByTagName("tbody");
	var rows = tbody[0].rows, arr = new Array(), i, j, cells;
	
	//read values and store them in array
	for(i = 0; i < rows.length; i++){
		cells = rows[i].cells;
		arr[i] = new Array();
        for(j = 0; j < cells.length; j++){
			arr[i][j] = cells[j].innerHTML;
        }
    }
	
	//compare values of column 1 (country) and differentiate between asc/desc 
	arr.sort(function(a, b){
        return (a[1] == b[1]) ? 0 : ((a[1] > b[1]) ? asc : -1*asc);
    });
	

	for(i = 0; i < rows.length; i++){
		arr[i] = "<td>"+arr[i].join("</td><td>")+"</td>";
    }
    tbody[0].innerHTML = "<tr>"+arr.join("</tr><tr>")+"</tr>";
	
}

function drawOutput(lines) {
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.getElementById("table");
        var headerNames=["ID","Country","birth rate/1000","cellphones/100","children/woman","electric usage", "internet usage"]
        
	var header = table.createTHead();
	var headerRow = header.insertRow(-1);
	for (var j = 0; j < 7; j++) {
		var th = document.createElement('th');
		headerRow.appendChild(th);
		if (j == 1) {
			th.innerHTML = " " + headerNames[j] 
				+ " <i class = \"fa fa-angle-up\" onclick=\"sort_table(1)\"></i>"
				+ " <i class = \"fa fa-angle-down\" onclick=\"sort_table(-1)\"></i>" 
				+ " "; 
		}
		else{
			th.innerHTML= " "+headerNames[j] + " ";
		}

	}

	var body = table.createTBody();
	for (var i = 1; i < lines.length; i++) {
		var row = body.insertRow(-1);
		for (var j = 0; j < 7; j++) {
		
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}