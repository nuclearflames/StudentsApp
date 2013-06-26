<?php

$url = 'http://webapps.city.ac.uk/legacy/phone/phone.cgi';

extract($_POST);
//get the post values
$fields = array(
    'name1' => urlencode($name1),
    'name2' => urlencode($name2)
);

$ch = curl_init($url);
//Get the page response
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
//output the curl values
$response = curl_exec($ch);
curl_close($ch);

?>
