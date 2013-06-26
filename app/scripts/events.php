<?php
//Get json at the url
ob_start();
include 'http://webapps.city.ac.uk/StudentsApp/scripts/events.php';
$client = ob_get_contents();
ob_end_clean();

header('Content-Type: text/javascript');
//Output json
exit($client);

?>