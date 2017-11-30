;
( function( window ) {

    var Route = {
        baseUrl: 'http://127.0.0.1:9090/api/',

        // 主页获取数据
        getindex: getindex,

        // 获取分类标题
        getcategorytitle: getcategorytitle,

        // 获取分类列表
        getcategory: getcategory,

        // 获取分类名称
        getcategorybyid: getcategorybyid,

        // 获取分类列表
        getproductlist: getproductlist,

        // 获取商品详情
        getproduct: getproduct,

        // 获取商品评论
        getproductcom: getproductcom,

        // 获取省钱控商品列表
        getmoneyctrl: getmoneyctrl,

        // 获取折扣商品详情
        getmoneyctrlproduct: getmoneyctrlproduct,

        // 获取国内折扣商品列表
        getinlanddiscount: getinlanddiscount,

        // 获取国内折扣商品详情
        getdiscountproduct: getdiscountproduct,

        // 获取白菜价标题
        getbaicaijiatitle: getbaicaijiatitle,

        // 获取白菜价商品列表
        getbaicaijiaproduct: getbaicaijiaproduct,

        // 获取优惠券标题
        getcoupon: getcoupon,

        // 获取优惠券列表
        getcouponproduct: getcouponproduct,
    };


    /* 获取主页菜单栏数据 */
    function getindex( url, callback ) {
        var url1 = Route.baseUrl + url;
        $.ajax( {
            type: 'get',
            url: url1,
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 获取分类标题
    function getcategorytitle( callback ) {
        var url1 = Route.baseUrl + 'getcategorytitle';
        $.ajax( {
            type: 'get',
            url: url1,
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 获取分类列表
    function getcategory( data, callback ) {
        var url1 = Route.baseUrl + 'getcategory';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                titleid: data
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 获取分类名称
    function getcategorybyid( categoryid, callback ) {
        var url1 = Route.baseUrl + 'getcategorybyid';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                categoryid: categoryid
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 获取商品列表
    function getproductlist( categoryid, pageid, callback ) {
        var url1 = Route.baseUrl + 'getproductlist';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                categoryid: categoryid,
                pageid: pageid
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 获取商品详细信息
    function getproduct( productid, callback ) {
        var url1 = Route.baseUrl + 'getproduct';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                productid: productid,
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 获取商品评论
    function getproductcom( productid, callback ) {
        var url1 = Route.baseUrl + 'getproductcom';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                productid: productid,
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 省钱控商品列表
    function getmoneyctrl( pageid, callback ) {
        var url1 = Route.baseUrl + 'getmoneyctrl';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                pageid: pageid,
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 折扣商品详情
    function getmoneyctrlproduct( productid, callback ) {
        var url1 = Route.baseUrl + 'getmoneyctrlproduct';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                productid: productid,
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 国内折扣商品列表
    function getinlanddiscount( callback ) {
        var url1 = Route.baseUrl + 'getinlanddiscount';
        $.ajax( {
            type: 'get',
            url: url1,
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 国内折扣商品详情
    function getdiscountproduct( productid, callback ) {
        var url1 = Route.baseUrl + 'getdiscountproduct';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                productid: productid
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 白菜价标题
    function getbaicaijiatitle( callback ) {
        var url1 = Route.baseUrl + 'getbaicaijiatitle';
        $.ajax( {
            type: 'get',
            url: url1,
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 国内折扣商品详情
    function getbaicaijiaproduct( titleid, callback ) {
        var url1 = Route.baseUrl + 'getbaicaijiaproduct';
        $.ajax( {
            type: 'get',
            url: url1,
            data: {
                titleid: titleid
            },
            dataType: 'json',
            success: function( info ) {
                callback && callback( info );
            }
        } );
    }

    // 优惠券标题
    function getcoupon(callback) {
        var url1 = Route.baseUrl + 'getcoupon';
        $.ajax({
            type: 'get',
            url: url1,
            dataType: 'json',
            success: function (info) {
                callback && callback(info);
            }
        });
    }

    // 优惠券列表
    function getcouponproduct(couponid, callback) {
        var url1 = Route.baseUrl + 'getcouponproduct';
        $.ajax({
            type: 'get',
            url: url1,
            data: {
                couponid: couponid
            },
            dataType: 'json',
            success: function (info) {
                callback && callback(info);
            }
        });
    }

    // 暴露给全局
    window.Route = Route;
} )( window );