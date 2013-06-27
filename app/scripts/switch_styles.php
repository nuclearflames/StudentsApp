<?php

//Get the posted variables
if(isset($_POST["color"])){$color = $_POST["color"];}
if(isset($_POST["stylesheet"])){$stylesheet = $_POST["stylesheet"];}
if(isset($_POST["font"])){$font = $_POST["font"];}
if(isset($_POST["startUp"])){$startUp = $_POST["startUp"];}

include("config.php");
$tbl_name = "personalisation";

//Get the session user
session_start();
$userID = $_SESSION["userid"];

//SQL db query
$findUser = "SELECT * FROM personalisation WHERE userID='$userID'";
$found = mysql_query($findUser) or die(mysql_error());

//Responses based on sql query outputs
if(mysql_num_rows($found) == 1) {
	if (isset($color)) {
		$updatetable = "UPDATE personalisation SET layoutColor='$color' WHERE userID='$userID'";
	} else if (isset($stylesheet)) {
		$updatetable = "UPDATE personalisation SET layoutName='$stylesheet' WHERE userID='$userID'";
	} else if (isset($font)) {
		$updatetable = "UPDATE personalisation SET layoutFontSize='$font' WHERE userID='$userID'";
	} else if (isset($startUp)) {
		$updatetable = "UPDATE personalisation SET startUp='$startUp' WHERE userID='$userID'";
	} else {
		echo "no insert value";
	}
} else {
	$defaultName = "app";
	$defaultFont = "18";
	$defaultColor = "";
	$updatetable = "INSERT INTO personalisation (userID, layoutName, layoutColor, layoutFontSize) VALUE ('$userID', '$defaultName', '$defaultColor', '$defaultFont')";
}
$results = mysql_query($updatetable) or die(mysql_error());

?>