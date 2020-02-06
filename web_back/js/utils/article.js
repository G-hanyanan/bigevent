// 文章列表

var article = {
    // 获取
    get: function (page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },
    // 新增
    add: function (fd) {
        return $.ajax({
            url: APILIST.article_add,
            type: 'post',
            data: fd ,
            processData: false,
            contentType: false
        })
    },
    // 删除
    del: function (id) {
        return $.get(APILIST.article_del, { 'id': id })
    },
    // 通过id获取文章
    getById:function (id) {
        return $.get(APILIST.article_get,{'id':id})
    },
    // 编辑文章
    edit: function (fd) {
        return $.ajax({
            url: APILIST.article_edit,
            type: 'post',
            data: fd ,
            processData: false,
            contentType: false
        })
    },

}