<?php
//get the variables
if(isset($_POST["userNo"])){$userNo = $_POST["userNo"];}

$host = "localhost";
$Rusername = "root";
$Rpassword = "Bed1113053";
$db_name = "studentsapp";
$tbl_name = "timetable";

//db connection
mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

//session user id
session_start();
$userID = $_SESSION["userid"];

//find the user
$findUser = "SELECT * FROM timetable WHERE userID='$userID'";
$found = mysql_query($findUser) or die(mysql_error());

//if user update else create new record
if(mysql_num_rows($found) == 1) {
	$sqlCode = "UPDATE timetable SET cityUser='$userNo' WHERE userID='$userID'";	
} else {
	$userNo = stripslashes($userNo);
	$userNo = mysql_real_escape_string($userNo);

	$sqlCode = "INSERT INTO $tbl_name (userID, cityUser) VALUE ('$userID', '$userNo')";
}
$results = mysql_query($sqlCode) or die(mysql_error());


?>