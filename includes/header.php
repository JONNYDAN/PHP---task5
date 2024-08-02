<?php
ob_start();
session_start();
include ("includes/inc/config.php");
include ("includes/inc/functions.php");
include ("includes/inc/CSRF_Protect.php");
$csrf = new CSRF_Protect();
$error_message = '';
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <base href="/2048/">
    <title>2048</title>

    <link href="style/main.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="favicon.ico">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">

    <style>
        @media(min-width: 768px) {

            .header,
            .header-menu>ul>li>a {
                height: 64px;
            }
        }

        @media(max-width: 767px) {
            .header {
                height: 57px;
            }
        }
    </style>
    <link href="style/app.css" rel="stylesheet" type="text/css">
    <style>
        .content .prevnext {
            width: 110px;
            top: 225px;
        }

        .content .prev-game-link.mg-promo {
            width: 110px;
            border-color: #c3c3c3;
        }

        .content .prevnext .mg-promo p {
            padding: 8px 1px 8px;
            font-size: 13px;
        }

        #searchInput {
            width: 100px;
            border-radius: 10px;
            border: none;
            padding-left: 5px;
            font-size: 15px;
            background-image: url("https://all2048.com/img/search/search.svg");
            background-position: 95% 50%;
            background-size: 20px;
            background-repeat: no-repeat;
        }
    </style>

</head>

<body>
    <!-- <?php echo $_SESSION['user']['email_user']; ?> -->
    <header class="header" id="headerContent">
        <div class="header-inner">
            <div class="logo" id="logoAnchor">
                <a href="">
                    <strong>2048</strong>
                </a>
            </div>
            <div class="header-nav-wrapper" id="headerNavWrapper">
                <nav id="headerNav" class="header-menu vertical-menu-close">
                    <ul class="nav-menu list-unstyled" style="visibility: visible;">
                        <li>

                            <a href="random.php">
                                Random <span class="hod">Game</span>
                            </a>
                        </li>
                        <li class="has-dropdown">
                            <a href="javascript:void(0);" role="button" onclick="dropDown(this)">Account</a>
                            <?php
                            if (!isset($_SESSION['user'])) {
                                echo '
                                        <ul>
                                            <li>
                                                <a href="login">Login</a>
                                            </li>
                                            <li>
                                                <a href="register">Register</a>
                                            </li>
                                        </ul>';
                            } else {
                                echo '<ul>
                                            <li>
                                                <a href="dashboard">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="my-profile">My Profile</a>
                                            </li>
                                            <li>
                                                <a href="favorite-games">Favorite Games</a>
                                            </li>
                                            <li>
                                                <a href="following">following</a>
                                            </li>
                                            <li>
                                                <a href="followers">followers</a>
                                            </li>
                                            <li>
                                                <a href="create-game">Create a Game</a>
                                            </li>
                                            <li>
                                                <a href="logout.php">Logout</a>
                                            </li>
                                        </ul>';
                            }
                            ?>

                        </li>
                        <li class="has-dropdown">
                            <a href="javascript:void(0);" role="button" onclick="dropDown(this)">Category</a>
                            <ul>
                                <li>
                                    <a href="category/1">Aesthetics</a>
                                </li>
                                <li>
                                    <a href="category/2">Movie</a>
                                </li>
                                <li>
                                    <a href="category/3">TV Programs</a>
                                </li>
                                <li>
                                    <a href="category/4">Games</a>
                                </li>
                                <li>
                                    <a href="category/5">Brands</a>
                                </li>
                                <li class="has-subcategory ">
                                    <a href="">Animal</a>
                                    <span class="child-indicator noselect" role="button"
                                        onclick="dropDown(this)">+</span>
                                    <ul>
                                        <li>
                                            <a href="category/6">Cat</a>
                                        </li>
                                        <li>
                                            <a href="category/7">Dog</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="has-subcategory ">
                                    <a href="">Food</a>
                                    <span class="child-indicator noselect" role="button"
                                        onclick="dropDown(this)">+</span>
                                    <ul>
                                        <li>
                                            <a href="category/8">Cake</a>
                                        </li>
                                        <li>
                                            <a href="category/9">Fruit</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="category/10">Fashion</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="create-game">
                                Create <span class="mit-create-a-game">a game</span>
                            </a>
                        </li>
                        <li>
                            <a href="user-games">User Games</a>
                        </li>
                    </ul>
                    
                    <ul class="search-form-ul">
                        <li class="li-search-form">
                            <div class="search-form">
                                <input name="query" type="text" placeholder="Search" autocomplete="off"
                                    spellcheck="false" id="searchInput" onfocusin="showLivesearch()" required>
                                <ul class="livesearch" id="livesearch">
                                    <li>
                                        <p>Type to get suggestions</p>
                                        <div class="container-fluid">
                                            <?php
                                            include ('search.php');
                                            ?>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="burgWrapper" id="burgWrapper">
                <div id="burgIcon" class="burg"></div>
            </div>
        </div>
    </header>


    <script>
        function dropDown(element) {
            
        }
    </script>

    <script>
      function dropDown(element) {
            // Lấy phần tử cha có lớp "has-dropdown"
            var parent = element.parentElement;
            
            // Kiểm tra xem phần tử cha có lớp "show-dropdown" không
            if (parent.classList.contains('show-dropdown')) {
                // Nếu có, loại bỏ lớp
                parent.classList.remove('show-dropdown');
            } else {
                // Nếu không, thêm lớp
                parent.classList.add('show-dropdown');
            }
        }


    </script>


