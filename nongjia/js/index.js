//ͼƬ�ֲ�
var t =n=0,count;
$(document).ready(function(){
	count=$(".slider>li>a").length;
	$(".slider>li:not(:first-child)").hide();    //�������slider��ĵ�һ��li��a��������
	$(".slider-btn li").click(function(){
		var i=$(this).text()-1;   //��ȡliԪ���ڵ�ֵ����1,2,3,4,5
		n=i;
		if(i>=count)return;
		$(".slider>li").filter(":visible").fadeOut(200).parent().children().eq(i).fadeIn(200);
		$(".slider-btn li").removeClass("on");   //�Ƴ�����btn����ʽ
		$(this).addClass("on");     //��ӵ�ǰԪ�ص���ʽ
		
	});
	t=setInterval("showAuto()",3000);     //�Զ�����
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



//�ַ��٣������˵�
$(function(){
	$(".content .main .left .l-section1 .l-menu .li3>a").click(function(){
		
		//����
		//$(this).parents("li").siblings("li").removeClass("active");
		//$(this).parents("li").addClass("active");		
		//$(this).parents("li").find("a").removeClass("a1");
		//$(this).addClass("a1");
		
		var _this = $(this);
		if(_this.parents("li").find(".menu-content").css("display") == "none"){
			//����
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


















