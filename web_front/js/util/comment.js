// 关于评论
var comment = {
    // 最新评论
    // new_cmt:function () {
    //     return $.get(APILIST.comment_news)
    // },

    // 获取评论
    get:function (id) {
        return $.get(APILIST.comment_get,{id:id})
    },
    // 添加评论
    add:function (name,content,id) {
        return $.post(APILIST.comment_add,{name:name,content:content,article_id:id})
    }
}