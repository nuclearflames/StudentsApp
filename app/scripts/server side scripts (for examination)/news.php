<?php

$cachefile = "cacheNews.json";

// 2 Mins
$cacheMins = 2 * 60;

if (file_exists($cachefile) && (time() - $cacheMins < filemtime($cachefile))) {
	include($cachefile);
	exit;
}

ob_start();

$client = "http://search.city.ac.uk/s/search.json?collection=city-news&query=!kj";

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