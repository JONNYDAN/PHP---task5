<?php
session_start();
// Error Reporting Turn On
ini_set('error_reporting', E_ALL);

// Setting up the time zone
date_default_timezone_set('Asia/Ho_Chi_Minh');

// Host Name
$dbhost = 'localhost';

// Database Name
$dbname = 'all2048';

// Database Username
$dbuser = 'root';

// Database Password
$dbpass = '';

// Defining base url
define("BASE_URL", "");

// Getting Admin url
define("ADMIN_URL", BASE_URL . "admin" . "/");

try {
	$pdo = new PDO("mysql:host={$dbhost};dbname={$dbname};charset=utf8mb4", $dbuser, $dbpass);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch( PDOException $exception ) {
	echo "Connection error :" . $exception->getMessage();
}

if (isset($_POST['email_user'])) {

    $email_user = strip_tags($_POST['email_user']);
    $pass_user = strip_tags($_POST['pass_user']);

    $statement = $pdo->prepare("SELECT * FROM users WHERE email_user=?");
    $statement->execute(array($email_user));
    $total = $statement->rowCount();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    foreach ($result as $row) {
        $row_password = $row['pass_user'];
    }

    if ($total == 0) {
        echo 'error_1'; // Tài khoản không tồn tại
    } else {
        //using MD5 form
        if ($row_password != md5($pass_user)) {
            echo 'error_2'; //Mật khẩu không chính xác
        } else {
            $_SESSION['user'] = $row;
            echo 'success'; //Thành công
        }
    }

    exit;

}