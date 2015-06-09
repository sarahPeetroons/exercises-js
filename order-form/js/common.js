(function($) {

	// allow only number charctere
	var numberTest = function(){
		$("#card").keydown(function (e) {

	        // Allow: backspace, delete, tab, escape, enter and .
	        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
	             // Allow: Ctrl+A, Command+A
	            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
	             // Allow: home, end, left, right, down, up
	            (e.keyCode >= 35 && e.keyCode <= 40)) {
	                 // let it happen, don't do anything
	                 return;
	        }
	        // Ensure that it is a number and stop the keypress
	        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	            e.preventDefault();
	        }
	    });
	};

	var validation = function(){
		$('#card').on("input", function() {
		    var value = $(this).val();
        	var input = $(this).parent().find('.input-group-addon');

        	// var visa = /^4[0-9]{12}([0-9]{3})?$/;
        	// var masterCard = /^5[0-9]{15}$/;
        	// var americanExpress = /^3[47][0-9]{13}$/

        	// check if it's a Visa card
        	if(value.indexOf(4) == 0){

	        	input.empty().append('Visa');
	        	// regex start by 4 length 13 or 16
	        	if(value.match(/^4[0-9]{12}([0-9]{3})?$/)){
	        		input.empty().append('Visa check');
	        	// regex if length 17 is wrong
	        	}else if(value.match(/[0-9]{17}$/)){
	        		input.empty();
	        	}
	        }
	        // check if it's a Master card
        	else if(value.indexOf(5) == 0){

	        	input.empty().append('MasterCard');
	        	// regex start by 5 length 16
	        	if(value.match(/^5[0-9]{15}$/)){
	        		input.empty().append('MasterCard check');
	        	// regex if length 17 is wrong
	        	}else if(value.match(/[0-9]{17}$/)){
	        		input.empty();
	        	}

	        // check if it's a American Express
	        }
	        // check if it's a American Express
        	else if(value.indexOf(347) == 0){

	        	input.empty().append('American Express');
	        	// regex second and third number 47 lenght 15
	        	if(value.match(/^3[47][0-9]{13}$/)){
	        		input.empty().append('American check');
	        	// regex if length 16 is wrong
	        	}else if(value.match(/[0-9]{16}$/)){
	        		input.empty();
	        	}

	        }else{
	        	input.empty();
	        }


		});
        
	};
	

	$(document).ready(function() {
		numberTest();
		validation();
		
	});

})(jQuery);