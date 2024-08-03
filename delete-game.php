<?php
include('includes/header.php');

// Hàm xóa thư mục và toàn bộ nội dung của nó
function deleteDirectory($dir)
{
    if (!file_exists($dir)) {
        return true;
    }
    if (!is_dir($dir)) {
        return unlink($dir);
    }
    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }
        if (!deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)) {
            return false;
        }
    }
    return rmdir($dir);
}

if (isset($_SESSION['user']) && isset($_GET['id']) &&  $_SESSION['user']['id_user']) {
    $id = intval($_GET['id']);

    // Xóa game từ cơ sở dữ liệu
    $stmt = $pdo->prepare("DELETE FROM games WHERE id_game = ? AND id_user = ?");
    $stmt->execute([$id, $_SESSION['user']['id_user']]);

    // Xóa thư mục chứa ảnh của game
    $dir = "uploads/{$id}/";
    if (deleteDirectory($dir)) {
        echo "Thư mục và tất cả các ảnh đã được xóa.";
    } else {
        echo "Có lỗi xảy ra khi xóa thư mục.";
    }

    header("Location: " . $baseUrl . "dashboard");
    exit;
}
?>
