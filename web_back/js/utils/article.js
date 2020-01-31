// 文章列表

var article = {
    // 获取
    get: function () {
        return $.get(APILIST.article_get)
    },
    // // 新增
    // add: function (name, slug) {
    //     return $.post(APILIST.article_add, { 'name': name, 'slug': slug })
    // },
    // // 删除
    // del:function (id) {
    //     return $.post(APILIST.article_del,{'id':id})
    // },
    // // 编辑
    // edit:function (id,name,slug) {
    //     return $.post(APILIST.article_edit,{'id':id,'name':name,'slug':slug})
    // }

}