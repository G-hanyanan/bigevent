// 文章列表

var article = {
    // 获取
    getList: function (type,page) {
        return $.get(APILIST.article_get, {'type': type,'page':page})
    },
    // 热门排行
    rank:function (type) {
        return $.get(APILIST.article_rank,{'type':type})
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
    },

    // 文章详情
    getById:function (id) {
        return $.get(APILIST.article_info,{'id':id})        
    }

}