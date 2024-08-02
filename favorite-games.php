<?php
include('includes/header.php');
?>

<head>
    <link rel="stylesheet" href="style/user.css">
</head>

<?php
$query = "SELECT * FROM favorites f
INNER JOIN games g ON g.id_game = f.id_game
WHERE f.id_user = ?";
$statement = $pdo->prepare($query);
$statement->execute([$_SESSION['user']['id_user']]);
$totalRows = $statement->rowCount();
?>

<div class="content-wrapper" id="contentWrapper">
    <div class="content page-user-games" id="content">
        <div class="container-fluid">
            <div class="profile-games">
                <div class="page-header">
                    <h1>Favorite Games</h1>
                    <p class="games-count"><?php echo $totalRows ?></php> Game</p>
                    <a class="bordered-button" href="dashboard">Dashboard</a>
                </div>
                <div class="game-blocks row no-gutters" id="relatedGames">
                    <?php
                    
                    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                    ?>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                            <a href="game/<?php echo $row['id_game'] ?>/4" title="">
                                <div class="game-block">
                                    <div class="box" id="box_<?php echo $row['id_game'] ?>">
                                        <img src="<?php
                                                    $target_dir = "uploads/{$row['id_game']}/";
                                                    $target_file = $target_dir . $row['thumbnail_game'];
                                                    echo $target_file ?>" accept="image/*" height="200px" style="object-fit: cover;">
                                        <p class="game-name"><?php echo $row['name_game'] ?></p>
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