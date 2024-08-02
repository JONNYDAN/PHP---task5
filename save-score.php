<?php
session_start();
// Error Reporting Turn On
ini_set('error_reporting', E_ALL);

// Setting up the time zone
date_default_timezone_set('Asia/Ho_Chi_Minh');

// Database credentials
$dbhost = 'localhost';
$dbname = 'all2048';
$dbuser = 'root';
$dbpass = '';

// Defining base url
define("BASE_URL", "");

// Getting Admin url
define("ADMIN_URL", BASE_URL . "admin" . "/");

try {
    $pdo = new PDO("mysql:host={$dbhost};dbname={$dbname};charset=utf8mb4", $dbuser, $dbpass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $exception) {
    echo "Connection error: " . $exception->getMessage();
    exit();
}

$id_user = isset($_SESSION['user']['id_user']) ? $_SESSION['user']['id_user'] : null;
$id_game = isset($_POST['id_game']) ? $_POST['id_game'] : null;
$score_game = isset($_POST['score']) ? $_POST['score'] : null;
$tile_game = isset($_POST['maxTileValue']) ? $_POST['maxTileValue'] : null;
$table_name = isset($_POST['tableName']) ? $_POST['tableName'] : null;

if ($id_user && $id_game && $score_game !== null && $tile_game !== null && $table_name) {
    // Kiểm tra nếu bản ghi đã tồn tại
    $sql_check = "SELECT * FROM $table_name WHERE id_game = ? AND id_user = ?";
    $stmt = $pdo->prepare($sql_check);
    $stmt->execute([$id_game, $id_user]);
    $datetime_play = date('Y-m-d H:i:s');

    if ($stmt->rowCount() > 0) {
        // Bản ghi đã tồn tại, kiểm tra điểm số
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($score_game > $row['score_game']) {
            // Cập nhật điểm số và tile_game nếu điểm mới cao hơn
            $sql_update = "UPDATE $table_name SET score_game = ?, tile_game = ?, datetime_play = ? WHERE id_game = ? AND id_user = ?";
            $stmt = $pdo->prepare($sql_update);
            if ($stmt->execute([$score_game, $tile_game, $datetime_play, $id_game, $id_user])) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $pdo->errorInfo()[2];
            }
        } else {
            echo "No update needed as the score is not higher.";
        }
    } else {
        // Không tồn tại bản ghi, chèn bản ghi mới
        $sql_insert = "INSERT INTO $table_name (id_game, id_user, score_game, tile_game, datetime_play) VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql_insert);
        if ($stmt->execute([$id_game, $id_user, $score_game, $tile_game, $datetime_play])) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $pdo->errorInfo()[2];
        }
    }
} else {
    echo "Missing user ID, game ID, score, max tile value, or table name.";
}

$pdo = null; // Close the database connection
?>
