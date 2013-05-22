<?php

$host = "localhost";
$Rusername = "root";
$Rpassword = "";
$db_name = "studentsapp";
$tbl_name = "members";

mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

$username = $_POST["username"];
$password = $_POST["password"];

$username = stripslashes($username);
$password = stripslashes($password);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);

$sqlCode = "SELECT * FROM $tbl_name WHERE username='$username' and password='$password'";

$results = mysql_query($sqlCode);

$count = mysql_num_rows($results);

if ($count==1) {
	session_register("username");
	session_register("password");
	header("location:login_success.php");
} else {
	echo "Wrong username/password";
}


?>