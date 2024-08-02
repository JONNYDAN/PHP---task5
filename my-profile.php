<?php
include('includes/header.php');
?>

<div class="content-wrapper" id="contentWrapper">
    <div class="content page-profile" id="content">
        <div class="container-fluid mb-50">
            <div class="user-details has-badge bronze-user">
                <div class="user-avatar-wrapper">
                    <div class="user-avatar">
                        <div class="box" id="box_0">
                            <img id="avatarPreview" src="<?php echo 'uploads/avatar/' . $_SESSION['user']['avatar_user']; ?>" height="200px" style="object-fit: cover;">
                        </div>
                        <span class="badge-name">Bronze</span>
                    </div>
                    <div class="user-badge"></div>
                </div>
                <h1 class="title user-name"><?php echo $_SESSION['user']['name_user'] ?></h1>
                <?php
                    $sql_check = "SELECT * FROM follow WHERE id_follower = ? AND id_following = ?";
                    $stmt_check = $pdo->prepare($sql_check);
                    $stmt_check->execute([$_SESSION['user']['id_user'], $_SESSION['user']['id_user']]);
                    $is_favorite = $stmt_check->rowCount() > 0;
                    $totalFollow = $stmt_check->rowCount();
                    ?>
                    <div class="follow-btn-wrapper <?= $is_favorite ? 'followed' : '' ?>" id="followBtnWrapper">
                        <a href="javascript:void(0)" id="followBtn" class="btn-follow"><?= $is_favorite ? 'Following' : 'Follow' ?></a>
                        <span class="follower-counter" id="followerCounter" data-count="0"><?php echo $totalFollow;?></span>
                    </div>
            </div>
            <div class="row no-gutters mt-15">
                <div class="url-group">
                    <h2>Best Scores</h2>
                    <a href="dashboard">Dashboard</a>
                </div>
            </div>

            <div class="game-blocks row no-gutters">
                <?php

                    $statement = $pdo->prepare("SELECT * FROM rankings r 
                        INNER JOIN games g ON g.id_game = r.id_game
                        WHERE r.id_user = ?
                        ORDER BY datetime_play DESC");
                    $statement->execute([$_SESSION['user']['id_user']]);

                    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                        $target_dir = "uploads/{$row['id_game']}/";
                        $target_file = $target_dir . $row['thumbnail_game'];
                ?>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                            <a href="game/<?php echo $row['id_game'] ?>/<?php echo $row['size'] ?>" title="">
                                <div class="game-block">
                                    <div class="box" id="box_<?php echo $row['id_game'] ?>">
                                        <img src="<?php echo $target_file ?>" accept="image/*" height="200px" style="object-fit: cover;">
                                        <p class="game-name"><?php echo $row['name_game'] ?></p>
                                    </div>
                                    <div class="score-info">
                                        <p><span>Score</span> <span><?php echo $row['score_game'] ?></span></p>
                                        <p><span>Max Tile</span> <span><?php echo $row['tile_game'] ?></span></p>
                                        <p><span>Grid Size</span> <span><?php echo $row['size'] ?> x <?php echo $row['size'] ?></span></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                <?php
                    }
                ?>
            </div>
            
        </div>
    </div>
</div>

<script>
        document.addEventListener('DOMContentLoaded', function() {
            var followBtnWrapper = document.getElementById('followBtnWrapper');
            var followBtn = document.getElementById('followBtn');
            var followerCounter = document.getElementById('followerCounter');
            var pathParts = window.location.pathname.split('/');
            var id_follow = pathParts[3];

            followBtn.addEventListener('click', function() {
                var isAdded = followBtnWrapper.classList.toggle('followed');
                followBtn.textContent = isAdded ? 'Following' : 'Follow';

                var count = parseInt(followerCounter.getAttribute('data-count'));
                count = isAdded ? count + 1 : count - 1;
                followerCounter.setAttribute('data-count', count);
                followerCounter.textContent = count;

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "request_check/check_follow.php", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send("id_follow=" + id_follow + "&type=" + (isAdded ? 1 : 0));
            });
        });
    </script>
<?php
include('includes/footer.php');
?>