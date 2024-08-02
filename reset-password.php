<?php
include('includes/header.php');
if (!isset($_SESSION['user'])) {
    // Người dùng chưa đăng nhập, bạn có thể điều hướng họ đến trang đăng nhập
    header("Location: login");
    exit;
}
?>

<?php
$error_message_pass = "";
$error_message_re_pass = "";
$success_message = "";
if (isset($_POST['reset'])) {

    $valid = 1;
    

    
    if( empty($_POST['new_password']) || empty($_POST['new_password_confirmation']) ) {
        $valid = 0;
        $error_message_pass .= "Xin hãy nhập mật khẩu<br>";
    }
    
    if( !empty($_POST['new_password']) && !empty($_POST['new_password_confirmation']) ) {
        if($_POST['new_password'] != $_POST['new_password_confirmation']) {
            $valid = 0;
            $error_message_pass .= "Xác nhận mật khẩu thất bại<br>";
        }
    }

    if(md5($_POST['old_password']) != $_SESSION['user']['pass_user']) {
        $valid = 0;
        $error_message_pass .= "Mật khẩu không chính xác<br>";
    }
    

    if($valid == 1) {

        $datetime_user = date('Y-m-d H:i:s');

        $statement = $pdo->prepare("UPDATE users SET pass_user = ? WHERE id_user = ?");
        $statement->execute([md5($_POST['new_password']), $_SESSION['user']['id_user']]);

        $success_message = "It was successful";
    }
}
?>

<div class="content-wrapper" id="contentWrapper" >
    <div class="content page-user-dashboard" id="content" style="min-height: calc(100vh - 168px);">
        <div class="container-fluid">
            <div class="auth-page">
                <h1>Reset Password</h1><br>
                <form method="POST" action="reset-password"> <input type="hidden" name="_token" value="NgbCxOdeDV5UyokePNPu5FpMQ8AP4qpcQIcicdrr">
                    <div class="form-group row"> <label for="old_password" class="col-md-4 col-form-label text-md-right">Old Password</label>
                        <div class="col-md-6"> <input id="old_password" type="password" class="form-control " name="old_password" value="" required=""> </div>
                        <?php if ($error_message_pass != '') {
                            echo "<div class='text-error'>". $error_message_pass . "</div>";
                        } ?>
                    </div>
                    <div class="form-group row"> <label for="new_password" class="col-md-4 col-form-label text-md-right">New Password</label>
                        <div class="col-md-6"> <input id="new_password" type="password" class="form-control " name="new_password" value="" required=""> </div>
                    </div>
                    <div class="form-group row"> <label for="new_password_confirmation" class="col-md-4 col-form-label text-md-right">Confirm New Password</label>
                        <div class="col-md-6"> <input id="new_password_confirmation" type="password" class="form-control " name="new_password_confirmation" value="" required="">
                            <?php if ($error_message_re_pass != '') {
                                echo "<div class='text-error'>". $error_message_re_pass . "</div>";
                            } ?>
                        </div>
                    </div>
                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4"> <button type="submit" class="btn btn-primary" name="reset">Reset</button> </div>
                    </div>
                </form>
                <?php if ($success_message != '') {
                    echo "<div class='text-success'>". $success_message . "</div>";
                } ?>
            </div>
        </div>
    </div>
</div>

<?php
include('includes/footer.php');
?>