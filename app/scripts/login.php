<?php

$host = "localhost";
$Rusername = "root";
$Rpassword = "Bed1113053";
$db_name = "studentsapp";
$tbl_name = "members";

//Connect to database
mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

//Get the posted variables
$email = $_POST["email"];
$password = $_POST["password"];

//SQL injection protection
$email = stripslashes($email);
$password = stripslashes($password);
$email = mysql_real_escape_string($email);
$password = mysql_real_escape_string($password);

$sqlCode = "SELECT * FROM $tbl_name WHERE email='$email'";
//Submit database request
$results = mysql_query($sqlCode) or die(mysql_error());

$count = mysql_num_rows($results);

$resultsA = mysql_fetch_array($results);
//Check returned values for errors and notify user
if ($count == 0) {
	echo "Wrong email/password";
} else {
	if(crypt($password, $resultsA[2]) == $resultsA[2]) {
		session_start();
		$_SESSION["userid"] = $resultsA[0];
		echo "Login Success";
	} else {
		echo "Wrong password";
	}
}

?>