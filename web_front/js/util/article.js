// 文章列表

const article = {
    // 获取
    getList: (type,page) => $.get(APILIST.article_get, {type,page}),

    // 热门排行
    rank:function (type) {
        return $.get(APILIST.article_rank,{type})
    },

    /**
     * 5张焦点图 
     */
    hotImg: perpage => $.get(APILIST.article_search,{'perpage':5}),

    // 最新资讯
    lastest: () => $.get(APILIST.article_lastest),

    // 文章详情
    getById: id => $.get(APILIST.article_info,{id})

}