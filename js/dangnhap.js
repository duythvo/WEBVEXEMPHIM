$(document).ready(function () {
    $('#btnLogin').click(function(e) {
        const userData = JSON.parse(localStorage.getItem("userInfor"));
        var getLoginName = userData.username;
        var loginName = $('#loginName').val();
        const getLoginPass = userData.password;
        var loginpassword = $('#loginPassword').val();
        if (loginName != '') {
            if (loginName !== getLoginName){
                $('#errLogName').text('Tên đăng nhập không tồn tại !!!');
                e.preventDefault();
            }
            else {
                $('#errLogName').text('');
                if (getLoginPass === loginpassword) {
                    $('#errLogPass').text('')
                }
                else if (loginpassword == '') {
                    $('#errLogPass').text('Vui lòng nhập mật khẩu !!!');
                    e.preventDefault();
                }
                else {
                    $('#errLogPass').text('Mật khẩu bị sai !!!');
                    e.preventDefault();
                }
            }
        }
        else {
            $('#errLogName').text('Vui lòng nhập tên đăng nhập !!!');
            e.preventDefault();
        }
    })
})

