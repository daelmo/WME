<!DOCTYPE html>
<html>
	<head>
		<title>print</title>
	</head>
	<body>
	
	<?php
	require_once './php/world_data_parser.php';
	$parser = new WorldDataParser();
	$array =  $parser->parseCSV("./data/world_data_v1.csv");
	$bool = $parser->saveXML($array);
	$parser->printXML();
	// Output tabelle wie A1
	?>
	</body>	
<html>

