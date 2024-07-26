<?php
include ('includes/header.php');
?>

<div class="content-wrapper" id="contentWrapper" onclick="hideLivesearch()">
  <div class="content game-single" id="content">
    <div class="container-fluid mt-35 mb-25">
      <h2 class="title">Games</h2>
      <?php
      include ('block.php');
      ?>
      <div class="row text-center">
        <div class="col">
          <div class="load-more">
            <span class="bordered-button" id="loadMoreBtn">View More</span>
            <img src="/img/loading/loader-search.svg" alt="Loading" width="35">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-0 mt-15 mb-35">
        <div class="col-12">
          <div class="url-group special-links">
            <h2>Important Links:</h2>
            <a href="https://all2048.com/players">Top Players</a>
            <a href="https://all2048.com/players/junior">Junior League</a>
            <a href="https://all2048.com/players/bronze">Bronze League</a>
            <a href="https://all2048.com/players/silver">Silver League</a>
            <a href="https://all2048.com/players/gold">Gold League</a>
            <a href="https://all2048.com/players/platinum">Platinum League</a>
            <a href="https://all2048.com/players/diamond">Diamond League</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<script src="js/keyboard_input_manager.js"></script>
<?php
include ('includes/footer.php');
?>