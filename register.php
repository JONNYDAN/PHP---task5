<?php
include ('includes/header.php');
?>

<?php
$success_message = "";
$error_message_username = "";
$error_message_email = "";
$error_message_pass = "";
$error_message_re_pass = "";
if (isset($_POST['email_user'])) {

    $datetime_user = date('Y-m-d H:i:s');

    $statement = $pdo->prepare("INSERT INTO tables_user (
                                        name_user,
                                        email_user,
                                        pass_user,
                                        datetime_user
                                    ) VALUES (?,?,?,?)");
    $statement->execute(
        array(
            strip_tags($_POST['name_user']),
            strip_tags($_POST['email_user']),
            md5($_POST['pass_user']),
            $datetime_user
        )
    );
    http_response_code(200);

    exit;
}
?>
<div class="content-wrapper" id="contentWrapper">
    <div class="content" id="content">
        <div class="container-fluid">
            <div class="auth-page log-reg-page register-page">
                <div class="auth-type">
                    <h2>
                        <a href="login.php">Login</a>
                    </h2>
                    <h1>Register</h1>
                </div>
                <form method="POST" action="register.php" id="form-register">
                    <?php $csrf->echoInputField(); ?>
                    <input type="hidden" name="_token" value="i9bF377BA4n5ZI4E45xRBW3XNt2yEfpREXIbNsGv">
                    <div class="form-group row">
                        <div class="col-md-12 col-form-label">
                            <label for="name_user">Username</label>
                        </div>
                        <div class="col-md-12">
                            <input id="name_user" type="text" class="form-control " name="name_user"
                                value="<?php if (isset($_POST['name_user'])) {
                                    echo $_POST['name_user'];
                                } ?>" required
                                autocomplete="name_user" spellcheck="false">
                            <p class="input-info" id="usernameInfoEl">&nbsp;</p>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 col-form-label">
                            <label for="email_user">E-Mail</label>
                        </div>
                        <div class="col-md-12">
                            <input id="email_user" type="email_user" class="form-control " name="email_user"
                                value="<?php if (isset($_POST['email_user'])) {
                                    echo $_POST['email_user'];
                                } ?>" required
                                autocomplete="email_user">
                            <p class="input-info" id="emailInfoEl">&nbsp;</p>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 col-form-label">
                            <label for="pass_user">Password</label>
                        </div>
                        <div class="col-md-12">
                            <div class="password-input-container">
                                <input id="password_signup" type="password" class="form-control " name="pass_user"
                                    value="<?php if (isset($_POST['pass_user'])) {
                                        echo $_POST['pass_user'];
                                    } ?>" placeholder="Nhập mật khẩu">
                                <span class="password-visibility-btn" id="toggle_signup"
                                    onclick="togglePasswordVisibilitySignup()">Hide</span>
                            </div>
                            <p class="input-info" id="passwordInfoEl">&nbsp;</p>
                        </div>
                    </div>
                    <div class="form-group row mb-0 submit-btn">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-primary" onclick="checkValueSignup()">Register
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>

<script>
    function togglePasswordVisibilitySignup() {

        var passwordField = document.getElementById("password_signup");
        var toggleIcon = document.querySelector("#toggle_signup");

        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }
</script>



<?php
include ('includes/footer.php');
?>