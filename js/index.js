function checkValueSignup() {
    var form_signup = $('#form-register');
    var name_user = form_signup.find('#name_user').val();
    var email_user = form_signup.find('#email_user').val();
    var pass_user = form_signup.find('#password_signup').val();

    if (!name_user.trim()) {
        alert("Xin hãy nhập tên người dùng");
        return;
    }

    if (!email_user.trim()) {
        alert("Xin hãy nhập Email");
        return;
    }

    if (!pass_user.trim()) {
        alert("Xin hãy nhập mật khẩu");
        return;
    }

    if (!validateEmail(email_user)) {
        alert("Địa chỉ email không hợp lệ");
        return;
    }

    if (!validatePassword(pass_user)) {
        alert("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt");
        return;
    }

    $.ajax({
        url: 'request_check/check_email_signup.php', 
        method: 'POST',
        data: { email_user: email_user },
        success: function (response) {
            if (response === "true") {
                alert("Địa chỉ email đã tồn tại");
            } else {
                $.ajax({
                    url: 'register.php',    
                    method: 'POST',
                    data: {
                        name_user: name_user,
                        email_user: email_user,
                        pass_user: pass_user,
                    },
                    success: function (response, status, xhr) {
                        if (xhr.status === 200) {
                            alert("Đã đăng kí thành công!");
                            window.location.href = "login.php";
                        } else {
                            console.error('Error: Unexpected status code');
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error('AJAX Error:', error);
                    }
                });
            }
        },
        error: function (xhr, status, error) {
            console.error('AJAX Error:', error);
        }
    });

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
        return passwordRegex.test(password);
    }
}


function checkValueLogin() {
    var form_login = $('#form-login');
    var email_user = form_login.find('#email').val();
    var pass_user = form_login.find('#password').val();

    if (!email_user.trim()) {
        alert("Xin hãy nhập Email");
    } else {
        if (!pass_user.trim()) {
            alert("Xin hãy nhập mật khẩu");
        } else {
            $.ajax({
                url: 'request_check/check_email_login.php', // Đường dẫn tới file xử lý kiểm tra email
                method: 'POST',
                data: {
                    email_user: email_user,
                    pass_user: pass_user,
                },
                success: function (response) {
                    switch (response) {
                        case 'error_1':
                            alert("Tài khoản đăng nhập không hợp lệ.");
                            break;  
                        case 'error_2':
                            alert("Mật khẩu không chính xác.");
                            break;
                        default:
                            window.location.href = "";
                    }
                },
                error: function (xhr, status, error) {
                    console.error('AJAX Error:', error);
                }
            });
        }
    }

}
