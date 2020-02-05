// 所有接口的基地址

var BASEURL = 'http://localhost:8000'
// var BASEURL = 'http://192.168.1.106:8000'

// 所有子接口

var APILIST = {
    // 用户登录接口
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_Info: BASEURL + '/admin/getuser',

    // 文章类别管理接口
    // 显示
    category_get: BASEURL + '/admin/category_search',
    // 新增
    category_add: BASEURL + '/admin/category_add',
    // 删除‘
    category_del: BASEURL + '/admin/category_delete',
    // 编辑
    category_edit: BASEURL + '/admin/category_edit',

    // 文章列表接口
    // 获取
    article_get:BASEURL + '/admin/search',
    // 删除
    article_del:BASEURL + '/admin/article_delete',
    // 发布文章
    article_add:BASEURL + '/admin/article_publish',

}