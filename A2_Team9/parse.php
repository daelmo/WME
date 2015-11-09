<!DOCTYPE html>
<html>
	<head>
		<title>parse</title>
	</head>
	<body>
	
	<?php
	require_once './php/world_data_parser.php';
	$parser = new WorldDataParser();
	$output = $parser->parseCSV("./data/world_data_v1.csv");
	echo "<pre>";
	var_dump($output); 
	echo "</pre>";
	?>
	</body>	
<html>

