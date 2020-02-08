// 文章分类

const category = {
    // 获取
    get: () => $.get(APILIST.category_get),

    // 新增
    add: (name, slug) => $.post(APILIST.category_add, {  name, slug }),

    // 删除
    del: id => $.post(APILIST.category_del,{id}),

    // 编辑
    edit: (id,name,slug) => $.post(APILIST.category_edit,{id, name, slug})

}