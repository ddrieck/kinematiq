$(document).ready(function(){
	$('.visible').hover(function(){
		$(this).slideUp();
		$(this).next().show();
	});

});