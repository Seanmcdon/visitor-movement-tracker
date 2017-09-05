$(document).ready(function(){

$(document).on("scroll", function(e){
	
	$.ajax({
		url: 'sendMeAnEmail.php',
		type: 'POST',
		dataType: 'text',
		data: { "str" : "Page was scrolled" }
	});	
		
	$(document).off("scroll");

});

$(document).on("mouseenter touchstart", "div.post-hover.text-center", function(e){
	
	var dataString = $(this).prev("div").children("h4").children("a").html();

	$.ajax({
		url: 'sendMeAnEmail.php',
		type: 'POST',
		dataType: 'text',
		data: { "str" : dataString }
	});	
	
});

});