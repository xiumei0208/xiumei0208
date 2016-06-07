
//表单验证
$().ready(function() {  
	$("#signupForm").validate({
		rules:{
			 name:{
				 required:true,
				 rangelength:[6,20]
			 },
			 password:{
				 required:true,
				 rangelength:[6,20]
			 },
			 confirm_password:{
				 required:true,
				 equalTo:"#password"
			 },
			 email:{
				 required:true,
				 email:true
			 },
			 mobile:{
				 required:true,
				 length:11
			 },
			 yzm:{
				 required:true
			 },
			 smscode:{
				 required:true
			 }
		}
		/*
		message:{
			 name:{
				 required:"未填写，请补充",
				 rangelength:"请输入一个长度介于6和20之间的字符串"
			 },
			 password:{
				 required:"请输入密码",
				 rangelength:"请输入一个长度介于6和20之间的字符串"
			 },
			 confirm_password:{
				 required:"请再次输入相同的值",
				 equalTo:"两次输入密码不一致不一致"
			 },
			 email:{
				 required:"请输入Email地址",  
				 email:"请输入正确的email地址"
			 },
			 mobile:{
				 required:"请输入手机号",
				 length:11
			 },
			 yzm:{
				 required:"请输入验证码"
			 },
			 smscode:{
				 required:"请输入手机验证码"
			 }
		}*/
	});  
}); 

//表单验证：提示
jQuery.extend(jQuery.validator.messages, {  
  required: "必选字段",  
  remote: "请修正该字段",  
  email: "请输入正确格式的电子邮件",  
  url: "请输入合法的网址",  
  date: "请输入合法的日期",  
  dateISO: "请输入合法的日期 (ISO).",  
  number: "请输入合法的数字",  
  digits: "只能输入整数",  
  creditcard: "请输入合法的信用卡号",  
  equalTo: "请再次输入相同的值",  
  accept: "请输入拥有合法后缀名的字符串",  
  maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),  
  minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),  
  rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),  
  range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),  
  max: jQuery.validator.format("请输入一个最大为 {0} 的值"),  
  min: jQuery.validator.format("请输入一个最小为 {0} 的值")  
});  



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
        