<?php

$cachefile = "cache.json";

// 2 Mins
$cacheMins = 2 * 60;

if (file_exists($cachefile) && (time() - $cacheMins < filemtime($cachefile))) {
	include($cachefile);
	exit;
}

ob_start();

$client = new SoapClient("http://nsq209ap.enterprise.internal.city.ac.uk/LabStats/WebServices/Statistics.asmx?WSDL");

//Retrieve the SOAP path
$pcData = $client->GetGroupedCurrentStats()->GetGroupedCurrentStatsResult->GroupStat;

echo json_encode($pcData);

$fp = fopen($cachefile, "w");

fwrite($fp, ob_get_contents());

fclose($fp);

ob_end_flush();

?>