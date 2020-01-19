var category = {
    category_get: function () {
        return $.get(APILIST.category_get)
    },

    category_add: function (name,slug) {
        return $.post(APILIST.category_add,{'name':name,'slug':slug})
    }

}