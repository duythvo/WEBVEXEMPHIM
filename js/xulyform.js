// Hàm kiểm tra họ và tên
function checkName() {
    const regexName = /^(?:\p{Lu}\p{Ll}*\s*){1,}$/u;
    var name = $('#name').val();

    if ($.trim(name) === '') {
        $('#errName').text('Yêu cầu nhập họ và tên');
        return false;
    }
    else{
        if (regexName.test(name) == false) {
            $('#errName').text('Họ tên cần ít nhất 2 từ, mỗi từ phải ghi hoa chữ đầu tiên và có dấu'); 
            return false;
        }
        else{
            $('#errName').text('');
            return true
        }
    }
}
$('#name').blur(function(e) {
    checkName();
});

// Hàm kiểm tra ngày sinh
function checkDate() {
    var bd = $('#birthdate').val();
    var today = new Date();
    var birthday = new Date(bd)
    var age = today.getFullYear() - birthday.getFullYear();
    var month = today.getMonth() - birthday.getMonth();
    if (bd === ""){
        $('#errBirthdate').text('yêu cầu Nhập tuổi');
        return false;
    }
    else{
        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
            age --;
        }
        if (age < 18) {
            $('#errBirthdate').text('Bạn chưa đủ 18 tuổi');
            return false;
        }
        else {
            $('#errBirthdate').text('');
            return true;
        }
    }

}
$('#birthdate').blur(function(e) {
    checkDate();
});

// Hàm kiểm tra số điện thoại
function checkPhone() {
    const regexPhone = /^(096|097|098|086)\d{7}$/;
    var phone = $('#phone').val();

    if ($.trim(phone) === '') {
        $('#errPhone').text('Yêu cầu nhập số điện thoại');
        return false;
    }
    else{
        if (regexPhone.test(phone) === false) {
            $('#errPhone').text('Số điện thoại gồm 10 số, bao gồm 3 số đầu là 096, 097, 098, 086');
            return false; 
        }
        else{
            $('#errPhone').text('');
            return true;
        }
    }
}
$('#phone').blur(function(e) {
    checkPhone();
});

// Hàm kiểm tra cccd/cmnd
function checkCc() {
    const regexCc = /^\d{12}$/;
    var cc = $('#cc').val();

    if ($.trim(cc) === '') {
        $('#errCc').text('Yêu cầu nhập số CCCD/CMND');
        return false; 
    }
    else{
        if (regexCc.test(cc) === false) {
            $('#errCc').text('số CCCD/CMND không đúng định dạng');   
            return false;  
        }
        else{

            $('#errCc').text('');
            return true;
        }
    }
}
$('#cc').blur(function(e) {
    checkCc();
});

// Hàm kiểm tra email
function checkMail() {
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var email = $('#email').val();

    if ($.trim(email) === '') {
        $('#errMail').text('Yêu cầu nhập email');
        return false; 
    }
    else{
        if (regexMail.test(email) == false) {
            $('#errMail').text('Email không đúng định dạng');    
            return false; 
        }
        else {
            $('#errMail').text(''); 
            return true; 
        }
    }
}
$('#email').blur(function(e) {
    checkMail();
});

// Hàm kiểm tra tên đăng nhập
function checkUsername() {
    const regexUsername = /^[a-zA-Z][a-zA-Z0-9]{3,}$/;
    var username = $('#username').val();

    if ($.trim(username) === '') {
        $('#errUsername').text('Yêu cầu nhập tên đăng nhập');
        return false; 
    }
    else{
        if (regexUsername.test(username) == false) {
            $('#errUsername').text('Tên đăng nhập phải ít nhất 4 kí tự, kí tự đầu là chữ và chuỗi không chứa kí tự đặc biệt'); 
            return false;   
        }
        else {
            $('#errUsername').text('');
            return true;
        }
    }
}
$('#username').blur(function(e) {
    checkUsername();
});

// Hàm kiểm tra mật khẩu 
function checkPassword() {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    var password = $('#password').val();

    if ($.trim(password) === '') {
        $('#errPassword').text('Yêu cầu nhập mật khẩu');
        return false; 
    }
    else{
        if (regexPassword.test(password) === false) {
            $('#errPassword').text('Mật khẩu không đúng định dạng');
            return false;
        }
        else{
            $('#errPassword').text('');
            return true; 
        }
    }
}
$('#password').blur(function(e) {
    checkPassword();
});

//Hàm kiểm tra nhập lại mật khẩu
function checkRepassword() {
    var password = $('#password').val();
    var repassword = $('#repassword').val();

    if ($.trim(repassword) === '' && $.trim(password) !== '' && checkPassword() == true) {
        $('#errRepassword').text('Yêu cầu nhập lại mật khẩu');
        return false; 
    }
    else{
        $('#errRepassword').text('');
        return true;
    }
}
$('#repassword').blur(function(e) {
    checkRepassword();
});

// Hàm kiểm tra mật khẩu trùng khớp
function checkSamePassword() {
    var password = $('#password').val();
    var repassword = $('#repassword').val();

    if (password !== repassword) {
        $('#errRepassword').text('Mật khẩu không trùng khớp');
        return false; 
    } 
    else if (password === '' || repassword === '') {
        $('#errRepassword').text('');
    }
    else {
        $('#errRepassword').text('');
        return true;
    }
}

// Hàm kiểm tra đồng ý với điều khoản
function checkPolicyAgree() {
    if (!$('#check').prop('checked')) {
        $('#errCheckbox').text('Bạn cần đồng ý với điều khoản');
        return false; 
    } else {
        $('#errCheckbox').text('');
        return true;
    }
}
$('#check').blur(function(e) {
    checkPolicyAgree();
});

$(document).ready(function() {
    $('#btnRegister').click(function(e){
        var allConditionsPassed = checkName() && checkDate() && checkPhone() && checkCc() && checkMail() && checkUsername() 
                                    && checkPassword() && checkRepassword() && checkSamePassword() && checkPolicyAgree();                  
        if (allConditionsPassed)    
        {
            var name = $('#name').val();
            // var bd = $('#birthdate').val(); --> cailon này khiến t bug mất mẹ 2 ngày 
            var phone = $('#phone').val();
            var cc = $('#cc').val();
            var email = $('#email').val();
            var username = $('#username').val();
            var password = $('#password').val();
  
            const userInfor = {
                name: name,
                phone: phone,
                cc: cc,
                email: email,
                username: username,
                password: password,
            };
            localStorage.setItem("userInfor", JSON.stringify(userInfor))
        }
        else{
            e.preventDefault();
            checkName(); 
            checkPhone(); 
            checkDate();
            checkCc(); 
            checkMail(); 
            checkUsername(); 
            checkPassword(); 
            checkRepassword(); 
            checkSamePassword(); 
            checkPolicyAgree();
        }
    });  
});
