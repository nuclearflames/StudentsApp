<?php

//Get the json here
ob_start();
include 'http://webapps.city.ac.uk/StudentsApp/scripts/news.php';
$client = ob_get_contents();
ob_end_clean();

header('Content-Type: text/javascript');
exit($client);

?>