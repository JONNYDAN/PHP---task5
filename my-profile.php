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
                <div class="follow-btn-wrapper" id="followBtnWrapper">
                    <a href="javascript:void(0)" id="followBtn" class="btn-follow">Follow</a>
                    <span class="follower-counter" id="followerCounter" data-count="0">0</span>
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
                $queries = [
                    [
                        "query" => "SELECT * FROM rankings_4 r4 
                        INNER JOIN games g ON g.id_game = r4.id_game
                        WHERE r4.id_user = ?
                        ORDER BY datetime_play DESC",
                        "size" => 4
                    ],
                    [
                        "query" => "SELECT * FROM rankings_5 r5 
                        INNER JOIN games g ON g.id_game = r5.id_game
                        WHERE r5.id_user = ?
                        ORDER BY datetime_play DESC",
                        "size" => 5
                    ],
                    [
                        "query" => "SELECT * FROM rankings_6 r6
                        INNER JOIN games g ON g.id_game = r6.id_game
                        WHERE r6.id_user = ?
                        ORDER BY datetime_play DESC",
                        "size" => 6
                    ]
                ];

                foreach ($queries as $query_data) {
                    $statement = $pdo->prepare($query_data['query']);
                    $statement->execute([$_SESSION['user']['id_user']]);

                    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                        $size = $query_data['size'];
                        $target_dir = "uploads/{$row['id_game']}/";
                        $target_file = $target_dir . $row['thumbnail_game'];
                ?>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                            <a href="game/<?php echo $row['id_game'] ?>/<?php echo $size ?>" title="">
                                <div class="game-block">
                                    <div class="box" id="box_<?php echo $row['id_game'] ?>">
                                        <img src="<?php echo $target_file ?>" accept="image/*" height="200px" style="object-fit: cover;">
                                        <p class="game-name"><?php echo $row['name_game'] ?></p>
                                    </div>
                                    <div class="score-info">
                                        <p><span>Score</span> <span><?php echo $row['score_game'] ?></span></p>
                                        <p><span>Max Tile</span> <span><?php echo $row['tile_game'] ?></span></p>
                                        <p><span>Grid Size</span> <span><?php echo $size ?> x <?php echo $size ?></span></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                <?php
                    }
                }
                ?>
            </div>
            
        </div>
    </div>
</div>

<script>
    document.getElementById('followBtn').addEventListener('click', function() {
        const followBtnWrapper = document.getElementById('followBtnWrapper');
        const followBtn = document.getElementById('followBtn');

        if (followBtnWrapper.classList.contains('followed')) {
            followBtnWrapper.classList.remove('followed');
            followBtn.textContent = 'Follow';
        } else {
            followBtnWrapper.classList.add('followed');
            followBtn.textContent = 'Following';
        }
    });
    
</script>
<?php
include('includes/footer.php');
?>