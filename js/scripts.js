$(document).ready(function(){
	$('.thumbnail').mouseenter(function() {
	    $(this).find(".hidden_action").fadeToggle();
	    $(this).find(".visible").hide();
	});
	$('.thumbnail').mouseleave(function() {
		    $(this).find(".hidden_action").hide();
		    $(this).find(".visible").fadeToggle();
		});

});