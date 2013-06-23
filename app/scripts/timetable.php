<?php
	
if(isset($_POST["userNo"])){$userNo = $_POST["userNo"];}

$host = "localhost";
$Rusername = "root";
$Rpassword = "Bed1113053";
$db_name = "studentsapp";
$tbl_name = "timetable";

mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

session_start();
$userID = $_SESSION["userid"];

$findUser = "SELECT * FROM timetable WHERE userID='$userID'";
$found = mysql_query($findUser) or die(mysql_error());

if(mysql_num_rows($found) == 1) {
	$sqlCode = "UPDATE timetable SET cityUser='$userNo' WHERE userID='$userID'";	
} else {
	$userNo = stripslashes($userNo);
	$userNo = mysql_real_escape_string($userNo);

	$sqlCode = "INSERT INTO $tbl_name (userID, cityUser) VALUE ('$userID', '$userNo')";
}
$results = mysql_query($sqlCode) or die(mysql_error());


?>