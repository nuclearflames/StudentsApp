<?

//Get the posted variables
$username = $_POST["username"];
//encrypt the password
$password = crypt($_POST["password"]);
$email = $_POST["email"];

//Validation of the fields
if (empty($username) || empty($password) || empty($email)) {
	die("Empty Values");
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	die("Bad Email Address");
}

include("config.php");
$tbl_name = "members";

//Sql injection protection
$username = stripslashes($username);
$password = stripslashes($password);
$email = stripslashes($email);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);
$email = mysql_real_escape_string($email);

$sqlCode = "INSERT INTO $tbl_name (username, password, email) VALUE ('$username', '$password', '$email')";
//Make query
$results = mysql_query($sqlCode) or die(mysql_error());
//If everything runs smoothly put into database
echo ("Successfull Insertion into DB")

?>