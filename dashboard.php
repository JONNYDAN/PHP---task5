<?php
include('includes/header.php');
if (!isset($_SESSION['user'])) {
    // Người dùng chưa đăng nhập, bạn có thể điều hướng họ đến trang đăng nhập
    header("Location: login");
    exit;
}

?>

<head>
    <link rel="stylesheet" href="style/user.css">
    <link rel="stylesheet" href="style/dashboard.css">
</head>

<?php
$query = "SELECT * FROM users u
    INNER JOIN games g ON g.id_user = u.id_user
    WHERE u.id_user = ? ";
$statement = $pdo->prepare($query);
$statement->execute([$_SESSION['user']['id_user']]);
$totalRows = $statement->rowCount();
$row = $statement->fetch(PDO::FETCH_ASSOC);
?>
<div class="content-wrapper" id="contentWrapper">
    <div class="content page-user-dashboard" id="content">
        <div class="container-fluid">
            <div class="user-details">
                <form id="avatarForm" action="upload_avatar" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="kykz4nkc4wJ5ZuV25OkqXVpcC4RUmwMNNQhN2tlc">
                    <div class="user-avatar">
                        <div class="box" id="box_0">
                            <img id="avatarPreview" src="<?php echo 'uploads/avatar/' . $_SESSION['user']['avatar_user']; ?>" 
                                height="200px" style="object-fit: cover;">
                        </div>
                        <div class="avatar-input-wrapper">
                            <input id="upload" type="file" name="avatar" accept="image/*">
                        </div>
                    </div>
                    <div id="avatarUploadContainer" class="avatar-upload-container" style="display: none;"></div>
                </form>
                <h1 class="title user-name"><?php echo $_SESSION['user']['name_user']; ?></h1>
                <a class="bordered-button mt-10" href="my-profile">View Profile</a>
                <div class="profile-options">
                    <svg id="profileOptionsBtn" width="20" height="20" viewBox="0 0 29.96 122.88" fill="#444">
                        <path class="cls-1" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z" />
                    </svg>
                    <ul id="profileOptionsList">
                        <li>
                            <a href="reset-password">Reset Password</a>
                        </li>
                        <li>
                            <a href="logout.php" >Logout</a>
                        </li>
                    </ul>
                    <form id="logout-form" action="logout" method="POST" style="display: none;">
                        <input type="hidden" name="_token" value="kykz4nkc4wJ5ZuV25OkqXVpcC4RUmwMNNQhN2tlc">
                    </form>
                </div>
            </div>
            <div class="user-menu">
                <a href="favorite-games">Favorites</a>
                <a href="followers">Followers</a>
                <a href="following">Following</a>
                <a href="create-game">Create</a>
                <a href="logout.php">Logout</a>
            </div>
            <div class="profile-games profile-no-type-games">
                <h2>
                    <a href="javascript:void(0);">
                        Games <span class="games-count"><?php echo $totalRows; ?></span>
                    </a>
                </h2>
                <?php
                if ($totalRows != 0) {
                ?>
                    <div class="game-blocks row no-gutters">
                        <?php
                            $query = "SELECT * FROM games WHERE id_user = ? ORDER BY datetime_game DESC";
                            $statement = $pdo->prepare($query);
                            $statement->execute([$_SESSION['user']['id_user']]);
                            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                        ?>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                            <div class="game-block" id="game_<?php echo $row['id_game'] ?>"> <a href="game/<?php echo $row['id_game'] ?>/4" title="2048 QS4">
                                    <div class="box" id="box_1">
                                        <img src="<?php
                                        $target_dir = "uploads/{$row['id_game']}/";
                                        $target_file = $target_dir . $row['thumbnail_game'];
                                        echo $target_file ?>" accept="image/*" height="200px" style="object-fit: cover;">
                                        <p class="game-name"><?php echo $row['name_game'] ?></p>
                                    </div>
                                </a>
                                <div class="game-options"> <svg id="gameOptionsBtn_669fb7540d034" width="20" height="20" viewBox="0 0 29.96 122.88" fill="#444">
                                        <path class="cls-1" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"></path>
                                    </svg>
                                    <ul>
                                        <li><a href="edit-game/<?php echo $row['id_game'] ?>/">Edit</a></li>
                                        <li><a href="delete-game/<?php echo $row['id_game']?>/">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <?php 
                        }
                        ?>
                    </div>
                <?php
                } else {
                ?>
                    <div class="row no-gutters">
                        <div class="col-12">
                            <div class="dont-have-any-item text-center">
                                <p class="text-center">You don't have any game.</p>
                                <a href="create-game" class="btn btn-primary">Create a new game</a>
                            </div>
                        </div>
                    </div>
                <?php
                }
                ?>
            </div>
            <div class="privacy-explanation">
                <h2>Difference between Private and Public games</h2>
                <p class="private">
                    <strong>Private Games</strong>
                    : These games won't be published publicly on our website but you will be able to browse and play the games using the URL. We won't share this URL on our website but you can share it with your friends, they will also be able to play the game.
                </p>
                <p class="public">
                    <strong>Public Games</strong>
                    : These games will be publicly visible on your <a href="my-profile">profile</a>
                    page. Additionally, these games will be published on our website after being reviewed by a moderator and will be visible on the homepage and the game suggestion section of every game page.
                </p>
                <br>
                <h2>When should I create a Private game?</h2>
                <p>If your game contains images that you don't want to share with other people around the world for privacy reasons but want to share them with some of your friends then you can create a private game. You'll have to share the game URL with your friends. Otherwise, they won't be able to find the game on our website.</p>
            </div>
        </div>
    </div>
</div>

<script>
    document.getElementById('profileOptionsBtn').addEventListener('click', function() {
        const profileOptionsList = document.getElementById('profileOptionsList');

        if (profileOptionsList.style.display === 'block') {
            profileOptionsList.style.display = 'none';
        } else {
            profileOptionsList.style.display = 'block';
        }
    });
</script>

<script>
    document.getElementById('upload').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('avatarPreview').src = e.target.result;
            }
            reader.readAsDataURL(file);

            const formData = new FormData(document.getElementById('avatarForm'));
            fetch('upload_avatar.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        }
    });
</script>

<?php
include('includes/footer.php');
?>
