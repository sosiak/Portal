$(document).ready(function() {
	$(".languages-item").click(function(){
		$(".languages-toggle:not(#languages)").hide(800);
		$("#languages").toggle(800);
	});
	$(".public-item").click(function(){
		$(".public-toggle:not(#public)").hide(400);
		$("#public").toggle(400);
	});
	$(".search-passive").click(function() {
		$(".search-dark").css("display", "block");
		$(".nav-left").css("padding-top", "45px");
		$(".search-dark").css("left", "-33%");
		$(".search-dark").css("width", "133%");
		$(".search-passive").css("display", "none");
		$(".search-active-icon").css("display", "block");
	});
	$(".search-active-icon").click(function() {
		$(".search-dark").css("left", "0");
		$(".search-dark").css("width", "1%").fadeOut(300);
		$(".search-active-icon").css("display", "none");
		$(".search-passive").css("display", "block");
		$(".nav-left").css("padding-top", "5px");
	});
});