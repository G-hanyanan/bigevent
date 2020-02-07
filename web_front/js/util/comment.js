// 关于评论
var comment = {
    // 最新评论
    // new_cmt:function () {
    //     return $.get(APILIST.comment_news)
    // }

    // 获取评论
    get:function (id) {
        return $.get(APILIST.comment_get,{id:id})
    }
}