<?php
session_start();
include("../includes/inc/config.php");

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
?>