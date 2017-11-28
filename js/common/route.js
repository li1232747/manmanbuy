;(function( window ){

    var Route = {
        baseUrl: 'http://127.0.0.1:9090/api/',

        // 主页获取数据
        getindex: getindex,
    };


    /* 获取主页菜单栏数据 */
    function getindex( url, callback ){
        var url1 = Route.baseUrl + url;
        $.ajax({
            type: 'get',
            url: url1,
            dataType: 'json',
            success: function ( info ){
                callback && callback( info );
            }
        });
    }


    // 暴露给全局
    window.Route = Route;
})( window );