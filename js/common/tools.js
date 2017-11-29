;(function(window){
    // 获取地址栏参数
    var tools = {
        getSearchObj: function () {
            // 获取地址栏参数,并将代码解码
            var search = decodeURI(location.search);

            search = search.slice(1);

            var obj = {};

            var arr = search.split('&');
            arr.forEach(function (v) {
                var key = v.split('=')[0];
                var value = v.split('=')[1];
                obj[key] = value;
            });

            return obj;
        },

        getSearch: function (key) {
            return this.getSearchObj()[key];
        }
    };

    window.tools = tools;
})( window );