<?php
//This file is for caching and cross domain mitigation

$cachefile = "cacheEvents.json";

// 1/2 Day
$cacheLength = 43200;

if (file_exists($cachefile) && (time() - $cacheLength < filemtime($cachefile))) {
	include($cachefile);
	exit;
}

ob_start();

$client = "http://search.city.ac.uk/s/search.json?collection=city-events&query=!kj";

// create curl resource
$ch = curl_init($client);

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// $output contains the output string
$output = curl_exec($ch);

// close curl resource to free up system resources
curl_close($ch);

$fOutput = $output;

echo $fOutput;

$fp = fopen($cachefile, "w");

fwrite($fp, ob_get_contents());

fclose($fp);

ob_end_flush();

?>