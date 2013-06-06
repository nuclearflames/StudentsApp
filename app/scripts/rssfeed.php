<?php

$urlVal = isset($_GET['research']);

$url = "https://blogs.city.ac.uk/student-news/feed/";

if($urlVal) {
	$url = "http://blogs.city.ac.uk/research-and-enterprise/feed";
}

$feedContents = file_get_contents($url);

$xml = new SimpleXmlElement($feedContents);

$json = array();

class item {

    public $title = '';
    public $hyperlink = '';
    public $description = '';

}

foreach ($xml->channel->item as $v) {
	$tmpVal = new item();
	$tmpVal->title = (string)$v->title;
	$tmpVal->hyperlink = (string)$v->link;
	$tmpVal->description = (string)$v->description;

	array_push($json, $tmpVal);
}

$jsonE = json_encode($json);

echo($jsonE);
?>