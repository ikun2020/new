var i=0;
var timer;
$(function(){
	$(".ig").eq(0).show().siblings().hide();
	Showtime();
	
	$(".tab").hover(function(){
		i = $(this).index();
		Show();
		clearInterval(timer);
	},function(){
		Showtime();
	});
	$(".btn1").click(function(){
		clearInterval(timer);
		if(i==0){
			i=6;
		};
		i--;
		Show();
		Showtime();
	});
	$(".btn2").click(function(){
		clearInterval(timer);
		if(i==5){
			i=-1;
		};
		i++;
		Show();
		Showtime();
	});
});

function Show(){
		$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
};
function Showtime(){
	timer = setInterval(function(){
		i++;
		if(i==6){
			i=0;
		}
		Show();
	},2000);
};
