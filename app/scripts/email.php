<?php

$url = 'http://webapps.city.ac.uk/legacy/email/email.cgi';

extract($_POST);

$fields = array(
    'family' => urlencode($family),
    'given' => urlencode($given),
    'category' => urlencode($category),
);

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);

$response = curl_exec($ch);
curl_close($ch);

?>
