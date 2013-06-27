<?php

include("config.php");
$tbl_name = "personalisation";

//Get the user ID in session
session_start();
$userID = $_SESSION["userid"];

$sqlCode = "SELECT * FROM $tbl_name WHERE userID='$userID'";
//Execute query
$results = mysql_query($sqlCode) or die(mysql_error());

$resultsA = mysql_fetch_array($results);
//Build the results class
class Results {
	public $layoutColor = "";
	public $layoutFontSize = "";
	public $layoutID = 0;
	public $layoutName = "";
	public $userID = 0;
	public $startUp = 0;
}
//Assign to results class
$resultsArray = new Results();
$resultsArray->layoutColor = $resultsA[2];
$resultsArray->layoutFontSize = $resultsA[4];
$resultsArray->layoutID = $resultsA[1];
$resultsArray->layoutName = $resultsA[3];
$resultsArray->userID = $resultsA[0];
$resultsArray->startUp = $resultsA[5];

//Output values as json
echo json_encode($resultsArray);


?>