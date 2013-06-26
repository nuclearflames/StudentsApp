<?php

$url = 'http://webapps.city.ac.uk/legacy/email/email.cgi';

extract($_POST);
//Get the post fields
$fields = array(
    'family' => urlencode($family),
    'given' => urlencode($given),
    'category' => urlencode($category),
);

$ch = curl_init($url);
//Curl to page
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);

$response = curl_exec($ch);
//Output results
curl_close($ch);

?>
