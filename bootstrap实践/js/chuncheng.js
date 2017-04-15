$(function(){
	$("#marquees").kxbdMarquee({
	direction: 'up',
	scrollDelay:30,
	isEqual: false
});

$("#sb1").click(function(){
	$("html,body").animate({scrollTop:0},300);
});
$('#sb1').hover(function(){
	$('#sb').find('p').html('点击图片跳转到顶部')
},function(){
	$('#sb').find('p').html('微信扫一扫，立即开户')
});
new WOW().init();
});

