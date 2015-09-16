$(document).ready(function() {
	$('p').first().click(function() {
		$('img, figcaption').css("display","none");
	})
	$('li').addClass("item")
	$('.item').click(function() {
		$(this).css("text-decoration","line-through");
	})
})