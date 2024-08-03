<?php
include('includes/header.php');
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
if (isset($_SESSION['user']) && isset($_GET['id']) && $_GET['creator'] == $_SESSION['user']['id_user']) {
    $id = intval($_GET['id']);
    $creator = intval($_GET['creator']);

    $stmt = $pdo->prepare("SELECT * FROM games WHERE id_game = ?");
    $stmt->execute([$id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
?>

    <?php
    function saveImageToSession($inputName)
    {
        if (isset($_FILES[$inputName]) && $_FILES[$inputName]['error'] === UPLOAD_ERR_OK) {
            $image = file_get_contents($_FILES[$inputName]['tmp_name']);
            $imageName = basename($_FILES[$inputName]['name']);
            $imagePath = 'temp_uploads/' . $imageName;

            $_SESSION[$inputName] = base64_encode($image);
            $_SESSION[$inputName . '_name'] = $imageName;
            $_SESSION[$inputName . '_path'] = $imagePath;

            move_uploaded_file($_FILES[$inputName]['tmp_name'], $imagePath);
            return $_SESSION[$inputName];
        }
    }

    function getImageSrc($inputName, $rowId, $rowName)
    {
        if (isset($_SESSION[$inputName])) {
            return 'data:image/jpeg;base64,' . $_SESSION[$inputName];
        }

        $target_dir = "uploads/{$rowId}/";
        $target_file = $target_dir . $rowName;

        return $target_file;
    }

    function getFileName($fileInputName, $index)
    {
        if (isset($_SESSION[$fileInputName . '_name'])) {
            $fileExtension = pathinfo($_SESSION[$fileInputName . '_name'], PATHINFO_EXTENSION);
            return "{$index}.{$fileExtension}";
        }
        return null;
    }

    function getFilePath($fileInputName)
    {
        return $_SESSION[$fileInputName . '_path'] ?? null;
    }

    function moveFile($fileInputName, $pathInput, $id)
    {
        if ($fileInputName && $pathInput) {
            $targetDir = "uploads/{$id}/";
            if (!file_exists($targetDir)) {
                mkdir($targetDir, 0777, true);
            }
            $targetFile = "{$targetDir}{$fileInputName}";

            if (file_exists($pathInput)) {
                if (rename($pathInput, $targetFile)) {
                    unlink($pathInput);
                } else {
                    echo "Failed to move file: {$fileInputName}";
                }
            }
        } else {
            echo "No file found for {$fileInputName}";
        }
    }


    function cleanTempUploads()
    {
        $temp_dir = 'temp_uploads/';
        if (file_exists($temp_dir)) {
            $files = glob($temp_dir . '*');
            foreach ($files as $file) {
                if (is_file($file)) {
                    unlink($file);
                }
            }
        }
    }


    $success_message = "";
    $error_message_name = "";
    $error_message_img = "";

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit'])) {
        $valid = 1;

        foreach (['thumbnail_game', 'img_1_game', 'img_2_game', 'img_3_game', 'img_4_game', 'img_5_game', 'img_6_game', 'img_7_game', 'img_8_game', 'img_9_game', 'img_10_game', 'img_11_game', 'img_12_game', 'img_13_game', 'img_14_game', 'img_15_game', 'img_16_game'] as $field) {
            saveImageToSession($field);
        }

        if (empty($_POST['name_game'])) {
            $valid = 0;
            $error_message_name .= "Indispensable game name!";
        }


        if ($valid == 1) {
            if (isset($_POST['name_game']) || isset($_POST['category_game'])) {
                $statement = $pdo->prepare("UPDATE games SET name_game = ? , category_game = ? WHERE id_game = ?");
                $statement->execute([$_POST['name_game'], $_POST['category_game'], $id]);
            }

            $fields = ['thumbnail_game', 'img_1_game', 'img_2_game', 'img_3_game', 'img_4_game', 'img_5_game', 'img_6_game', 'img_7_game', 'img_8_game', 'img_9_game', 'img_10_game', 'img_11_game', 'img_12_game', 'img_13_game', 'img_14_game', 'img_15_game', 'img_16_game'];
            foreach ($fields as $index => $field) {
                if (isset($_SESSION[$field])) {
                    $file_data = getFileName($field, $index);
                    $path_data = getFilePath($field);

                    $statement = $pdo->prepare("UPDATE games SET $field = ? WHERE id_game = ?");
                    $statement->execute([$file_data, $id]);

                    moveFile($file_data, $path_data, $id);
                }
            }

            cleanTempUploads();

            foreach (['thumbnail_game', 'img_1_game', 'img_2_game', 'img_3_game', 'img_4_game', 'img_5_game', 'img_6_game', 'img_7_game', 'img_8_game', 'img_9_game', 'img_10_game', 'img_11_game', 'img_12_game', 'img_13_game', 'img_14_game', 'img_15_game', 'img_16_game'] as $field) {
                unset($_SESSION[$field]);
                unset($_SESSION[$field . '_name']);
                unset($_SESSION[$field . '_path']);
            }

            header("Location: " . $baseUrl . "game/" . $id ."/4");
            exit();
        }
    }
    ?>


    <div class="content-wrapper" id="contentWrapper">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="create-a-game">
                    <h1 class="title">Create a 2048 game</h1>
                    <p class="text-center">
                        <a class="bordered-button" href="dashboard">Dashboard</a>
                    </p>
                    <form name="mainForm" id="mainForm" action="edit-game/<?php echo $row['id_game'] ?>/<?php echo $_SESSION['user']['id_user'] ?>" method="post" enctype='multipart/form-data'>
                        <input type="hidden" name="_token" value="kykz4nkc4wJ5ZuV25OkqXVpcC4RUmwMNNQhN2tlc">
                        <div class="row single-upload" id="rr8" style="padding-bottom: 17px;">
                            <div class="col">
                                <div class="form-group" id="fg_game_name">
                                    <p class="font-weight-bold mb10">
                                        Game name (<span class="required">Required</span>
                                        )
                                    </p>
                                    <input class="form-control" type="text" name="name_game" value="<?php
                                                                                                    echo $row['name_game'];
                                                                                                    ?>" placeholder="The name of your game">
                                    <?php if ($error_message_name != '') {
                                        echo "<div class='text-error'>" . $error_message_name . "</div>";
                                    } ?>
                                    <p class="text-error" id="game_name_warning" style="display: none;margin-top: 10px; margin-top: 25px; line-height: 1.5;"></p>
                                </div>
                            </div>
                        </div>

                        <div class="row single-upload  privacy" id="rr9" style="padding-bottom: 17px;">
                            <div class="col">
                                <div class="form-group" id="fg_creator_name">
                                    <p class="font-weight-bold mb10">Game category</p>
                                    <select name="category_game" class="form-select" value="<?php if (isset($_POST['category_game'])) {
                                                                                                echo $_POST['category_game'];
                                                                                            } ?>">
                                        <option <?php if ($row['category_game'] == "1") {
                                                    echo "selected";
                                                } ?> value="1">Aesthetics</option>
                                        <option <?php if ($row['category_game'] == "2") {
                                                    echo "selected";
                                                } ?> value="2">Movie</option>
                                        <option <?php if ($row['category_game'] == "3") {
                                                    echo "selected";
                                                } ?> value="3">TV Programs</option>
                                        <option <?php if ($row['category_game'] == "4") {
                                                    echo "selected";
                                                } ?> value="4">Games</option>
                                        <option <?php if ($row['category_game'] == "5") {
                                                    echo "selected";
                                                } ?> value="5">Brands</option>
                                        <option <?php if ($row['category_game'] == "6") {
                                                    echo "selected";
                                                } ?> value="6">Cat</option>
                                        <option <?php if ($row['category_game'] == "7") {
                                                    echo "selected";
                                                } ?> value="7">Dog</option>
                                        <option <?php if ($row['category_game'] == "8") {
                                                    echo "selected";
                                                } ?> value="8">Cake</option>
                                        <option <?php if ($row['category_game'] == "9") {
                                                    echo "selected";
                                                } ?> value="9">Fruit</option>
                                        <option <?php if ($row['category_game'] == "10") {
                                                    echo "selected";
                                                } ?> value="10">Fashion</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="rr10">
                            <div class="col">
                                <div class="row single-upload" style="justify-content:space-between;padding: 15px 1.5rem 0px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 200px; height: 200px;">
                                                    <img id="imgPreview0" class="img-preview" name="thumbnail_game" <?php if (isset($_SESSION['thumbnail_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('thumbnail_game') . '"';
                                                                                                                    } ?> alt="">
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
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview1" class="img-preview" name="img_1_game" <?php if (isset($_SESSION['img_1_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_1_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview2" class="img-preview" name="img_2_game" <?php if (isset($_SESSION['img_2_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_2_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters" id="rr2">
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview3" class="img-preview" name="img_3_game" <?php if (isset($_SESSION['img_3_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_3_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview4" class="img-preview" name="img_4_game" <?php if (isset($_SESSION['img_4_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_4_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters" id="rr3">
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview5" class="img-preview" name="img_5_game" <?php if (isset($_SESSION['img_5_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_5_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview6" class="img-preview" name="img_6_game" <?php if (isset($_SESSION['img_6_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_6_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters" id="rr4">
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview7" class="img-preview" name="img_7_game" <?php if (isset($_SESSION['img_7_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_7_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview8" class="img-preview" name="img_8_game" <?php if (isset($_SESSION['img_8_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_8_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters" id="rr5">
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview9" class="img-preview" name="img_9_game" <?php if (isset($_SESSION['img_9_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_9_game') . '"';
                                                                                                                    } ?> alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview10" class="img-preview" name="img_10_game" <?php if (isset($_SESSION['img_10_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_10_game') . '"';
                                                                                                                    } ?> " alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters" id="rr6">
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview11" class="img-preview" name="img_11_game" <?php if (isset($_SESSION['img_11_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_11_game') . '"';
                                                                                                                    } ?> " alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview12" class="img-preview" name="img_12_game" <?php if (isset($_SESSION['img_12_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_12_game') . '"';
                                                                                                                    } ?> " alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters" id="rr7">
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview13" class="img-preview" name="img_13_game" <?php if (isset($_SESSION['img_13_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_13_game') . '"';
                                                                                                                    } ?> " alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview14" class="img-preview" name="img_14_game" <?php if (isset($_SESSION['img_14_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_14_game') . '"';
                                                                                                                    } ?> " alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters" id="rr8">
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview15" class="img-preview" name="img_15_game" <?php if (isset($_SESSION['img_15_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_15_game') . '"';
                                                                                                                    } ?> " alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row single-upload" style="justify-content:space-between;padding: 25px 1.5rem 10px 1.5rem;">
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
                                                <div class="cr-boundary" aria-dropeffect="none" style="width: 150px; height: 150px;">
                                                    <img id="imgPreview16" class="img-preview" name="img_16_game" <?php if (isset($_SESSION['img_16_game'])) {
                                                                                                                        echo 'src="' . getImageSrc('img_16_game') . '"';
                                                                                                                    } ?> " alt="">
                                                    <div class="cr-viewport cr-vp-square" tabindex="0" style="width: 150px; height: 150px;"></div>
                                                    <div class="cr-overlay"></div>
                                                </div>
                                                <div class="cr-slider-wrap">
                                                    <input class="cr-slider" type="range" step="0.0001" aria-label="zoom" style="display: none;">
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
                                    <button class="all-upload-result btn" type="submit" name="edit">Submit Game </button>
                                    <br>
                                    <div class="text-error" id="submit_error"></div>
                                    <?php if ($error_message_name != '') {
                                        echo "<div class='text-error'>" . $error_message_name . "</div>";
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
            input.addEventListener('change', function(event) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imgPreview' + index).src = e.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            });
        });

        document.getElementById('uploadBtn').addEventListener('click', function() {
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
include('includes/footer.php');
?>
