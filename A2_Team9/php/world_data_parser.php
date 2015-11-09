<?php

require_once 'world_data_xml.php';

class WorldDataParser {

	function parseCSV($path) {
		$array = array();
		$file = fopen($path, "r");
		$i=0;
		while (!feof($file)) {
			if ($i == 0) {
				fgetcsv($file);
				$i++;
				continue;
			}
			$array[] = fgetcsv($file);
		}
		fclose($file);
		return $array;
	}

	function saveXML($array) {
		$xml = new world_data_xml();
		$xml_text = $xml->buildXMLText($array);
		$bool = $xml->buildFile($xml_text);
		return $bool;
	}

	function printXML($xml, $xslt) {
		$xmldoc = new DOMDocument;
		$xmldoc -> load($xml);
		
		$xsltdoc = new DOMDocument;
		$xsltdoc -> load($xslt);
		
		$processor = new XSLTProcessor();
		$processor -> importStyleSheet($xsltdoc);
		
		echo $processor -> transformToXML($xmldoc);
		
	}

}

?>
