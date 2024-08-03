<?php
include ('includes/header.php');
?>

<div class="content-wrapper" id="contentWrapper">
  <div class="content game-single" id="content" style="min-height: calc(100vh - 168px);">
    <div class="container-fluid mt-35 mb-25">
      <h2 class="title">Games</h2>
      <?php
      include ('block.php');
      ?>
      <div class="row text-center">
        <div class="col">
          <div class="load-more">
            <img src="/img/loading/loader-search.svg" alt="Loading" width="35">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<?php
include ('includes/footer.php');
?>