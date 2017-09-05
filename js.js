$(document).ready(function(){

	
	//IF USER SCROLLS
	$(document).on("scroll", function(e){
	
		$.ajax({
			url: 'sendMeAnEmail.php',
			type: 'POST',
			dataType: 'text',
			data: { "str" : "Page was scrolled" }
		});	
		
		//REMOVE EVENT LISTENER (ONLY WORKS ONCE)
		$(document).off("scroll");

	});

	
	$(document).on("mouseenter touchstart", "YOUR DOM ELEMENT HERE", function(e){
	
		var dataString = $("YOUR DOM ELEMENT HERE (DOES NOT HAVE TO BE THE SAME)").html();

		$.ajax({
			url: 'sendMeAnEmail.php',
			type: 'POST',
			dataType: 'text',
			data: { "str" : dataString }
		});	
	
	});

});
