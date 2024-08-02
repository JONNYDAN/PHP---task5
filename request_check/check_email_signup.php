<?php
include("../includes/inc/config.php");

if (isset($_POST['email_user'])) {
    $email_user = $_POST['email_user'];
    
    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay không
    $statement = $pdo->prepare("SELECT * FROM users WHERE email_user = ?");
    $statement->execute([$email_user]);

    if ($statement->rowCount() > 0) {
        echo "true"; // Trả về true nếu email đã tồn tại
    } else {
        echo "false"; // Trả về false nếu email không tồn tại
    }
    
    // Kết thúc kịch bản PHP
    exit;
}
?>