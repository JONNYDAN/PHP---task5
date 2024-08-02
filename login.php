<?php
include ('includes/header.php');
?>

<div class="content-wrapper" id="contentWrapper">
    <div class="content" id="content">
        <div class="container-fluid">
            <div class="auth-page log-reg-page login-page">
                <div class="auth-type">
                    <h1>Login</h1>
                    <h2>
                        <a href="register">Register</a>
                    </h2>
                </div>
                <form method="POST" action="login" id="form-login">
                    <?php $csrf->echoInputField(); ?>
                    <input type="hidden" name="_token" value="644PVrg1q2tDmBLX16zyVp2CRoA5EEdIEwV3bUl4">
                    <div class="form-group row">
                        <div class="col-md-12 col-form-label">
                            <label for="email">E-Mail</label>
                        </div>
                        <div class="col-md-12">
                            <input id="email" type="email" class="form-control " name="email_user" value="<?php if (isset($_POST['email_user'])) {
                                echo $_POST['email_user'];
                            } ?>" required autocomplete="email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 col-form-label">
                            <label for="password">Password</label>
                        </div>
                        <div class="col-md-12">
                            <input id="password" type="password" class="form-control " name="pass_user" value="<?php if (isset($_POST['pass_user'])) {
                                echo $_POST['pass_user'];
                            } ?>" required autocomplete="current-password">
                        </div>
                    </div>
                    <div class="form-group row mb-0 submit-btn">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary" onclick="checkValueLogin()">Login </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php
include ('includes/footer.php');
?>