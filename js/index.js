//下拉
$(function(){
	$(".dropdownmenu1").hover(function(){
		$(this).css("background","#cb5121"),
		$(".str1-dropdownmenu").slideDown();
	},function(){
		$(this).css("background","#ff662c"),
		$(".str1-dropdownmenu").slideUp("fast");
	});
	
});
$(function(){
	$(".dropdownmenu2").hover(function(){
		$(this).css("background","#cb5121"),
		$(".str2-dropdownmenu").slideDown();
	},function(){
		$(this).css("background","#ff662c"),
		$(".str2-dropdownmenu").slideUp("fast");
	});
	
});


/*
//图片轮播
var len=$(".slider-btn>li").length;
var index=0;  //图片序号
var adTimer;
$(".slider-btn li").mouseover(function(){
	index=$(".slider-btn li").index(this);  //获取鼠标悬浮li的index
	showImg(index);
}).eq(0).mouseover();
//划入停止动画，滑出开始动画
$(".picture").hover(function(){
	clearInterval(adTimer);
},function(){
	adTimer=setInerval(function(){
		showImg(index)
		index++;
		if(index==len){   //最后一张图片之后，转到第一张
			index=0;
		}
	},3000);
}),trigger("mouseleave");
function showImg(index){
	var adHeight=$(".picture>ul>li:first").height();
	$(".slider").stop(true,false).animate({
		"marginLeft":-adWidth*index+"px"  //改变marginTop属性的值达到轮播的效果
	},1000);
	$(".slider-btn li").removerClass("on")
	.eq(index).addClass("on");
}
*/


//图片轮播
var t =n=0,count;
$(document).ready(function(){
	count=$(".slider>li>a").length;
	$(".slider>li:not(:first-child)").hide();    //如果不是slider类的第一个li的a，就隐藏
	$(".slider-btn li").click(function(){
		var i=$(this).text()-1;   //获取li元素内的值，即1,2,3,4,5
		n=i;
		if(i>=count)return;
		$(".slider>li").filter(":visible").fadeOut(200).parent().children().eq(i).fadeIn(200);
		$(".slider-btn li").removeClass("on");   //移除其他btn的样式
		$(this).addClass("on");     //添加当前元素的样式
		
	});
	t=setInterval("showAuto()",3000);     //自动播放
	$(".picture").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval("showAuto()",3000);
	});
})
function showAuto(){
	n=n>=(count-1)?0:++n;
	$(".slider-btn li").eq(n).trigger("click");
}







//.st1-middle 的left部分上滑下滑
$(function(){
	$(".content .st1-middle .left .part1").hover(function(){
		$(".str1-dropdown").slideDown();
	},function(){
		$(".str1-dropdown").slideUp("fast");
	});
	
});
$(function(){
	$(".content .st1-middle .left .part2").hover(function(){
		$(".str2-dropdown").slideDown();
	},function(){
		$(".str2-dropdown").slideUp("fast");
	});
	
});


//表格部分
$(function(){
	$(".content .st1-middle .left .left-2 .project-table .item").hover(function(){
		$(this).css("background","rgba(80, 70, 70, 0.1)");
	},function(){
		$(this).css("background","#fcfcfc");
	});
	
});

//合作机构部分
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img1").hover(function(e){
		$(this).children("img").attr("src","images/tm.jpg");
	},function(){
		$(this).children("img").attr("src","images/tm-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img2").hover(function(e){
		$(this).children("img").attr("src","images/zcb.jpg");
	},function(){
		$(this).children("img").attr("src","images/zcb-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img3").hover(function(e){
		$(this).children("img").attr("src","images/jd.jpg");
	},function(){
		$(this).children("img").attr("src","images/jd-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img4").hover(function(e){
		$(this).children("img").attr("src","images/zmbx.jpg");
	},function(){
		$(this).children("img").attr("src","images/zmbx-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img5").hover(function(e){
		$(this).children("img").attr("src","images/tysq.jpg");
	},function(){
		$(this).children("img").attr("src","images/tysq-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img6").hover(function(e){
		$(this).children("img").attr("src","images/jfz.jpg");
	},function(){
		$(this).children("img").attr("src","images/jfz-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img7").hover(function(e){
		$(this).children("img").attr("src","images/qnl.jpg");
	},function(){
		$(this).children("img").attr("src","images/qnl-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img8").hover(function(e){
		$(this).children("img").attr("src","images/wcf.jpg");
	},function(){
		$(this).children("img").attr("src","images/wcf-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img9").hover(function(e){
		$(this).children("img").attr("src","images/r360.jpg");
	},function(){
		$(this).children("img").attr("src","images/r360-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img10").hover(function(e){
		$(this).children("img").attr("src","images/ljs.jpg");
	},function(){
		$(this).children("img").attr("src","images/ljs-g.jpg");
	});
});
$(function(){
	$(".st1-partner .parentslider .slider-container .slideritem .img11").hover(function(e){
		$(this).children("img").attr("src","images/jsyh.jpg");
	},function(){
		$(this).children("img").attr("src","images/jsyh-g.jpg");
	});
});

//合作机构的prev和next




//.floatdiv上滑下滑
$(function(){
	$(".floatdiv .float .li2").hover(function(){
		$(".pagination").fadeIn("fast");
	},function(){
		$(".pagination").fadeOut("fast");
	});
	
});
