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

// Defining base URL (you can define this if you have a base URL)
define("BASE_URL", "");

// Getting Admin URL (optional, based on your application structure)
define("ADMIN_URL", BASE_URL . "admin/");

try {
    $pdo = new PDO("mysql:host={$dbhost};dbname={$dbname};charset=utf8mb4", $dbuser, $dbpass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $exception) {
    echo "Connection error: " . $exception->getMessage();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['avatar'])) {
    $target_dir = "uploads/avatar/";
    $user_id = $_SESSION['user']['id_user'];  // Get the user ID from the session
    $imageFileType = strtolower(pathinfo($_FILES["avatar"]["name"], PATHINFO_EXTENSION));
    $nameFile = $user_id . "." . $imageFileType;
    $target_file = $target_dir . $nameFile;
    $uploadOk = 1;

    // Check if image file is an actual image or fake image
    $check = getimagesize($_FILES["avatar"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["avatar"]["size"] > 500000) {  // 500KB size limit
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    $allowedFileTypes = ['jpg', 'jpeg', 'png', 'gif'];
    if (!in_array($imageFileType, $allowedFileTypes)) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    } else {
        // Update the avatar filename in the database
        $statement = $pdo->prepare("UPDATE users SET avatar_user = ? WHERE id_user = ?");
        $statement->execute([$nameFile, $user_id]);

        // Move the uploaded file to the target directory
        if (move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file)) {
            echo "The file " . htmlspecialchars($nameFile) . " has been uploaded.";
            // Update the session or database with the new avatar file path
            $_SESSION['user']['avatar_user'] = $nameFile;
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
} else {
    echo "Invalid request.";
}
?>
