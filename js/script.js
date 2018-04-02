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
		$(".search-dark").css("width", "100%");
		$(".search-passive").css("display", "none");
		$(".search-active-icon").css("display", "block");
	});
	$(".search-active-icon").click(function() {
		$(".search-dark").css("left", "0");
		$(".search-dark").css("width", "1%").fadeOut(200);
		$(".search-active-icon").css("display", "none");
		$(".search-passive").css("display", "block");
	});
});