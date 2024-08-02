<?php
include('includes/header.php');
?>

<style>
    .user-games .game-block .box {
        margin-bottom: 0px;
    }

    .user-games .game-block .game-info p.game-name {
        position: relative;
        height: auto;
    }

    .user-games .game-block .game-info p.creator-name {
        font-size: .6em;
        color: #a2a2a2;
        padding-top: 0px;
        padding-bottom: 0.5rem;
        line-height: 1.4;
    }

    .user-game-accessibility-warning {
        margin-top: 2rem;
        padding: 1rem;
        color: #ed4c67;
        text-align: center;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, .3);
    }

    .user-game-accessibility-warning p {
        margin-bottom: 0px;
    }

    .user-game-accessibility-warning a:hover {
        text-decoration: underline;
    }
</style>

<?php
if (!isset($_SESSION['user'])) {
?>
    <div class="content-wrapper" id="contentWrapper" >
        <div class="content user-games" id="content" style="min-height: calc(100vh - 127px);">
            <div class="container-fluid">
                <h1 class="title">Latest User Games </h1>
                <div class="game-blocks row no-gutters" id="latestGames">
                    <div class="col-12">
                        <div class="user-game-accessibility-warning">
                            <p>You are not logged in.</p>
                            <p>Please <a href="login">log in</a> or <a href="register">register</a> to play all the user games.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
} else {
?>
    <div class="content-wrapper" id="contentWrapper">
        <div class="content user-games" id="content" style="min-height: calc(100vh - 168px);">
            <div class="container-fluid">
                <h1 class="title">Latest User Games </h1>
                <div class="game-blocks row no-gutters" id="latestGames">
                <?php
                    $query = "SELECT * FROM games g
                    INNER JOIN users u ON g.id_user = u.id_user";
                    $statement = $pdo->query($query);
                    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                ?>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                        <div class="game-block"> <a href="game/<?php echo $row['id_game'] ?>/4" title="">
                                <div class="box" id="box_<?php echo $row['id_game'] ?>">
                                    <img src="<?php
                                    $target_dir = "uploads/{$row['id_game']}/";
                                    $target_file = $target_dir . $row['thumbnail_game'];
                                    echo $target_file ?>" accept="image/*" height="200px" style="object-fit: cover;"> 
                                </div>
                                <div class="game-info">
                                    <p class="game-name"><?php echo $row['name_game']?></p>
                                    <p class="game-name creator-name"><?php echo $row['name_user']?></p>
                                </div>
                            </a> </div>
                    </div>
                <?php 
                }
                ?>
                </div>
                <div class="row games-pagination">
                    <nav>
                        <ul class="pagination">
                            <li class="page-item disabled" aria-disabled="true"> <span class="page-link">« Previous</span> </li>
                            <li class="page-item"> <a class="page-link" href="" rel="next">Next »</a> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
<?php
}
?>


<?php
include('includes/footer.php');
?>