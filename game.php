<?php
include('includes/header.php');
?>

<?php
if (isset($_GET['id'])) {

  $id = intval($_GET['id']);
  $size = intval($_GET['size']);
  $url_share = 'http://localhost/2048/game/' . $id . '/' . $size;

  $facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" . urlencode($url_share);
  $twitterUrl = "https://twitter.com/intent/tweet?url=" . urlencode($url_share) . "&text=Check+out+this+game!";
  $redditUrl = "https://www.reddit.com/submit?url=" . urlencode($url_share) . "&title=Check+out+this+game!";

  $stmt = $pdo->prepare("SELECT * FROM games WHERE id_game = ?");
  $stmt->execute([$id]);


  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    function generateBackgroundImageCSS($row, $imageField)
    {
      $target_dir = "uploads/{$row['id_game']}/";
      $target_file = $target_dir . $row[$imageField];
      return $target_file;
    }
?>
    <style>
      .tile.tile-2 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_1_game') ?>');
      }

      .tile.tile-4 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_2_game') ?>');
      }

      .tile.tile-8 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_3_game') ?>');
      }

      .tile.tile-16 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_4_game') ?>');
      }

      .tile.tile-32 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_5_game') ?>');
      }

      .tile.tile-64 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_6_game') ?>');
      }

      .tile.tile-128 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_7_game') ?>');
      }

      .tile.tile-256 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_8_game') ?>');
      }

      .tile.tile-512 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_9_game') ?>');
      }

      .tile.tile-1024 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_10_game') ?>');
      }

      .tile.tile-2048 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_11_game') ?>');
      }

      .tile.tile-4096 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_12_game') ?>');
      }

      .tile.tile-8192 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_13_game') ?>');
      }

      .tile.tile-16384 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_14_game') ?>');
      }

      .tile.tile-32768 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_15_game') ?>');
      }

      .tile.tile-65536 .tile-inner {
        background-image: url('<?php echo generateBackgroundImageCSS($row, 'img_16_game') ?>');
      }
    </style>
    <div class="content-wrapper" id="contentWrapper">
      <div class="content game-single" id="content">
        <div class="container-fluid">
          <h1 class="title"><?php echo $row['name_game'] ?></h1>
        </div>
        <div class="game-content noselect" id="gameContent">
          <img class="fs-close-btn" id="fullscreenEndTrigger" src="style/img/cross.svg" alt="Close">
          <div class="game-container-wrapper game-type-custom">
            <div class="game-top">
              <div class="heading">
                <div class="scores-container">
                  <div class="score-container">0</div>
                  <div class="best-container" id="btnGameToStats">0</div>
                </div>
              </div>
              <div class="above-game">
                <div class="buttons">
                  <a class="restart-button-trigger" id="restartBtnTrigger" role="button">New Game</a>
                  <!-- <a href="javascript:void(0);" class="undo-button" role="button" id="btnUndo">Undo</a> -->
                </div>
                <?php
                $sql_check = "SELECT * FROM favorites WHERE id_game = ? AND id_user = ?";
                $stmt_check = $pdo->prepare($sql_check);
                $stmt_check->execute([$id, $_SESSION['user']['id_user']]);
                $is_favorite = $stmt_check->rowCount() > 0;
                ?>
                <div class="favorite-icon <?= $is_favorite ? 'added' : '' ?>" id="favoriteIcon" role="button"></div>
              </div>
            </div>
            <?php
            if (isset($_GET['size'])) {
              $size = intval($_GET['size']);
              switch ($size) {
                case '5':
                  echo '
                  <div class="game-container gs-5">
                   <div class="game-message">
                    <p></p> 
                    <div class="lower">
                     <a class="keep-playing-button" role="button" style="display:none">Keep going</a>
                      <div class="score-sharing">&nbsp;</div> <a class="retry-button" role="button">Play again</a> </div>
                    </div>
                    <div class="grid-container">
                     <div class="grid-row">
                      <div class="grid-cell"></div>
                      <div class="grid-cell"></div> 
                      <div class="grid-cell"></div> 
                      <div class="grid-cell"></div> 
                      <div class="grid-cell"></div> 
                    </div>
                    <div class="grid-row">
                     <div class="grid-cell"></div>
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                    </div> 
                    <div class="grid-row"> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                    </div> 
                    <div class="grid-row"> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                    </div> 
                    <div class="grid-row"> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                     <div class="grid-cell"></div> 
                    </div> 
                   </div> 
                   <div class="tile-container">
                    <div class="tile tile-2 tile-position-4-2 tile-new">
                     <div class="tile-inner">
                      <span class="tile-text">2</span>
                     </div>
                    </div>
                    <div class="tile tile-2 tile-position-5-1 tile-new">
                      <div class="tile-inner"><span class="tile-text">2</span>
                    </div>
                    </div>
                    </div>
                    </div>';
                  break;
                case '6':
                  echo '<div class="game-container gs-6"> <div class="game-message"> <p></p> <div class="lower"> <a class="keep-playing-button" role="button" style="display:none">Keep going</a> <div class="score-sharing">&nbsp;</div> <a class="retry-button" role="button">Play again</a> </div> </div> <div class="grid-container"> <div class="grid-row"> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> </div> <div class="grid-row"> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> </div> <div class="grid-row"> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> </div> <div class="grid-row"> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> </div> <div class="grid-row"> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> </div> <div class="grid-row"> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> <div class="grid-cell"></div> </div> </div> <div class="tile-container"><div class="tile tile-4 tile-position-1-5 tile-new"><div class="tile-inner"><span class="tile-text">4</span></div></div><div class="tile tile-2 tile-position-3-4 tile-new"><div class="tile-inner"><span class="tile-text">2</span></div></div></div> </div>';
                  break;
                case '4':
                  echo '<div class="game-container"><div class="game-message"><p></p><div class="lower"><a class="keep-playing-button">Keep going</a><a class="retry-button">Try again</a></div></div><div class="grid-container"><div class="grid-row"><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div></div><div class="grid-row"><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div></div><div class="grid-row"><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div></div><div class="grid-row"><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div></div></div><div class="tile-container"></div></div>';
              }
            }
            ?>

            <div class="game-footer">
              <div>
                <span>Moves : </span>
                <span id="moveCount">0</span>
              </div>
              <?php
              if (isset($_SESSION['user']) && $_SESSION['user']['id_user'] == $row['id_user']) {
              ?>
                <div> <a href="edit-game/<?php echo $row['id_game'] ?>/<?php echo $_SESSION['user']['id_user'] ?>">Edit</a> </div>
              <?php
              }
              ?>
              <div>
                <span id="timer">&nbsp;</span>
              </div>
            </div>
            <div class="settings-modal" id="settingsModal">
              <div class="settings-modal-content">
                <div class="settings-modal-content-inner">
                  <div class="settings-modal-header">
                    <p>
                      Settings <span class="settings-modal-close">&times;</span>
                    </p>
                  </div>
                  <div class="settings-modal-body">
                    <div class="settings-item settings-bg-2">
                      <div class="settings-item-left">
                        <p>Night mode</p>
                      </div>
                      <div class="settings-item-right settings-off">
                        <p>
                          <a href="javascript:void(0);" role="button" id="btnThemeSettings">OFF</a>
                        </p>
                      </div>
                    </div>
                    <div class="settings-item settings-bg-1">
                      <div class="settings-item-left">
                        <p>Game sound</p>
                      </div>
                      <div class="settings-item-right settings-off">
                        <p>
                          <a href="javascript:void(0);" role="button" id="btnSoundSettings" data-status="off">OFF</a>
                        </p>
                      </div>
                    </div>
                    <audio id="sound" src="move.mp3" preload="auto"></audio>
                    <div class="settings-item settings-bg-2">
                      <div class="settings-item-left">
                        <p>Tile numbers</p>
                      </div>
                      <div class="settings-item-right settings-on">
                        <p>
                          <a href="javascript:void(0);" role="button" id="btnTvSettings">Visible</a>
                        </p>
                      </div>
                    </div>
                    <div class="settings-item settings-bg-2">
                      <div class="settings-item-left">
                        <p>Clear game data</p>
                      </div>
                      <div class="settings-item-right settings-off">
                        <p>
                          <a href="javascript:void(0);" role="button" id="clearBtnTrigger">Clear</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gf-buttons">
          <ul>
            <li>
              <a id="fullscreenStartTrigger" href="javascript:void(0);" role="button">
                <span class="fs-start-btn">&nbsp;</span>
                <span>Fullscreen</span>
              </a>
            </li>
            <li>
              <a id="settingsModalTrigger" href="javascript:void(0);" role="button">
                <span class="settings-btn">&nbsp;</span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a id="customGridBtn" href="javascript:void(0);" role="button">
                <span class="custom-grid-btn">&nbsp;</span>
                <span>Grid</span>
              </a>
              <ul>
                <li>
                  <a href="game/<?php echo $row['id_game'] ?>/4">4 x 4</a>
                </li>
                <li>
                  <a href="game/<?php echo $row['id_game'] ?>/5">5 x 5</a>
                </li>
                <li>
                  <a href="game/<?php echo $row['id_game'] ?>/6">6 x 6</a>
                </li>
              </ul>
            </li>
            <li>
              <a id="rankingsBtn" href="javascript:void(0);" role="button">
                <span class="scores-btn">&nbsp;</span>
                <span>Scores</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="game-scores-container mt-30" id="gameScoresContainer">
          <div class="game-scores" id="gameScores">
            <div class="container-fluid">
              <div class="loading-scores"><img src="style/img/loading/loader-search.svg" alt="Loading..." width="35" height="35"></div>
              <div id="scoreContent">
                <?php
                if (!isset($_SESSION['user'])) {
                  echo '<p class="log-in-warning">(Please <a href="login">Log in</a> or <a href="register">Register</a> to save your scores)</p>';
                }
                ?>

                <div class="scores top" id="scores">
                  <div class="score-header noselect">
                    <h2 class="title-top-score">Top Scores</h2>
                  </div>
                  <div class="score-content">
                    <div class="content-top-score">
                      <div class="table-responsive">
                        <table class="table table-bordered" id="scoreTableTop">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Max Tile</th>
                              <th scope="col">Score</th>
                            </tr>
                          </thead>
                          <tbody id="scoreTableBodyTop">
                            <?php
                            $stmt_top = $pdo->prepare("SELECT * FROM rankings r INNER JOIN users u ON r.id_user = u.id_user 
                                                        WHERE id_game = ? AND size = ?");
                            $stmt_top->execute([$id, $size]);
                            $rank = 1;
                            while ($row_top = $stmt_top->fetch(PDO::FETCH_ASSOC)) {
                            ?>
                              <tr>
                                <th scope="row"><?php echo $rank ?></th>
                                <td><a href="user-profile/<?php echo $row_top['id_user'] ?>"><?php echo $row_top['name_user'] ?></a></td>
                                <td><?php echo $row_top['tile_game'] ?></td>
                                <td><?php echo $row_top['score_game'] ?></td>
                              </tr>
                            <?php
                              $rank++;
                            }
                            ?>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="social-share">
          <p>
            Share <span>with your friends and check if they can win</span>
          </p>
          <ul>
            <li class="twitter-old">
              <a rel="nofollow" class="locale-data-title" href="<?php echo $twitterUrl; ?>" target="_blank" title="Share on Twitter">
                <svg width="18" height="16" viewBox="328 355 335 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m630 425a195 195 0 0 1-299 175 142 142 0 0 0 97-30 70 70 0 0 1-58-47 70 70 0 0 0 31-2 70 70 0 0 1-57-66 70 70 0 0 0 28 5 70 70 0 0 1-18-90 195 195 0 0 0 141 72 67 67 0 0 1 116-62 117 117 0 0 0 43-17 65 65 0 0 1-31 38 117 117 0 0 0 39-11 65 65 0 0 1-32 35z" fill="white" />
                </svg>
              </a>
            </li>
            <li class="twitter">
              <a rel="nofollow" class="locale-data-title" href="<?php echo $twitterUrl; ?>" target="_blank" title="Share on Twitter">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0416787 0L6.64177 8.82495L0 16H1.4948L7.30965 9.71813L12.0079 16H17.0947L10.1233 6.67867L16.3054 0H14.8106L9.45542 5.78548L5.12853 0H0.0416787ZM2.23989 1.10107H4.5768L14.8962 14.8988H12.5593L2.23989 1.10107Z" fill="white"></path>
                </svg>
              </a>
            </li>
            <li class="facebook">
              <a rel="nofollow" class="locale-data-title" href="<?php echo $facebookUrl; ?>" target="_blank" title="Share on Facebook">
                <svg width="9" height="18" viewBox="0 0 9 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.842 18V9.79h2.653l.397-3.2h-3.05V4.545c0-.926.247-1.557 1.527-1.557L9 2.988V.126C8.718.087 7.75 0 6.623 0 4.27 0 2.66 1.491 2.66 4.23v2.36H0v3.2h2.66V18h3.182z" fill-rule="nonzero" fill="#FFF"></path>
                </svg>
              </a>
            </li>
            <li class="reddit">
              <a rel="nofollow" class="locale-data-title" href="<?php echo $redditUrl; ?>" target="_blank" title="Share on Reddit">
                <svg width="24" height="20" viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 13.704c-.068-1.836-1.59-3.27-3.41-3.208-.806.029-1.573.363-2.156.924-2.564-1.768-5.576-2.737-8.672-2.805l1.462-7.113 4.82 1.026c.134 1.252 1.243 2.16 2.48 2.023 1.237-.136 2.133-1.258 1.999-2.51C26.388.787 25.28-.12 24.043.016c-.711.074-1.35.493-1.702 1.117L16.82.017c-.376-.085-.75.153-.835.539v.01L14.323 8.48c-3.135.05-6.186 1.026-8.784 2.805-1.321-1.258-3.404-1.196-4.647.147-1.242 1.338-1.18 3.446.146 4.704.258.244.554.454.885.601-.023.335-.023.669 0 1.003C1.923 22.846 7.8 27 15.05 27s13.129-4.149 13.129-9.26c.022-.335.022-.67 0-1.004 1.13-.572 1.842-1.751 1.82-3.032zM7.475 15.988c0-1.258 1.014-2.284 2.257-2.284 1.242 0 2.256 1.026 2.256 2.284 0 1.258-1.014 2.284-2.256 2.284-1.249-.011-2.257-1.026-2.257-2.284zm13.084 6.268c-1.6 1.219-3.56 1.842-5.565 1.757-2.004.085-3.964-.538-5.565-1.757-.212-.26-.173-.651.084-.867.224-.187.543-.187.773 0 1.355 1.003 3.006 1.513 4.686 1.434 1.68.09 3.337-.397 4.708-1.388.247-.244.65-.238.89.01.241.25.236.658-.01.902v-.09zm-.403-3.905c-1.243 0-2.256-1.025-2.256-2.284 0-1.258 1.013-2.284 2.256-2.284 1.243 0 2.256 1.026 2.256 2.284.05 1.259-.918 2.318-2.16 2.37h-.113l.017-.086z" fill-rule="nonzero" fill="#FFF"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="container-fluid mt-100 mb-25">
          <h2 class="title">Related Games</h2>
          <?php
          include('block.php');
          ?>
          <div class="row text-center">
            <div class="col">
              <div class="load-more">
                <span class="bordered-button" id="loadMoreBtn">View More</span>
                <img src="img/search/search.svg" alt="Loading" width="35">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", function() {
        const gameContent = document.getElementById("gameContent");
        const fullscreenStartTrigger = document.getElementById("fullscreenStartTrigger");
        const fullscreenEndTrigger = document.getElementById("fullscreenEndTrigger");
        const gameContainerWrapper = document.querySelector(".game-container-wrapper");

        function enterFullscreen() {
          if (gameContent.requestFullscreen) {
            gameContent.requestFullscreen();
          } else if (gameContent.mozRequestFullScreen) { // Firefox
            gameContent.mozRequestFullScreen();
          } else if (gameContent.webkitRequestFullscreen) { // Chrome, Safari and Opera
            gameContent.webkitRequestFullscreen();
          } else if (gameContent.msRequestFullscreen) { // IE/Edge
            gameContent.msRequestFullscreen();
          }
          gameContainerWrapper.style.transform = 'scale(1.64384)';
        }

        function exitFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
          }
          gameContainerWrapper.style.transform = 'scale(1)';
        }

        fullscreenStartTrigger.addEventListener("click", enterFullscreen);
        fullscreenEndTrigger.addEventListener("click", exitFullscreen);
      });
    </script>

    <script>
      var btnSoundSettings = document.getElementById('btnSoundSettings');
      var sound = document.getElementById('sound');
      var soundEnabled = false; 

      function playSound() {
        sound.currentTime = 0;
        sound.play();
      }

      btnSoundSettings.addEventListener('click', function() {
        var status = btnSoundSettings.getAttribute('data-status');

        if (status === 'off') {
          btnSoundSettings.textContent = 'ON';
          btnSoundSettings.setAttribute('data-status', 'on');
          btnSoundSettings.parentElement.classList.remove('settings-off');
          btnSoundSettings.parentElement.classList.add('settings-on');
          soundEnabled = true;
        } else {
          btnSoundSettings.textContent = 'OFF';
          btnSoundSettings.setAttribute('data-status', 'off');
          btnSoundSettings.parentElement.classList.remove('settings-on');
          btnSoundSettings.parentElement.classList.add('settings-off');
          soundEnabled = false;
        }
      });

      document.addEventListener('keydown', function(event) {
        if (soundEnabled) {
          switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'w':
            case 'a':
            case 's':
            case 'd':
            case 'W':
            case 'A':
            case 'S':
            case 'D':
              playSound();
              break;
            default:
              break;
          }
        }
      });
    </script>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const clearBtn = document.getElementById('clearBtnTrigger');

        clearBtn.addEventListener('click', function() {
          localStorage.removeItem('bestScore');
          location.reload();
        });
      });
    </script>

    <script>
      (function() {
        let moveCount = 0;

        function updateMoveCount() {
          moveCount++;
          document.getElementById('moveCount').textContent = moveCount;
        }

        document.addEventListener('keydown', function(event) {
          if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'ArrowDown' || event.key === 's' ||
            event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'ArrowRight' || event.key === 'd') {
            updateMoveCount();
          }
        });

        const restartBtnTrigger = document.getElementById('restartBtnTrigger');

        restartBtnTrigger.addEventListener('click', function() {
          moveCount = 0; 
          document.getElementById('moveCount').textContent = moveCount;
        });
      })();
    </script>

    <script src="js/keyboard_input_manager.js"></script>

    <script>
      const settingsModal = document.getElementById('settingsModal');
      const settingsModalTrigger = document.getElementById('settingsModalTrigger');
      const settingsModalClose = document.querySelector('.settings-modal-close');

      function openModal() {
        settingsModal.style.display = 'block';
        settingsModal.style.animationName = 'slideIn';
        settingsModal.style.animationDuration = '0.5s';
        settingsModal.style.animationFillMode = 'forwards';
      }

      function closeModal() {
        settingsModal.style.animationName = 'slideOut';
        settingsModal.style.animationDuration = '0.5s';
        settingsModal.style.animationFillMode = 'forwards';

        setTimeout(() => {
          settingsModal.style.display = 'none';
        }, 500); 
      }

      function toggleModal() {
        if (settingsModal.style.display === 'block') {
          closeModal();
        } else {
          openModal();
        }
      }

      settingsModalTrigger.addEventListener('click', toggleModal);

      settingsModalClose.addEventListener('click', closeModal);
    </script>

    <script>
      document.addEventListener("DOMContentLoaded", function() {
        var btnThemeSettings = document.getElementById('btnThemeSettings');

        btnThemeSettings.addEventListener('click', function() {
          document.body.classList.toggle('dark-theme');

          if (document.body.classList.contains('dark-theme')) {
            btnThemeSettings.textContent = 'ON';
          } else {
            btnThemeSettings.textContent = 'OFF';
          }
        });
      });
    </script>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var favoriteIcon = document.getElementById('favoriteIcon');
        var pathParts = window.location.pathname.split('/');
        var id_game = pathParts[3];

        favoriteIcon.addEventListener('click', function() {
          var isAdded = favoriteIcon.classList.toggle('added');
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "request_check/check_favorites.php", true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.send("id_game=" + id_game + "&type=" + (isAdded ? 1 : 0));
        });
      });
    </script>

    <script>
      document.getElementById('customGridBtn').addEventListener('click', function() {
        const li = this.closest('li');
        const ul = li.querySelector('ul'); 

        if (li.classList.contains('show')) {
          li.classList.remove('show'); 
        } else {
          li.classList.add('show'); 
        }
      });
    </script>

    <script>
      const rankingsBtn = document.getElementById('rankingsBtn');
      const loadingScores = document.querySelector('.loading-scores');
      const scoreContent = document.getElementById('scoreContent');

      let isScoreContentVisible = false;

      rankingsBtn.addEventListener('click', () => {
        if (!isScoreContentVisible) {
          loadingScores.style.display = 'block';

          scoreContent.style.display = 'none';

          setTimeout(() => {
            loadingScores.style.display = 'none';
            scoreContent.style.display = 'block';
            isScoreContentVisible = true;
          }, 2000);
        } else {
          scoreContent.style.display = scoreContent.style.display === 'none' ? 'block' : 'none';
        }
      });
    </script>

    <script>
      document.addEventListener("DOMContentLoaded", function() {
        const btnTvSettings = document.getElementById('btnTvSettings');

        btnTvSettings.addEventListener('click', () => {
          const tileText = document.querySelectorAll('.tile-text');

          if (btnTvSettings.textContent === 'Visible') {
            btnTvSettings.textContent = 'Hidden';
            tileText.forEach(element => {
              element.style.display = 'none';
            });
          } else {
            btnTvSettings.textContent = 'Visible';
            tileText.forEach(element => {
              element.style.display = 'block';
            });
          }
        });
      });
    </script>

<?php
  }
} else {
  echo "No results found";
}
?>
<?php
include('includes/footer.php');
?>