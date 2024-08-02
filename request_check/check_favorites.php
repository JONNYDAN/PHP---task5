<?php
session_start();
include("../includes/inc/config.php");

$id_user = isset($_SESSION['user']['id_user']) ? $_SESSION['user']['id_user'] : null;
$id_game = isset($_POST['id_game']) ? $_POST['id_game'] : null;
$type = isset($_POST['type']) ? $_POST['type'] : null;

if ($id_user && $id_game && $type !== null) {
    if ($type == 0) {
        $sql_delete = "DELETE FROM favorites WHERE id_game = ? AND id_user = ?";
        $stmt = $pdo->prepare($sql_delete);
        if ($stmt->execute([$id_game, $id_user])) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $stmt->errorInfo()[2];
        }
    } else {
        $sql_insert = "INSERT INTO favorites (id_game, id_user) VALUES (?, ?)";
        $stmt = $pdo->prepare($sql_insert);
        if ($stmt->execute([$id_game, $id_user])) {
            echo "New record created successfully";
        } else {
            echo "Error creating record: " . $stmt->errorInfo()[2];
        }
    }
} else {
    echo "Missing user ID, game ID, or type.";
}

$pdo = null;
?>
