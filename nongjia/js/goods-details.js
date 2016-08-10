//图片预览及放大镜

//鼠标经过预览图片函数
function preview(img) {
    $("#spec-n1 .jqzoom img").attr("src", $(img).attr("src"));
    $("#spec-n1 .jqzoom img").attr("jqimg", $(img).attr("bimg"));
}
//图片放大镜效果
$(function () {
    $(".jqzoom").jqueryzoom({ xzoom: 380, yzoom: 410 });
});

//图片预览小图移动效果,页面加载时触发
$(function () {
    var tempLength = 0; //临时变量,当前移动的长度
    var viewNum = 5; //设置每次显示图片的个数量
    var moveNum = 2; //每次移动的数量
    var moveTime = 300; //移动速度,毫秒
    var scrollDiv = $(".spec-items ul"); //进行移动动画的容器
    var scrollItems = $(".spec-items ul li"); //移动容器里的集合
    var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
    var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度

    //下一张
    $(".pro-list .next").bind("click", function () {
        if (tempLength < countLength) {
            if ((countLength - tempLength) > moveLength) {
                scrollDiv.animate({ left: "-=" + moveLength + "px" }, moveTime);
                tempLength += moveLength;
            } else {
                scrollDiv.animate({ left: "-=" + (countLength - tempLength) + "px" }, moveTime);
                tempLength += (countLength - tempLength);
            }
        }
    });
    //上一张
    $(".pro-list .pre").bind("click", function () {
        if (tempLength > 0) {
            if (tempLength > moveLength) {
                scrollDiv.animate({ left: "+=" + moveLength + "px" }, moveTime);
                tempLength -= moveLength;
            } else {
                scrollDiv.animate({ left: "+=" + tempLength + "px" }, moveTime);
                tempLength = 0;
            }
        }
    });
});


//jQuery方法实现购物车数量的加减
$(function () {
    var num = $("#buy-num");
    $(".btn-add").click(function () {
        num.val(parseInt(num.val()) + 1);
    })
    $(".btn-reduce").click(function () {
        if (parseInt(num.val()) > 1) {
            num.val(parseInt(num.val()) - 1);
        }
    })
})


//$(function () {
//    $("#fitting-suit #fitting-con .stab>li>a").click(function () {
//        $(this).siblings("li").removeClass("#fitting-suit .stab .scurr");
//        $(this).addClass("#fitting-suit .stab .scurr");
//    })
//})

//滚动导航不成功
//$(function () {
//    var nav = $("#product-detail>.mt");  //得到导航对象
//    var win = $(window); //得到窗口对象
//    var doc = $(document); //得到document文档对象
//    win.scroll(function () {
//        if (doc.scrollTop() >= nav.offset().top) {
//            nav.addClass("fixednav");
//            $(".empty-placeholder").removeClass("hidden");
//        } else {
//            nav.removeClass("fixednav");
//            $(".empty-placeholder").addClass("hidden");
//        }
//    })
//})

$(function () {
    $(window).on("scroll",function (e) {
        if ($(document).scrollTop() >= $("#product-detail>.mt").offset().top) {
            $("#product-detail>.mt").addClass("fixednav");
            $(".empty-placeholder").removeClass("hidden");
        } else {
            $("#product-detail>.mt").removeClass("fixednav");
            $(".empty-placeholder").addClass("hidden");
        }
    })
})



