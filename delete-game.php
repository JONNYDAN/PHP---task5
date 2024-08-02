<?php
include ('includes/header.php');

if (isset($_SESSION['user']) && isset($_GET['id']) && $_GET['creator'] == $_SESSION['user']['id_user']) {
    $id = intval($_GET['id']);
    $creator = intval($_GET['creator']);

    $stmt = $pdo->prepare("DELETE FROM games WHERE id_game = ? AND id_user = ?");
    $stmt->execute([$id, $creator]);
    header("Location: " . $baseUrl . "dashboard");
    exit;
}

?>