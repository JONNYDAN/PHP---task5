<div class="game-blocks row no-gutters" id="">
    <?php
    $query = "SELECT * FROM games ORDER BY datetime_game DESC";
    $statement = $pdo->query($query);
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