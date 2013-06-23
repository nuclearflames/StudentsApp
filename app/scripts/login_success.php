<?php

$host = "localhost";
$Rusername = "root";
$Rpassword = "Bed1113053";
$db_name = "studentsapp";
$tbl_name = "personalisation";

mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

session_start();
$userID = $_SESSION["userid"];

$sqlCode = "SELECT * FROM $tbl_name WHERE userID='$userID'";

$results = mysql_query($sqlCode) or die(mysql_error());

$resultsA = mysql_fetch_array($results);

class Results {
	public $layoutColor = "";
	public $layoutFontSize = "";
	public $layoutID = 0;
	public $layoutName = "";
	public $userID = 0;
	public $startUp = 0;
}

$resultsArray = new Results();
$resultsArray->layoutColor = $resultsA[2];
$resultsArray->layoutFontSize = $resultsA[4];
$resultsArray->layoutID = $resultsA[1];
$resultsArray->layoutName = $resultsA[3];
$resultsArray->userID = $resultsA[0];
$resultsArray->startUp = $resultsA[5];

echo json_encode($resultsArray);


?>