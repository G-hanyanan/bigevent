// 文章列表

var article = {
    // 获取
    get: function (page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },
    // 热门排行
    rank:function () {
        return $.get(APILIST.article_rank)
    },
    /**
     * 5张焦点图 
     */
    hotImg:function (perpage) {
        return $.get(APILIST.article_search,{'perpage':5})
    },

    // 最新资讯
    lastest:function () {
        return $.get(APILIST.article_lastest)
    }

}