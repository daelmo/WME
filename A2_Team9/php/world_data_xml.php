<?php

class world_data_xml {
	
	function buildXMLText($array){
		$text = "<?xml version ='1.0' encoding='UTF-8'?>\n";
		$text .= "<Countries>\n";
		$max = sizeof($array);
		for( $i=0; $i < $max ; $i++){
			$text .= " <Country>\n";
			$text .= "<id>" . $array[$i][0] . "</id>\n";
			$text .= "<name>" . $array[$i][1] . "</name>\n";
			$text .= "<birth>" . $array[$i][2] . "</birth>\n";	
			$text .= "<cell>" . $array[$i][3] . "</cell>\n";	
			$text .= "<children>" . $array[$i][4] . "</children>\n";	
			$text .= "<electricity>" . $array[$i][5] . "</electricity>\n";	
			$text .= "<gdp_per_capita>" . $array[$i][6] . "</gdp_per_capita>\n";	
			$text .= "<gdp_per_capita_growth>" . $array[$i][7] . "</gdp_per_capita_growth>\n";	
			$text .= "<inflation>" . $array[$i][8] . "</inflation>\n";
			$text .= "<internet>" . $array[$i][9] . "</internet>\n";
			$text .= "<life>" . $array[$i][10] . "</life>\n";
			$text .= "<military>" . $array[$i][11] . "</military>\n";
			$text .= "<gps_lat>" . $array[$i][12] . "</gps_lat>\n";
			$text .= "<gps_long>" . $array[$i][13] . "</gps_long>\n";
			$text .= "</Country>\n";
		}
		$text .= "</Countries>\n";
	return $text;	
	}
	
	function buildFile($text){
		$directory = "./";
		$filename = "world_data.xml";
        $path  = $directory . $filename; 
		$bool = file_put_contents($path, $text);
		if($bool = false) return false;
		else return true;
		
	}
	
	
}

?>
