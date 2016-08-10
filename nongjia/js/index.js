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



//手风琴，滑动菜单
$(function(){
	$(".content .main .left .l-section1 .l-menu .li3>a").click(function(){
		
		//出现
		//$(this).parents("li").siblings("li").removeClass("active");
		//$(this).parents("li").addClass("active");		
		//$(this).parents("li").find("a").removeClass("a1");
		//$(this).addClass("a1");
		
		var _this = $(this);
		if(_this.parents("li").find(".menu-content").css("display") == "none"){
			//滑动
			_this.parents("li").siblings("li").find("a").removeClass("a1");
			_this.addClass("a1");
			$(this).parents("li").siblings("li").find(".menu-content").slideUp(300);
			$(this).parents("li").find(".menu-content").slideDown(300);
		}else{
			_this.removeClass("a1");
			$(this).parents("li").find(".menu-content").slideUp(300);
		}
		
	});
})


















