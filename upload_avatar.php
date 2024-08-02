<?php
session_start();
include("includes/inc/config.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['avatar'])) {
    $target_dir = "uploads/avatar/";
    $user_id = $_SESSION['user']['id_user'];  
    $imageFileType = strtolower(pathinfo($_FILES["avatar"]["name"], PATHINFO_EXTENSION));
    $nameFile = $user_id . "." . $imageFileType;
    $target_file = $target_dir . $nameFile;
    $uploadOk = 1;

    $check = getimagesize($_FILES["avatar"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

    if ($_FILES["avatar"]["size"] > 500000) { 
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    $allowedFileTypes = ['jpg', 'jpeg', 'png', 'gif'];
    if (!in_array($imageFileType, $allowedFileTypes)) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    } else {
        $statement = $pdo->prepare("UPDATE users SET avatar_user = ? WHERE id_user = ?");
        $statement->execute([$nameFile, $user_id]);

        if (move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file)) {
            echo "The file " . htmlspecialchars($nameFile) . " has been uploaded.";
            $_SESSION['user']['avatar_user'] = $nameFile;
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
} else {
    echo "Invalid request.";
}
?>
