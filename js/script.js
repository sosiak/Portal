$(document).ready(function() {
	$(".languages-item").click(function(){
		$(".languages-toggle:not(#languages)").hide(800);
		$("#languages").toggle(800);
	});
	$(".public-item").click(function(){
		$(".public-toggle:not(#public)").hide(400);
		$("#public").toggle(400);
	});
	$(".search-icon").click(function() {
		$(".icon").animate({
			left: "94%"
		}, 1000, function() {
			//Complete//
		});
	});
});