<?php
include ('includes/header.php');
?>
<head>
    <link rel="stylesheet" href="style/create.css">
    <style>
        .img-preview {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
    </style>
</head>

<?php
if (!isset($_SESSION['user'])) {
?>
    <div class="content-wrapper" id="contentWrapper" onclick="hideLivesearch()"> <div class="content" id="content" style="min-height: calc(100vh - 127px);"> <div class="container-fluid"> <article class="article"> <h1 class="title">How to create a 2048 game</h1> <p>We've introduced a user login system to make it easier for you to create and play your games right away. So, you'll just need to log in to create your games.</p> <p class="highlighted-info">Please <a href="login.php">Log in</a> or <a href="register.php">Register</a> to create your games.</p> <p>You can get a lot of benefits by logging in. We've already added some new features for our registered users. You can now add any game to your Favorites list, follow other users and see their games on your dashboard.</p> <p>If you create a private game, it will not require any approval from us. But if you want to publish your game on our public pages, it will need an approval like before.</p> <br> </article> </div> </div> </div>
<?php
}else{
?>

<?php
function saveImageToSession($inputName) {
    // Nếu có hình ảnh mới được tải lên, lưu nó vào session
    if (isset($_FILES[$inputName]) && $_FILES[$inputName]['error'] === UPLOAD_ERR_OK) {
        $image = file_get_contents($_FILES[$inputName]['tmp_name']);
        $imageName = basename($_FILES[$inputName]['name']);
        $imagePath = 'temp_uploads/' . $imageName;

        $_SESSION[$inputName] = base64_encode($image);
        $_SESSION[$inputName . '_name'] = $imageName;
        $_SESSION[$inputName . '_path'] = $imagePath;

        move_uploaded_file($_FILES[$inputName]['tmp_name'], $imagePath);
    } else {
        // Nếu không có hình ảnh mới, giữ lại hình ảnh cũ trong session
        if (!isset($_SESSION[$inputName])) {
            $_SESSION[$inputName] = null;
            $_SESSION[$inputName . '_name'] = null;
            $_SESSION[$inputName . '_path'] = null;
        }
    }
    return $_SESSION[$inputName];
}

function getImageSrc($inputName) {
    // Kiểm tra nếu ảnh đã được lưu vào session
    if (isset($_SESSION[$inputName])) {
        return 'data:image/jpeg;base64,' . $_SESSION[$inputName];
    }
    
    // Nếu không có ảnh trong session, kiểm tra đường dẫn tạm thời
    if (isset($_SESSION[$inputName . '_path']) && file_exists($_SESSION[$inputName . '_path'])) {
        return $_SESSION[$inputName . '_path'];
    }
    
    // Nếu không có ảnh nào, trả về ảnh mặc định
    return 'path/to/default/image.jpg'; // Thay thế bằng đường dẫn tới ảnh mặc định
}


function getFileName($fileInputName) {
    return $_SESSION[$fileInputName . '_name'] ?? null;
}

function getFilePath($fileInputName) {
    return $_SESSION[$fileInputName . '_path'] ?? null;
}

// Di chuyển tệp từ thư mục tạm thời đến thư mục đích
function moveFile($fileInputName, $pathInput, $id) {

    if ($fileInputName && $pathInput) {
        $targetDir = "uploads/{$id}/";
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0777, true);
        }
        $targetFile = "{$targetDir}{$fileInputName}";

        // Chỉ di chuyển tệp nếu nó tồn tại trong thư mục tạm
        if (file_exists($pathInput)) {
            if (rename($pathInput, $targetFile)) {
                // Xóa tệp tạm sau khi di chuyển thành công
                unlink($pathInput);
            } else {
                // Xử lý lỗi khi không thể di chuyển tệp
                echo "Failed to move file: {$fileInputName}";
            }
        }
    } else {
        echo "No file found for {$fileInputName}";
    }
}


function cleanTempUploads() {
    $temp_dir = 'temp_uploads/';
    if (file_exists($temp_dir)) {
        $files = glob($temp_dir . '*'); // Tìm tất cả các tệp trong thư mục
        foreach ($files as $file) {
            if (is_file($file)) {
                unlink($file); // Xóa tệp
            }
        }
    }
}


