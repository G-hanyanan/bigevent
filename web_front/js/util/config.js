// 所有接口的基地址

var BASEURL = 'http://localhost:8000'
// var BASEURL = 'http://192.168.1.106:8000'
// var BASEURL = 'http://39.99.130.170:8000'

// 所有子接口

var APILIST = {
    // 文章类别管理接口
    // 显示
    category_get: BASEURL + '/category',
    
    
    // 文章列表接口
    // 获取
    article_get:BASEURL + '/admin/search',
    
    // 文章热门排行
    article_rank:BASEURL + '/rank',

    // 热门文章图片说明
    article_search:BASEURL + '/search',

    // 最新资讯
    article_lastest:BASEURL + '/lastest',




}