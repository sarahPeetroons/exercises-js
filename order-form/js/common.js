(function($) {

	// allow only number charctere
	var numberTest = function(){
		$("#card").keydown(function (e) {

			//console.log($("#card").val());

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

	var checkFirstNumber = function(){
		/*var regVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        var regMasterCard = /^5[1-5][0-9]{14}$/;*/
        
        $("#card").keydown(function (e) {
        	var value = $(this).val() + 1;
        	if(value.indexOf(4) == 0){
	        	console.log('visa');
	        	$(this).parent().find('.input-group-addon').empty().append('visa');
	        }else if(value.indexOf(5) == 0){
        		console.log('masterCard');
	        	$(this).parent().find('.input-group-addon').empty().append('masterCard');
	        }else{
	        	$(this).parent().find('.input-group-addon').empty();
	        }
	    });
	};
	

	$(document).ready(function() {
		numberTest();
		checkFirstNumber();
	});

})(jQuery);