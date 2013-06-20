<?php

$cachefile = "cacheEvents.json";

// 2 hrs
$cacheMins = 120 * 60;

if (file_exists($cachefile) && (time() - $cacheMins < filemtime($cachefile))) {
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