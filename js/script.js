$(document).ready(function() {
	$(".languages-item").click(function(){
		$(".languages-toggle:not(#languages)").hide(800);
		$("#languages").toggle(800);
	});
});