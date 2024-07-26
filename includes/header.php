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
    <title>2048 Cupcakes</title>

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
<!-- <?php echo $_SESSION['user']['email_user'];  ?> -->
<header class="header" id="headerContent">
        <div class="header-inner">
            <div class="logo" id="logoAnchor">
                <a href="index.php">
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
                        <li>
                            <a href="">
                                Popular <span class="hod">2048 Games</span>
                            </a>
                        </li>
                        <li class="has-dropdown">
                            <a href="javascript:void(0);" role="button" onclick="dropDown(this)">Account</a>
                            <?php
                                if (!isset($_SESSION['user'])) {
                                    echo '
                                        <ul>
                                            <li>
                                                <a href="login.php">Login</a>
                                            </li>
                                            <li>
                                                <a href="register.php">Register</a>
                                            </li>
                                        </ul>';
                                }else{
                                    echo '<ul>
                                            <li>
                                                <a href="dashboard.php">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="my-profile.php">My Profile</a>
                                            </li>
                                            <li>
                                                <a href="favorite-games.php">Favorite Games</a>
                                            </li>
                                            <li>
                                                <a href="">Followed User Games</a>
                                            </li>
                                            <li>
                                                <a href="">Following</a>
                                            </li>
                                            <li>
                                                <a href="">Followers</a>
                                            </li>
                                            <li>
                                                <a href="">My Games</a>
                                            </li>
                                            <li>
                                                <a href="create-game.php">Create a Game</a>
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
                                    <a href="">Aesthetics</a>
                                </li>
                                <li>
                                    <a href="">Movie</a>
                                </li>
                                <li>
                                    <a href="">TV Programs</a>
                                </li>
                                <li>
                                    <a href="">Games</a>
                                </li>
                                <li class="has-subcategory ">
                                    <a href="">Animal</a>
                                    <span class="child-indicator noselect" role="button"
                                        onclick="dropDown(this)">+</span>
                                    <ul>
                                        <li>
                                            <a href="">Cat</a>
                                        </li>
                                        <li>
                                            <a href="">Dog</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="has-subcategory ">
                                    <a href="">Food</a>
                                    <span class="child-indicator noselect" role="button"
                                        onclick="dropDown(this)">+</span>
                                    <ul>
                                        <li>
                                            <a href="">Cake</a>
                                        </li>
                                        <li>
                                            <a href="">Fruit</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">Fashion</a>
                                </li>
                                <li class="has-subcategory ">
                                    <a href="">Characters</a>
                                    <span class="child-indicator noselect" role="button"
                                        onclick="dropDown(this)">+</span>
                                    <ul>
                                        <li>
                                            <a href="">Anime Characters</a>
                                        </li>
                                        <li>
                                            <a href="">Fictional
                                                Characters</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="has-subcategory ">
                                    <a href="">Celebrity</a>
                                    <span class="child-indicator noselect" role="button"
                                        onclick="dropDown(this)">+</span>
                                    <ul>
                                        <li>
                                            <a href="">Actor</a>
                                        </li>
                                        <li>
                                            <a href="">Band</a>
                                        </li>
                                        <li>
                                            <a href="">Player</a>
                                        </li>
                                        <li>
                                            <a href="">Rapper</a>
                                        </li>
                                        <li>
                                            <a href="">Singer</a>
                                        </li>
                                        <li>
                                            <a href="">Tiktoker</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">Brands</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="create-game.php">
                                Create <span class="mit-create-a-game">a game</span>
                            </a>
                        </li>
                        <li>
                            <a href="">User Games</a>
                        </li>
                        <li>
                            <a href="">Game Creators</a>
                        </li>
                        <li>
                            <a href="">Players</a>
                        </li>
                        <li>
                            <a href="">Memory Game</a>
                        </li>
                    </ul>
                    <ul class="more-links-ul">
                        <li class="has-dropdown">
                            <a href="javascript:void(0);" role="button" onclick="dropDown(this)">More</a>
                            <ul class="more-links"></ul>
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

    