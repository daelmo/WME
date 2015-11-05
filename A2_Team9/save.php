<!DOCTYPE html>
<html>
	<head>
		<title>save</title>
	</head>
	<body>
	
	<?php
	require_once './php/world_data_parser.php';
	$parser = new WorldDataParser();
	$array =  $parser->parseCSV("./data/world_data_v1.csv");
	$bool = $parser->saveXML($array);
	if($bool === true){echo "XML Savestatus: erfolgreich!";}
	else{echo "XML Savestatus: nicht erfolgreich!";}
	?>
	</body>	
<html>

