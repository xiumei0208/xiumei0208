//ͼƬԤ�����Ŵ�

//��꾭��Ԥ��ͼƬ����
function preview(img) {
    $("#spec-n1 .jqzoom img").attr("src", $(img).attr("src"));
    $("#spec-n1 .jqzoom img").attr("jqimg", $(img).attr("bimg"));
}
//ͼƬ�Ŵ�Ч��
$(function () {
    $(".jqzoom").jqueryzoom({ xzoom: 380, yzoom: 410 });
});

//ͼƬԤ��Сͼ�ƶ�Ч��,ҳ�����ʱ����
$(function () {
    var tempLength = 0; //��ʱ����,��ǰ�ƶ��ĳ���
    var viewNum = 5; //����ÿ����ʾͼƬ�ĸ�����
    var moveNum = 2; //ÿ���ƶ�������
    var moveTime = 300; //�ƶ��ٶ�,����
    var scrollDiv = $(".spec-items ul"); //�����ƶ�����������
    var scrollItems = $(".spec-items ul li"); //�ƶ�������ļ���
    var moveLength = scrollItems.eq(0).width() * moveNum; //����ÿ���ƶ��ĳ���
    var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //�����ܳ���,�ܸ���*��������

    //��һ��
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
    //��һ��
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


//jQuery����ʵ�ֹ��ﳵ�����ļӼ�
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

//�����������ɹ�
//$(function () {
//    var nav = $("#product-detail>.mt");  //�õ���������
//    var win = $(window); //�õ����ڶ���
//    var doc = $(document); //�õ�document�ĵ�����
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



