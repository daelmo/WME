// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson").Converter;
var fs=require("fs"); 
var util = require("util");
//register body-parser to handle json from res / req
app.use( bodyParser.json() );

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!


/**************************************************************************
****************************** csv2json *********************************
**************************************************************************/
// see http://www.scriptscoop.net/t/b682f7874bdf/javascript-how-to-convert-csv-to-json-in-node-js.html
// by Keyang
var jsonObject;
//Converter Class
var Converter=require("csvtojson").Converter;
var writeStream = require("fs").createWriteStream("data.json");
var csvConverter=new Converter();
csvConverter.on("end_parsed",function(jsonObj){
    jsonObject = jsonObj; //result json object
});

fs.createReadStream("./world_data.csv").pipe(csvConverter).pipe(writeStream);

/**************************************************************************
********************** handle HTTP METHODS ***********************
**************************************************************************/




// GET PROPERTIES
app.get('/properties', function (req, res) {
	for(var i = 0; i<jsonObject.length; i++){
			if(typeof(jsonObject[i]) !== "undefined"){
				res.send(Object.keys(jsonObject[i]));
				break;
			}
		}
		//res.send("Error: All values in list deleted.");
});

app.get('/properties/:num', function (req, res) {
	if(req.params.num >= Object.keys(jsonObject[0]).length|| req.params.num < 0){
		res.send("Error: No such property available.");
	}else{
		for(var i = 0; i<jsonObject.length; i++){
			if(typeof(jsonObject[i]) !== "undefined"){
				var array = Object.keys(jsonObject[i]);
				res.send(array[req.params.num]);
				break;
			}
		}
		//res.send("Error: All values in list deleted."); - res.send doenst terminate function! != return
	}    
});

// DELETE
app.delete('/items', function (req, res) {
	var length = Object.keys(jsonObject).length;
	delete jsonObject[length-1];
});

app.delete('/items/:num', function (req, res) {
	delete jsonObject[req.params.num];
});


// DO NOT CHANGE!
// bind server to port
var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});