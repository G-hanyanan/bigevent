// 关于评论
const comment = {
    // 最新评论
    // new_cmt:function () {
    //     return $.get(APILIST.comment_news)
    // },

    // 获取评论
    get: id => $.get(APILIST.comment_get,{id}),

    // 添加评论
    add: (name,content,id) => $.post(APILIST.comment_add,{
        name,
        content,
        'article_id':id})
}