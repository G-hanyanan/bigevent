var user = {
    login: function (name, password) {
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        })
    },
    logout: function () {
        return $.post(APILIST.user_logout)

    },
    logInfo: function () {
        return $.get(APILIST.user_Info)

    }
}