<?php

$host = "localhost";
$Rusername = "root";
$Rpassword = "Bed1113053";
$db_name = "studentsapp";
$tbl_name = "timetable";

mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

session_start();
$userID = $_SESSION["userid"];

$sqlCode = "SELECT * FROM $tbl_name WHERE userID='$userID'";

$results = mysql_query($sqlCode) or die(mysql_error());

$resultsA = mysql_fetch_array($results);

echo $resultsA[2];

?>