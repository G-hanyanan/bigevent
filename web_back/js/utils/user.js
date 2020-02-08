const user = {
    login: (user_name, password) => $.post(APILIST.user_login, {user_name,password}),

    logout: () => $.post(APILIST.user_logout),

    logInfo: () => $.get(APILIST.user_Info)
}