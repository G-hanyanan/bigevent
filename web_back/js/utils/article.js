// 文章列表

const article = {
    // 获取
    get: (page, type, status) => $.get(APILIST.article_get, { page,  type, 'state': status }),

    // 新增
    add: fd => $.ajax({
            url: APILIST.article_add,
            type: 'post',
            data: fd ,
            processData: false,
            contentType: false
        }),

    // 删除
    del: id => $.get(APILIST.article_del, {  id }),

    // 通过id获取文章
    getById: id => $.get(APILIST.article_get,{id}),

    // 编辑文章
    edit: fd => $.ajax({
            url: APILIST.article_edit,
            type: 'post',
            data: fd ,
            processData: false,
            contentType: false
        }),

}