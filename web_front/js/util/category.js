// 文章分类

var category = {
    // 获取
    get: function () {
        return $.get(APILIST.category_get)
    },
    // 热门排行
    rank:function () {
        return $.get(APILIST.category_rank)
    },
    hotImg:function (perpage) {
        return $.get(APILIST.category_search,{'perpage':perpage})
    }

}