$success_message = "";
$error_message_name = "";
$error_message_img = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['create'])) {
    $valid = 1;
    
    // Lưu thông tin các tệp vào phiên
    foreach (['thumbnail_game', 'img_1_game', 'img_2_game', 'img_3_game', 'img_4_game', 'img_5_game', 'img_6_game', 'img_7_game', 'img_8_game', 'img_9_game', 'img_10_game', 'img_11_game', 'img_12_game', 'img_13_game', 'img_14_game', 'img_15_game', 'img_16_game'] as $field) {
        saveImageToSession($field);
    }
    
    if (empty($_POST['name_game'])) {
        $valid = 0;
        $error_message_name .= "Indispensable game name!";
    }


    if ($valid == 1) {
        $datetime_game = date('Y-m-d H:i:s');

        $file_data_thumb = getFileName('thumbnail_game');
        $file_data_1 = getFileName('img_1_game');
        $file_data_2 = getFileName('img_2_game');
        $file_data_3 = getFileName('img_3_game');
        $file_data_4 = getFileName('img_4_game');
        $file_data_5 = getFileName('img_5_game');
        $file_data_6 = getFileName('img_6_game');
        $file_data_7 = getFileName('img_7_game');
        $file_data_8 = getFileName('img_8_game');
        $file_data_9 = getFileName('img_9_game');
        $file_data_10 = getFileName('img_10_game');
        $file_data_11 = getFileName('img_11_game');
        $file_data_12 = getFileName('img_12_game');
        $file_data_13 = getFileName('img_13_game');
        $file_data_14 = getFileName('img_14_game');
        $file_data_15 = getFileName('img_15_game');
        $file_data_16 = getFileName('img_16_game');

        $path_data_thumb = getFilePath('thumbnail_game');
        $path_data_1 = getFilePath('img_1_game');
        $path_data_2 = getFilePath('img_2_game');
        $path_data_3 = getFilePath('img_3_game');
        $path_data_4 = getFilePath('img_4_game');
        $path_data_5 = getFilePath('img_5_game');
        $path_data_6 = getFilePath('img_6_game');
        $path_data_7 = getFilePath('img_7_game');
        $path_data_8 = getFilePath('img_8_game');
        $path_data_9 = getFilePath('img_9_game');
        $path_data_10 = getFilePath('img_10_game');
        $path_data_11 = getFilePath('img_11_game');
        $path_data_12 = getFilePath('img_12_game');
        $path_data_13 = getFilePath('img_13_game');
        $path_data_14 = getFilePath('img_14_game');
        $path_data_15 = getFilePath('img_15_game');
        $path_data_16 = getFilePath('img_16_game');

        if ($file_data_thumb && $file_data_1 && $file_data_2 && $file_data_3 && $file_data_4 && $file_data_5 && $file_data_6 && $file_data_7 && $file_data_8 && $file_data_9 && $file_data_10 && $file_data_11 && $file_data_12 && $file_data_13 && $file_data_14 && $file_data_15 && $file_data_16) {
            $statement = $pdo->prepare("INSERT INTO games (
                email_creator,
                name_game,
                thumbnail_game,
                img_1_game,
                img_2_game,
                img_3_game,
                img_4_game,
                img_5_game,
                img_6_game,
                img_7_game,
                img_8_game,
                img_9_game,
                img_10_game,
                img_11_game,
                img_12_game,
                img_13_game,
                img_14_game,
                img_15_game,
                img_16_game,
                datetime_game
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

            $statement->execute([
                $_SESSION['user']['email_user'],
                strip_tags($_POST['name_game']),
                $file_data_thumb,
                $file_data_1,
                $file_data_2,
                $file_data_3,
                $file_data_4,
                $file_data_5,
                $file_data_6,
                $file_data_7,
                $file_data_8,
                $file_data_9,
                $file_data_10,
                $file_data_11,
                $file_data_12,
                $file_data_13,
                $file_data_14,
                $file_data_15,
                $file_data_16,
                $datetime_game
            ]);

            $new_id = $pdo->lastInsertId();

                moveFile($file_data_thumb, $path_data_thumb, $new_id);
                moveFile($file_data_1, $path_data_1, $new_id);
                moveFile($file_data_2, $path_data_2, $new_id);
                moveFile($file_data_3, $path_data_3, $new_id);
                moveFile($file_data_4, $path_data_4, $new_id);
                moveFile($file_data_5, $path_data_5, $new_id);
                moveFile($file_data_6, $path_data_6, $new_id);
                moveFile($file_data_7, $path_data_7, $new_id);
                moveFile($file_data_8, $path_data_8, $new_id);
                moveFile($file_data_9, $path_data_9, $new_id);
                moveFile($file_data_10, $path_data_10, $new_id);
                moveFile($file_data_11, $path_data_11, $new_id);
                moveFile($file_data_12, $path_data_12, $new_id);
                moveFile($file_data_13, $path_data_13, $new_id);
                moveFile($file_data_14, $path_data_14, $new_id);
                moveFile($file_data_15, $path_data_15, $new_id);
                moveFile($file_data_16, $path_data_16, $new_id);

            // Xóa tất cả các tệp tạm
            cleanTempUploads();

            foreach (['thumbnail_game', 'img_1_game', 'img_2_game', 'img_3_game', 'img_4_game', 'img_5_game', 'img_6_game', 'img_7_game', 'img_8_game', 'img_9_game', 'img_10_game', 'img_11_game', 'img_12_game', 'img_13_game', 'img_14_game', 'img_15_game', 'img_16_game'] as $field) {
                unset($_SESSION[$field]);
                unset($_SESSION[$field . '_name']);
                unset($_SESSION[$field . '_path']);
            }

            header("location: " . BASE_URL . 'index.php');
            exit;
        } else {
            $error_message_img = "Failed to upload one or more images.";
        }
    }
}
?>



<div class="content-wrapper" id="contentWrapper" onclick="hideLivesearch()">
    <div class="content" id="content">
        <div class="container-fluid">
            <div class="create-a-game">
                <h1 class="title">Create a 2048 game</h1>
                <p class="text-center">
                    <a class="bordered-button" href="dashboard.php">Dashboard</a>
                </p>
                <form name="mainForm" id="mainForm" action="create-game.php" method="post"
                    enctype='multipart/form-data'>
                    <input type="hidden" name="_token" value="kykz4nkc4wJ5ZuV25OkqXVpcC4RUmwMNNQhN2tlc">
                    <div class="row single-upload" id="rr8" style="padding-bottom: 17px;">
                        <div class="col">
                            <div class="form-group" id="fg_game_name">
                                <p class="font-weight-bold mb10">
                                    Game name (<span class="required">Required</span>
                                    )
                                </p>
                                <input class="form-control" type="text" name="name_game" value="<?php if (isset($_POST['name_game'])) {
                                    echo $_POST['name_game'];
                                } ?>" placeholder="The name of your game" >
                                <?php if ($error_message_name != '') {
                                    echo "<div class='text-error'>". $error_message_name . "</div>";
                                } ?>
                                <p class="text-error" id="game_name_warning"
                                    style="display: none;margin-top: 10px; margin-top: 25px; line-height: 1.5;"></p>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="rr10">
                        <div class="col">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 15px 1.5rem 0px 1.5rem;">
                                <div class="col-md-6 col-sm-3 col mt-3 mb-3">
                                    <p class="font-weight-bold">Thumbnail</p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload0" name="thumbnail_game" value="<?php if (isset($_POST['thumbnail_game'])) {
                                                echo $_POST['thumbnail_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError0"></span>
                                </div>
                                <div class="col-md-6 col-sm-9 col mt-3 mb-3">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo0" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 200px; height: 200px;">
                                                    <img id="imgPreview0" class="img-preview" name="thumbnail_game"
                                                        src="<?php echo getImageSrc('thumbnail_game'); ?>" 
                                                    alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 200px; height: 200px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr1">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 2 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload1" name="img_1_game" value="<?php if (isset($_POST['img_1_game'])) {
                                                echo $_POST['img_1_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError1"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo1" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                    <img id="imgPreview1" class="img-preview" name="img_1_game"
                                                        src="<?php echo getImageSrc('img_1_game'); ?>" 
                                                    alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 4 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload2" name="img_2_game" value="<?php if (isset($_POST['img_2_game'])) {
                                                echo $_POST['img_2_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError2"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo2" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview2" class="img-preview" name="img_2_game"
                                                        src="<?php echo getImageSrc('img_2_game'); ?>" 
                                                    alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr2">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 8 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload3" name="img_3_game" value="<?php if (isset($_POST['img_3_game'])) {
                                                echo $_POST['img_3_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError3"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo3" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview3" class="img-preview" name="img_3_game"
                                                        src="<?php echo getImageSrc('img_3_game'); ?>" 
                                                    alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 16 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload4" name="img_4_game" value="<?php if (isset($_POST['img_4_game'])) {
                                                echo $_POST['img_4_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError4"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo4" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview4" class="img-preview" name="img_4_game" src="<?php echo getImageSrc('img_4_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr3">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 32 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload5" name="img_5_game" value="<?php if (isset($_POST['img_5_game'])) {
                                                echo $_POST['img_5_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError5"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo3" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview5" class="img-preview" name="img_5_game" src="<?php echo getImageSrc('img_5_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 64 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload6" name="img_6_game" value="<?php if (isset($_POST['img_6_game'])) {
                                                echo $_POST['img_6_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError6"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo4" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview6" class="img-preview" name="img_6_game" src="<?php echo getImageSrc('img_6_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr4">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 128 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload7" name="img_7_game" value="<?php if (isset($_POST['img_7_game'])) {
                                                echo $_POST['img_7_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError7"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo3" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview7" class="img-preview" name="img_7_game" src="<?php echo getImageSrc('img_7_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                             <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 256 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload8" name="img_8_game" value="<?php if (isset($_POST['img_8_game'])) {
                                                echo $_POST['img_8_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError8"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo4" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview8" class="img-preview" name="img_8_game" src="<?php echo getImageSrc('img_8_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr5">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 512 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload9" name="img_9_game" value="<?php if (isset($_POST['img_9_game'])) {
                                                echo $_POST['img_9_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError9"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo3" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview9" class="img-preview" name="img_9_game" src="<?php echo getImageSrc('img_9_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                             <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 1024 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload10" name="img_10_game" value="<?php if (isset($_POST['img_10_game'])) {
                                                echo $_POST['img_10_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError10"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo4" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview10" class="img-preview" name="img_10_game" src="<?php echo getImageSrc('img_10_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr6">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 2048 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload11" name="img_11_game" value="<?php if (isset($_POST['img_11_game'])) {
                                                echo $_POST['img_11_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError11"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo3" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview11" class="img-preview" name="img_11_game" src="<?php echo getImageSrc('img_11_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                             <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 4096 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload12" name="img_12_game" value="<?php if (isset($_POST['img_12_game'])) {
                                                echo $_POST['img_12_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError12"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo4" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview12" class="img-preview" name="img_12_game" src="<?php echo getImageSrc('img_12_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr7">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 8192 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload13" name="img_13_game" value="<?php if (isset($_POST['img_13_game'])) {
                                                echo $_POST['img_13_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError13"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo3" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview13" class="img-preview" name="img_13_game" src="<?php echo getImageSrc('img_13_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                             <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 16384 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload14" name="img_14_game" value="<?php if (isset($_POST['img_14_game'])) {
                                                echo $_POST['img_14_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError14"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo4" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview14" class="img-preview" name="img_14_game" src="<?php echo getImageSrc('img_14_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters" id="rr8">
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 32768 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload15" name="img_15_game" value="<?php if (isset($_POST['img_15_game'])) {
                                                echo $_POST['img_15_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError15"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo3" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview15" class="img-preview" name="img_15_game" src="<?php echo getImageSrc('img_15_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                             <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row single-upload"
                                style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
                                <div class="col-666" style="margin-bottom: 15px;">
                                    <p class="font-weight-bold">Tile 65536 </p>
                                    <div class="actions">
                                        <a class="btn file-btn">
                                            <span>Upload</span>
                                            <input type="file" id="upload16" name="img_16_game" value="<?php if (isset($_POST['img_16_game'])) {
                                                echo $_POST['img_16_game'];
                                            } ?>" accept="image/*">
                                        </a>
                                    </div>
                                    <span class="img-error" id="imgError16"></span>
                                </div>
                                <div class="col-666">
                                    <div class="upload-demo-wrap">
                                        <div id="upload-demo4" class="croppie-container">
                                            <div class="cr-boundary" aria-dropeffect="none"
                                                style="width: 150px; height: 150px;">
                                                <img id="imgPreview16" class="img-preview" name="img_16_game" src="<?php echo getImageSrc('img_16_game'); ?>" alt="">
                                                <div class="cr-viewport cr-vp-square" tabindex="0"
                                                    style="width: 150px; height: 150px;"></div>
                                                <div class="cr-overlay"></div>
                                            </div>
                                            <div class="cr-slider-wrap">
                                                <input class="cr-slider" type="range" step="0.0001" aria-label="zoom"
                                                    style="display: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-submit-btn">
                        <div class="col">
                            <div class="submit-btn">
                                <button class="all-upload-result btn" type="submit" name="create">Submit Game </button>
                                <br>
                                <div class="text-error" id="submit_error"></div>
                                <?php if ($error_message_name != '') {
                                    echo "<div class='text-error'>". $error_message_name . "</div>";
                                } ?>
                                <?php if ($error_message_img != '') {
                                    echo "<div class='text-error'>" . $error_message_img . "</div>";
                                } ?>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.4/croppie.min.js"></script>
<script>
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input, index) => {
        input.addEventListener('change', function (event) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('imgPreview' + index).src = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        });
    });

    document.getElementById('uploadBtn').addEventListener('click', function () {
        const formData = new FormData();
        fileInputs.forEach((input, index) => {
            if (input.files.length > 0) {
                formData.append('file' + index, input.files[0]);
            }
        });

        fetch('/upload.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Images uploaded successfully');
                } else {
                    alert('Image upload failed: ' + data.error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
</script>

<?php
}
?>
<?php
include ('includes/footer.php');
?>