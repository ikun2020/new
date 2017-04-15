$(function() {
	$("#wechat a").hover(
		function() {
			$(this).siblings().show()
		},
		function() {
			$(this).siblings().hide()
		});
	$("#wechat img").click(function() {
		$(this).hide();
	});

	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if(top < 800) {
			$('#backtop').hide();
		} else {
			$('#backtop').show();
		}
	});
	$("#backtop").click(function(){
	$("html,body").animate({scrollTop:0},300);
});
		$("#tanchu").click(function(){
			
	});
	new WOW().init();
});