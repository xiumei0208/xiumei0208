$(function(){
	$(".banner .banner-btn .on").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/banner/banner_btn_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/banner/banner_btn.png");
	});
});


//图片轮播
//图片轮播
var t =n=0,count;
$(document).ready(function(){
	count=$(".slider>li>a").length;
	$(".slider>li:not(:first-child)").hide();    //如果不是slider类的第一个li的a，就隐藏
	$(".slider-btn li").click(function(){
		//var i=$(this).text()-1;   //获取li元素内的值，即1,2,3,4,5
		var j=$(this).index();   //获取li元素的索引
		//n=i;
		n=j;
		if(j>=count)return;
		//$(".slider>li").filter(":visible").fadeOut(200).parent().children().eq(i).fadeIn(200);
		$(".slider>li").filter(":visible").fadeOut(200).parent().children().eq(j).fadeIn(200);
		$(".slider-btn li").removeClass("on");   //移除其他btn的样式
		$(this).addClass("on");     //添加当前元素的样式
		
	});
	t=setInterval("showAuto()",5000);     //自动播放
	$(".picture").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval("showAuto()",5000);
	});
})
function showAuto(){
	n=n>=(count-1)?0:++n;
	$(".slider-btn li").eq(n).trigger("click");
}


$(function(){
	$(".img1").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_1_1_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_1_1.png");
	});
});
$(function(){
	$(".img2").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_1_3_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_1_3.png");
	});
});
$(function(){
	$(".img3").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_1_4_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_1_4.png");
	});
});
$(function(){
	$(".img4").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_2_1_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_2_1.png");
	});
});
$(function(){
	$(".img5").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_2_2_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_2_2.png");
	});
});
$(function(){
	$(".img6").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_2_3_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_2_3.png");
	});
});
$(function(){
	$(".img7").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_3_1_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_3_1.png");
	});
});
$(function(){
	$(".img8").hover(function(e){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_3_2_h.png");
	},function(){
		$(this).children("img").attr("src","http://www.chinalife-p.com.cn/images/index/section_r_3_2.png");
	});
});