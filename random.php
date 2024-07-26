<?php
include ('includes/header.php');
?>

<?php 
$stmt = $pdo->prepare("SELECT * FROM games ");
$stmt->execute();
$ids = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);

// Kiểm tra xem mảng có phần tử nào không
if (count($ids) > 0) {
    // Chọn ngẫu nhiên một hoặc nhiều ID
    $random_ids = array_rand($ids, 1); // Lấy ngẫu nhiên 1 ID
    
    $random_id = $ids[$random_ids];
    
    header("location: ".BASE_URL.'game.php?id='. $random_id. '&size=4'); 
} else {
    echo "Không có ID nào trong bảng games.";
}
?>

<?php
include ('includes/footer.php');
?>