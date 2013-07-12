<?php

$cachefile = "cacheMaps.json";

// 2 Mins
$cacheMins = 2 * 60;

if (file_exists($cachefile) && (time() - $cacheMins < filemtime($cachefile))) {
	include($cachefile);
	exit;
}

ob_start();

$client = "https://www.city.ac.uk/visit/feeds/locationsWebapp.json?callback=?";

// create curl resource
$ch = curl_init($client);

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// $output contains the output string
$output = curl_exec($ch);

// close curl resource to free up system resources
curl_close($ch);

$fOutput = substr($output, 14);
$fOutput = substr($fOutput, 0, -2);

echo $fOutput;

$fp = fopen($cachefile, "w");

fwrite($fp, ob_get_contents());

fclose($fp);

ob_end_flush();

?>