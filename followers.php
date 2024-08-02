<?php
include('includes/header.php');
?>

<head>
    <link rel="stylesheet" href="style/user.css">
</head>

<?php
$query = "SELECT * FROM follow f
INNER JOIN users u ON u.id_user = f.id_following
WHERE f.id_following = ?";
$statement = $pdo->prepare($query);
$statement->execute([$_SESSION['user']['id_user']]);
$totalRows = $statement->rowCount();
?>

<div class="content-wrapper" id="contentWrapper">
    <div class="content page-user-games" id="content">
        <div class="container-fluid">
            <div class="profile-games">
                <div class="page-header">
                    <h1>Followers</h1>
                    <p class="games-count"><?php echo $totalRows ?></php> User</p>
                    <a class="bordered-button" href="dashboard">Dashboard</a>
                </div>
                <div class="game-blocks row no-gutters" id="relatedGames">
                    <?php
                    
                    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                    ?>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                            <a href="user-profile/<?php echo $row['id_follower'] ?>" title="">
                                <div class="game-block">
                                    <div class="box" id="box_<?php echo $row['id_follower'] ?>">
                                    <?php
                                        $query_info = "SELECT * FROM  users u 
                                        WHERE id_user = ?";
                                        $statement_info = $pdo->prepare($query_info);
                                        $statement_info->execute([$row['id_follower']]);
                                        $row_info = $statement_info->fetch(PDO::FETCH_ASSOC)
                                        ?>
                                        <img src="<?php
                                                    $target_dir = "uploads/avatar/";
                                                    $target_file = $target_dir . $row_info['avatar_user'];
                                                    echo $target_file ?>" accept="image/*" height="200px" style="object-fit: cover;">
                                        <p class="game-name"><?php echo $row_info['name_user'] ?></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php
                    }
                    ?>
                </div>
                <div class="row games-pagination"></div>
            </div>
        </div>
    </div>
</div>

<?php
include('includes/footer.php');
?>