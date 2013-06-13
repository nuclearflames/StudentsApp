<?

$username = $_POST["username"];
$password = crypt($_POST["password"]);
$email = $_POST["email"];

//Validation
if (empty($username) || empty($password) || empty($email)) {
	die("Empty Values");
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	die("Bad Email Address");
}


$host = "localhost";
$Rusername = "root";
$Rpassword = "Bed1113053";
$db_name = "studentsapp";
$tbl_name = "members";

mysql_connect("$host","$Rusername","$Rpassword") or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB " . mysql_error());

$username = stripslashes($username);
$password = stripslashes($password);
$email = stripslashes($email);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);
$email = mysql_real_escape_string($email);

$sqlCode = "INSERT INTO $tbl_name (username, password, email) VALUE ('$username', '$password', '$email')";

$results = mysql_query($sqlCode) or die(mysql_error());

echo ("Successfull Insertion into DB")

?>