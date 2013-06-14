<?php

ob_start();
include 'http://webapps.city.ac.uk/StudentsApp/scripts/funnelbackSearchQuery.php';
$client = ob_get_contents();
ob_end_clean();

header('Content-Type: text/javascript');
exit($client);

?>