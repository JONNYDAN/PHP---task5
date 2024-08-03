<?php
include ('includes/header.php');
?>

<?php 
$stmt = $pdo->prepare("SELECT * FROM games ");
$stmt->execute();
$ids = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);

if (count($ids) > 0) {
  
    $random_ids = array_rand($ids, 1); 
    
    $random_id = $ids[$random_ids];
    
    header("location: ". $HOST .'2048/game/'. $random_id. '/4'); 
} else {
    echo "Không có ID nào trong bảng games.";
}
?>

<?php
include ('includes/footer.php');
?>
