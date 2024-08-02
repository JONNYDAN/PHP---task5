<?php
session_start();
include("includes/inc/config.php");

$id_user = isset($_SESSION['user']['id_user']) ? $_SESSION['user']['id_user'] : null;
$id_game = isset($_POST['id_game']) ? $_POST['id_game'] : null;
$score_game = isset($_POST['score']) ? $_POST['score'] : null;
$tile_game = isset($_POST['maxTileValue']) ? $_POST['maxTileValue'] : null;
$size = isset($_POST['size']) ? $_POST['size'] : null;

if ($id_user && $id_game && $score_game !== null && $tile_game !== null && $size) {
    $sql_check = "SELECT * FROM rankings WHERE id_game = ? AND id_user = ? AND size = ?";
    $stmt = $pdo->prepare($sql_check);
    $stmt->execute([$id_game, $id_user, $size]);
    $datetime_play = date('Y-m-d H:i:s');

    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($score_game > $row['score_game']) {
            $sql_update = "UPDATE rankings SET score_game = ?, tile_game = ?, datetime_play = ? WHERE id_game = ? AND id_user = ? AND size = ?";
            $stmt = $pdo->prepare($sql_update);

            if ($stmt->execute([$score_game, $tile_game, $datetime_play, $id_game, $id_user, $size])) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $pdo->errorInfo()[2];
            }
        } else {
            echo "No update needed as the score is not higher.";
        }
    } else {
        $sql_insert = "INSERT INTO rankings (id_game, id_user, score_game, tile_game, size, datetime_play) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql_insert);
        if ($stmt->execute([$id_game, $id_user, $score_game, $tile_game, $size, $datetime_play])) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $pdo->errorInfo()[2];
        }
    }
} else {
    echo "Missing user ID, game ID, score, max tile value, or table name.";
}

$pdo = null; 
?>
