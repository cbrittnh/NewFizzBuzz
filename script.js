$(document).ready(function() {

	var integer= prompt("Please enter a number between 1 and 100");
	var error = true;
	var count = function(integer){
		while (error) {
	if (integer >0 ==false || integer%1 !== 0 || integer >100) {
		integer= prompt("You must enter a number between 1-100.");
	}
	else{
		error = false;
		for (var i = 1; i <= integer; i++) {
		if(i%15===0){
			$("body").append("<p>fizzbuzz</p>"); 
		}
		else if (i%5 == 0) {
			$("body").append("<p>buzz</p>"); 
		}
		else if (i%3 == 0) {
			$("body").append("<p>fizz</p>"); 
		}
		else{
		$("body").append("<p>" + i + "</p>");
	}
	}
	}
	}
	};
	count(integer);
});