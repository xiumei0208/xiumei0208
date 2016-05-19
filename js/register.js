/*
//图片淡入淡出轮播   可用的
var t =n=0,count;
$(document).ready(function(){
	count=$(".sliders>li>a").length;
	$(".sliders>li:not(:first-child)").hide();    //如果不是slider类的第一个li的a，就隐藏
	$(".slider-btn li").click(function(){
		//var i=$(this).text()-1;   //获取li元素内的值，即1,2,3,4,5
		var j=$(this).index();   //获取li元素的索引
		//n=i;
		n=j;
		if(j>=count)return;
		//$(".slider>li").filter(":visible").fadeOut(200).parent().children().eq(i).fadeIn(200);
		$(".sliders>li").filter(":visible").fadeOut(200).parent().children().eq(j).fadeIn(200);
		$(".slider-btn li").removeClass("on");   //移除其他btn的样式
		$(this).addClass("on");     //添加当前元素的样式
		
	});
	t=setInterval("showAuto()",3000);     //自动播放
	$(".slider").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval("showAuto()",3000);
	});
})
function showAuto(){
	n=n>=(count-1)?0:++n;
	$(".slider-btn li").eq(n).trigger("click");
}
*/


//动画轮播
		var sliderWidth = 400,
            ulLeft = 0,
            ulWidth = $(".slider ul.sliders").width(),
            liIndex = 0;
		var t =n=0,count;
			
        $(function () {
			count=$(".sliders>li>a").length;
            $(".slider,.slider .sliders>li").width(sliderWidth);
            $(".slider>ul.sliders").width($(".slider .sliders>li").length * sliderWidth); 
            $(this).eq(n).addClass("on");
		
            setInterval(slide, 3000);   //自动播放
            $(".slider-btn li").click(function () {        //点击按钮轮播
				var j=$(this).index();   //获取li元素的索引
				n=j;
				if(j>=count)return;
                
				ulLeft = $(".slider ul.sliders>li").width()*j;
				$(".slider ul.sliders").animate({ left: -ulLeft }, 300);
                $(".slider .slider-btn>li").removeClass("on");
                $(".slider .slider-btn>li").eq(j).addClass("on");
            });
            
        });
		function slide() {            //下一张函数
			n=n;
            if (n<count) {
                ulLeft = $(".slider ul.sliders>li").width()*n;
                $(".slider ul.sliders").animate({ left: -ulLeft }, 300);
				$(".slider .slider-btn>li").removeClass("on");
				$(".slider .slider-btn>li").eq(n).addClass("on");
				n+=1;
			} 
			else {
				n=0;
			}
        }
        