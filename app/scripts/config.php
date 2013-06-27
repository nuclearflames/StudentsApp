<?php

$host = "localhost";
$Rusername = "app";
$Rpassword = "GC36qCYp3HrKjU7B";
$db_name = "studentsapp";

//Connect to database
mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

?>