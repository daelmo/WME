// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson").Converter;
var fs = require("fs");
var util = require("util");
//register body-parser to handle json from res / req
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
   extended: true 
}));

//register public dir to serve static files (html, css, js)
app.use(express.static(path.join(__dirname, "public")));

// END DO NOT CHANGE!


/**************************************************************************
 ****************************** csv2json *********************************
 **************************************************************************/
// see http://www.scriptscoop.net/t/b682f7874bdf/javascript-how-to-convert-csv-to-json-in-node-js.html
// by Keyang
var jsonObject;
//Converter Class
var Converter = require("csvtojson").Converter;
var writeStream = require("fs").createWriteStream("data.json");
var csvConverter = new Converter();
csvConverter.on("end_parsed", function(jsonObj) {
	jsonObject = jsonObj; //result json object
});

fs.createReadStream("./world_data.csv").pipe(csvConverter).pipe(writeStream);

/**************************************************************************
 ********************** handle HTTP METHODS ***********************
 **************************************************************************/

//GET COUNTRIES
app.get('/items', function(req, res) { //get all
	res.send(jsonObject);
});

app.get('/items/:num', function(req, res) { //get single element
	if (req.params.num >= jsonObject.length || req.params.num < 0) {
		res.status(500).send("No such id {" + req.params.num + "} in database.");
	} else {
		res.send(jsonObject[req.params.num]);
	}
});

app.get('/items/:beg/:end', function(req, res) { //get range
	var beg = req.params.beg;
	var end = req.params.end;

	if (beg >= jsonObject.length || end >= jsonObject.length || beg < 0 || end < 0 || end < beg) {
		res.status(500).send("Range not possible.");
	}else{

	var objects = [];
	for (var i = beg; i <= end; i++) {
		objects.push(jsonObject[i]);
	}
	res.send(objects);
	}
});



// GET PROPERTIES
app.get('/properties', function(req, res) {
	for (var i = 0; i < jsonObject.length; i++) {
		if (typeof (jsonObject[i]) !== "undefined") {
			res.send(Object.keys(jsonObject[i]));
			break;
		}
	}
	//res.send("Error: All values in list deleted.");
});

app.get('/properties/:num', function(req, res) {
	if (req.params.num >= Object.keys(jsonObject[0]).length || req.params.num < 0) {
		res.status(500).send("Error: No such property available.");
	} else {
		for (var i = 0; i < jsonObject.length; i++) {
			if (typeof (jsonObject[i]) !== "undefined") {
				var array = Object.keys(jsonObject[i]);
				res.send(array[req.params.num]);
				break;
			}
		}
		//res.send("Error: All values in list deleted."); - res.send doenst terminate function! != return
	}
});

//POST ITEM
app.post('/items', function(req, res) {
	var item = req.body;
	
	//get ID and add leading zeros
	var id = parseInt(jsonObject[jsonObject.length-1].id) + 1;
	var id_string = id+"";
    while (id_string.length < 3) {
		id_string = "0" + id_string;
	}
	item['id'] = id_string;
	jsonObject.push(item);

	res.send("Added country {" + item.country_name + "} to list!");
	
});


// DELETE COUNTRY
app.delete('/items/', function(req, res) { 
	var length =  Object.keys(jsonObject).reverse()[0];
	delete jsonObject[length];
});

app.delete('/items/:num', function(req, res) {
	delete jsonObject[req.params.num-1];
});


// DO NOT CHANGE!
// bind server to port
var server = app.listen(8000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});