*{padding:0;margin:0;}
.clearfix:after{
	content:' ';
	display:block;
	width:100%;
	height:0;
	visibility:hidden;
	clear:both;
}
.header {
	position:relative;

}

.head-top {
	position:absolute;
	left:50%;
	margin-left:-500px;
	width:1000px;
	height:135px;
	background:url(http://www.chinalife-p.com.cn/images/nav_bg.png);
	z-index:9999;
}
.headlink {
	text-align:right;
	height:30px;
	line-height:30px;
	padding-right:5px;
}
.headlink a{
	text-decoration:none;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	line-height:18px;
	padding:2px 0;
	color:#666;
	border-top:3px solid #f08625;
}
.headlink a:hover,
.headlink a.jianti{
	text-decoration:underline;
	color:#009b63;
	border-top:3px solid #009b63;
}
.headlink span{
	color:#666;
}
.headmenu {
	margin-top:65px;
	text-align:center;
}
.headmenu ul {
	list-style-type:none;
}
.headmenu li{
	float:left;

}
.headmenu a{
	display:block;
	text-decoration:none;
	width:110px;
	height:40px;
	font-size:14px;
	font-family: Microsoft YaHei;
	line-height:38px;
	color:#666;

}
.headmenu a:hover,
.headmenu a.active{
	color:#fff;
	background:#009b63;
}

.search {

}
.searchbar {
	margin-top:10px;
	float:right;
	width:210px;
	height:20px;
	background:#fff;
	border:1px solid #d7d7d7;
	border-radius:20px;
	box-shadow: inset 1px 1px 10px #ddd;
	
}
.searchbar input[type=text] {
	float:left;
	width:160px;
	height:20px;
	margin:0 0 0 10px;
	background:transparent;
	border:none;
	outline:none;
}
.btn-search {
	float:left;
	display:block;
	width:40px;
	height:20px;
	text-align:center;
	border-top-right-radius:20px;
	border-bottom-right-radius:20px;
	background:#068A4B;
	color:white;
}

.searchbar a  {
	text-decoration:none;
}
.picture {
	position:relative;
	height:464px;
	overflow:hidden;
}
.picture img {
	width:100%;
	height:464px;
}
.banner-btn {
	margin-top:-3px;
	width:100%;
	height:35px;
	background:#068A4B;
	text-align:center;
	line-height:35px;
}
.banner-btn ul {
	padding-left:180px;
}

.slider-btn{
	position:absolute;
	display:block;
	list-style-type:none;
	z-index:1002;
	bottom:-7px;
	left:75px;
	
}
.slider-btn li{
	float:left;
	display:block;
	width:20px;
	height:20px;
	line-height:20px;
	font-size:16px;
	color:#fff;
	text-align:center;
	margin:0 5px;
	border:1px solid #fff;
	cursor:pointer;
	overflow:hidden;
}
.slider-btn .on{
	background:#ff662c;
}
.clr {
	clear:both;
}
.main {

	width:100%;
	height:635px;
	background:url(http://www.chinalife-p.com.cn/images/body_bg.png)
}
.content {
	width:1000px;
	margin:0 auto;
	
}
.left {
	float:left;
}
.sectionl{
	margin:0px;
	padding:0;
}
.sectionl:first-child {
	padding-top:10px;
}
.section_1 {
	float:left;
	width:280px;
	height:241px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	background:url(http://www.chinalife-p.com.cn/images/index/section_bg_1.jpg) no-repeat;
}
.section_1 p {
	padding:190px 20px 0px 20px;
	text-indent:2em;
	color:#696969;
}
.section_2 {
	position:relative;
	float:left;
	margin-left:9px;
	width:131px;
	height:241px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	background:url(http://www.chinalife-p.com.cn/images/index/section_bg_2.jpg) no-repeat;
}
.section_2 a{
	position:relative;
	font-size:16px;
	color:#fff;
	display:block;
	width:131px;
	height:241px;
	line-height:35px;
}
.section_2 a:hover span{
	text-decoration:underline;
}
.section_2 span {
	margin:204px 32px 0 0;
	float:right;
	display:inline;
	font-size:16px;
}
.section_3 {
	position:relative;
	float:left;
	margin-left:9px;
	width:131px;
	height:241px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	background:url(http://www.chinalife-p.com.cn/images/index/section_bg_3.jpg) no-repeat;
}
.section_3 a{
	position:relative;
	font-size:16px;
	color:#fff;
	display:block;
	width:131px;
	height:241px;
	line-height:35px;
}
.section_3 a:hover span{
	text-decoration:underline;
}
.section_3 span {
	margin:204px 32px 0 0;
	float:right;
	display:inline;
	font-size:16px;
}
.section_4 {
	position:relative;
	float:left;
	margin-left:9px;
	width:200px;
	height:241px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	
}
.section_4 img{
	display:block;
	padding:0;
	margin:0;
}
.section_5 {
	float:left;
	width:280px;
	height:140px;
	margin-top:10px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	padding-bottom:10px;
	background:#fff url(http://www.chinalife-p.com.cn/images/index/section_bg_5n.gif) no-repeat 10px 10px;
}
.section_5 p{
	width:124px;
	height:84px;
	padding:36px 9px 0 146px;
	line-height:20px;
	text-indent:2em;
}
.section_5 a{
	text-decoration:none;
	color:#696969;
}

.section_5 span{
	float:right;
	background:url(http://www.chinalife-p.com.cn/images/index/more_bg.png) no-repeat right top;
	margin-right:10px;
	padding-right:18px;
	
	
}
.section_5 a:hover {
	text-decoration:underline;
}
.section_5 a:hover span{
	text-decoration:underline;
	color:#009b63;
}
.section_6 {
	position:relative;
	float:left;
	width:261px;
	height:140px;
	margin-top:10px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	padding-right:10px;
	margin-left:9px;
	padding-bottom:10px;
	background:#fff url(http://www.chinalife-p.com.cn/images/index/section_bg_6.jpg) no-repeat 10px 10px;
}
.section_6 img{
	position:absolute;
	top:38px;
	left:10px;
}
.section_6 p{
	width:124px;
	height:84px;
	padding:36px 9px 0 146px;
	line-height:20px;
	text-indent:2em;
}
.section_6 a{
	text-decoration:none;
	color:#696969;
}

.section_6 span{
	float:right;
	background:url(http://www.chinalife-p.com.cn/images/index/more_bg.png) no-repeat right top;
	margin-right:10px;
	padding-right:18px;
	
	
}
.section_6 a:hover {
	text-decoration:underline;
}
.section_6 a:hover span{
	text-decoration:underline;
	color:#009b63;
}
.section_7 {
	position:relative;
	float:left;
	width:200px;
	height:150px;
	margin-top:10px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	margin-left:9px;
	padding:0;
	background:#fff url(http://www.chinalife-p.com.cn/images/index/section_bg_7.jpg) no-repeat center center;
}
.section_8 {
	float:left;
	width:279px;
	display:inline;
	font-size:12px;
	margin-top:10px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
}
.section_8 a{
	display:block;
	height:45px;
	padding-left:50px;
	margin-bottom:7px;
	font-size:13px;
	line-height:45px;
	color:#009b63;
	text-decoration:none;
}
.a1 {
	background:url(http://www.chinalife-p.com.cn/images/index/section_a_1_h.png) no-repeat
}
.a2 {
	background:url(http://www.chinalife-p.com.cn/images/index/section_a_4_h.png) no-repeat
}
.a3 {
	background:url(http://www.chinalife-p.com.cn/images/index/section_a_2_h.png) no-repeat
}
.a4 {
	background:url(http://www.chinalife-p.com.cn/images/index/section_a_3_h.png) no-repeat
}
.section_9{
	position:relative;
	float:left;
	width:459px;
	margin-top:10px;
	margin-left:9px;
	padding-left:10px;
	display:inline;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	
}
.hh1 {	font-weight:bold;
	font-size:15px;
	height:16px;
	line-height:16px;
	color:#009b63;
	margin-bottom:10px;	background:url(http://www.chinalife-p.com.cn/images/index/section_0_bg.png) no-repeat 0 center;	display:block;
}
.hh1 a{
	float:right;
	font-size:10px;
	color:#fff;
	padding:0 10px 0 20px;
	text-decoration:none;
	background:url(http://www.chinalife-p.com.cn/images/index/news_more.png) no-repeat;
	
}
.hh1 a:hover {
	text-decoration:underline;
}
.newlist{
	display:block;	
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	
	
}
.newlist li {
	/*list-style-position:inside;*/
	list-style-type:none;
	height:28px;
}
.newlist a {
	display:block;
	height:28px;
	line-height:28px;
	text-decoration:none;
	
	color:#666;
}
.newlist b {
	display:block;
	float:left;
	width:323px;
	text-overflow:ellipsis;
	white-space:nowrap;
	overflow:hidden;
	font-weight:normal;
}
.new{
	background:url(http://www.chinalife-p.com.cn/images/index/new.gif) no-repeat right center;
	padding-right:45px;
}
.news {
	font-weight:normal;
}
.newstime {
	float:right;
	width:80px;
}
.newlist a:hover {
	color:#009b63;
}
.right{	float:right;
	width:219px;
	display:inline;
	
}
.sectionr-1 {
	width:219px;
	height:199px;
	margin-top:10px;
	padding-top:30px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	background:url(http://www.chinalife-p.com.cn/images/index/section_r_1_bg.png) no-repeat;
}
.sectionr-1 a{
	width:174px;
	height:53px;
	display:block;
	margin-top:10px;
	margin-left:15px;
}
.sectionr-2 {
	position:relative;
	width:219px;
	height:69px;
	padding-top:56px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	background:url(http://www.chinalife-p.com.cn/images/index/section_r_2_bg.png) no-repeat;
}
.sectionr-2 a{
	float:left;
	margin-left:18px;
	display:inline;
}
.sectionr-3 {
	position:relative;
	width:219px;
	height:259px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	background:url(http://www.chinalife-p.com.cn/images/index/section_r_3_bg.png) no-repeat;
}
embed[Attributes Style] {
width: 199px;
height: 136px;
}
.flashbg {
	position: absolute;
	z-index: 1;
	left: 10px;
	top: 12px;
	cursor: pointer;
}
.a {
	position: relative;
	z-index: 2;
	display: block;
	height: 135px;
	width: 100%;
	background: url(http://www.chinalife-p.com.cn/images/index/section_r_3_bg.png) 9999px no-repeat;
}
.img7,
.img8 {
	position: relative;
	z-index: 2;
	float: left;
	margin-left: 23px;
	margin-top: 80px;
	display: inline;
}
.link {
	height:34px;
	background:#e6e6e6;
}
.main-link {
	width:1000px;
	height:34px;
	margin:0 auto;
}
.share {
	float:left;
	padding-top:9px;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
}
.share span {
	float:left;
	color:#737373;
}
}
.jiathis_style {
	float:left;
}
.footerlink {
	float:right;
	height:24px;
	padding:5px 0;
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
}
.footerlink a{
	float:left;
	text-decoration:none;
	height:24px;
	line-height:24px;
	color:#737373;
	margin:0 6px;
	
}
.footerlink span{
	float:left;
	width:20px;
	height:24px;
	line-height:24px;
	background:url(http://www.chinalife-p.com.cn/images/span_bg.png) no-repeat center center;
	
}
.footerlink a:hover{
	text-decoration:underline;
	color:#009b63;
	
}
.footerlink select{
	margin:0 10px;
	display:inline;
	width:240px;
	height:24px;
	color:#737373;
	border:1px solid #999;
	
}
.copyright{
	height:92px;
	background:#fff;
}
.copymain {
	width:1000px;
	height:92px;
	line-height:26px;
	margin:0 auto;
	padding:12px 10px 0 10px;
	background:url(http://www.chinalife-p.com.cn/images/footer_logo.png) no-repeat right center;
}
.copymain p{
	font-size:12px;
	font-family: Microsoft YaHei,Arial, Helvetica, sans-serif;
	color:#969696;
}
.copymain a{
	float:right;
	color:#666;
}
.safe {
	width:200px;
}
