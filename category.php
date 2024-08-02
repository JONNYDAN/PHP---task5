<?php
include ('includes/header.php');
?>

<?php
    if (isset($_GET['id'])) {
        $id = intval($_GET['id']);
        $query_1 = "SELECT * FROM category WHERE id_category = ?";
        $statement_1 = $pdo->prepare($query_1);
        $statement_1->execute([$id]);
        $row_1 = $statement_1->fetch(PDO::FETCH_ASSOC);
?>
<div class="content-wrapper" id="contentWrapper">
    <div class="content" id="content" style="min-height: calc(100vh - 168px);">
        <div class="container-fluid">
            <h1 class="title">Category - <?php echo $row_1['name_category'];?></h1>
            <div class="game-blocks row no-gutters">
                <?php
                $query = "SELECT * FROM games WHERE category_game = ?";
                $statement = $pdo->prepare($query);
                $statement->execute([$id]);
                while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                    ?>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                    <a href="game.php/<?php echo $row['id_game'] ?>/4" title="">
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
            <div class="row games-pagination"> </div>
        </div>
    </div>
</div>
<?php
    }
?>

<?php
include ('includes/footer.php');
?>