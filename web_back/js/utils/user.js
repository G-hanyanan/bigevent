var user = {
    login: function (name, password) {
        $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        }).then(function (res) {
            if (res.code === 200) {
                //    alert('登录成功') 
                window.location.href = './index.html'
            } else {
                alert(res.msg)
            }
        })
    },
    logout: function () {
        $.post(APILIST.user_logout)
            .then(function (res) {
                if (res.code === 200) {
                    window.location.href = './login.html'
                } else {
                    alert(res.msg)
                }
            })
    },
    logInfo: function () {
        $.get(APILIST.user_Info)
            .then(function (res) {
                if (res.code === 200) {
                    $("#userName").text(res.data.nickname);
                    $(".user_pic").attr('src', res.data.user_pic)
                } else {
                    alert(res.msg)
                }

            })
    }
}