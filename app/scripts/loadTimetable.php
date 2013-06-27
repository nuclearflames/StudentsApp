<?php

include("config.php");
$tbl_name = "timetable";

//Get the user ID
session_start();
$userID = $_SESSION["userid"];

//Write the timetable user to the database
$sqlCode = "SELECT * FROM $tbl_name WHERE userID='$userID'";

$results = mysql_query($sqlCode) or die(mysql_error());

$resultsA = mysql_fetch_array($results);

echo $resultsA[2];

?>