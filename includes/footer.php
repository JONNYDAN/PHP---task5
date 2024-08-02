<footer class="footer" id="footerContent">
    <div class="footer-inner">
        <div class="container-fluid">
            <div class="row">
                <div class="quick-links col-12">
                    <a href="dashboard">Dashboard</a>
                    <a href="favorite-games">Favorites</a>
                    <a href="followers">Followers</a>
                    <a href="following">Following</a>
                    <a href="create-game">Create</a>
                </div>
            </div>
            <div class="row">
                <div class="quick-links col-12">
                    <a href="#">About</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms and conditions</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="confirmModal" class="confirm-modal">
    <div class="confirm-modal-content">
        <div class="confirm-modal-header">
            <span class="confirm-modal-close">&times;</span>
            <p>Warning!</p>
        </div>
        <div class="confirm-modal-body" id="confirmModalBody">
            <p>Are you sure?</p>
        </div>
        <div class="confirm-modal-footer">
            <a href="javascript:void(0);" class="cancel-button" id="cancelBtn" role="button">Cancel</a>
            <a href="javascript:void(0);" class="restart-button" id="btnRestartGame" role="button">Yes</a>
            <a href="javascript:void(0);" class="reset-settings-button" id="btnResetSettings" role="button">Yes</a>
            <a href="javascript:void(0);" class="clear-data-button" id="btnClearGameData" role="button">Yes</a>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const searchInput = document.getElementById('searchInput');
        const resultsDiv = document.getElementById('livesearch');

        // Show results when focusing on the search input
        searchInput.addEventListener('focus', () => {
            resultsDiv.style.display = 'block';
        });

        // Hide results when clicking outside of the search input or results
        document.addEventListener('click', (event) => {
            if (!searchInput.contains(event.target) && !resultsDiv.contains(event.target)) {
                resultsDiv.style.display = 'none';
            }
        });
    });
</script>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/index.js"></script>

<script src="js/bind_polyfill.js"></script>
<script src="js/classlist_polyfill.js"></script>
<script src="js/animframe_polyfill.js"></script>
<script src="js/html_actuator.js"></script>
<script src="js/grid.js"></script>
<script src="js/tile.js"></script>
<script src="js/local_storage_manager.js"></script>
<script src="js/game_manager.js"></script>
<script src="js/application.js"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<script>
    const burgWrapper = document.getElementById('burgWrapper');
    const burgIcon = document.getElementById('burgIcon');
    const headerNavWrapper = document.getElementById('headerNavWrapper');

    burgWrapper.addEventListener('click', (event) => {
        if (headerNavWrapper.classList.contains('nav-shown')) {
            headerNavWrapper.classList.remove('nav-shown'); // Loại bỏ lớp 'show' để ẩn danh sách
            burgIcon.classList.remove('activeBurg');
        } else {
            headerNavWrapper.classList.add('nav-shown'); // Thêm lớp 'show' để hiển thị danh sách
            burgIcon.classList.add('activeBurg');
        }
    })
</script>
<!-- <script src="js/app.js"></script> -->
</body>

</html>