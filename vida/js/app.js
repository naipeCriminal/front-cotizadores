$(document).ready(function(){
    $('.selector').datepicker({
		changeMonth: true,
		changeYear: true, 	
		yearRange: "1940:2004",
		dateFormat: 'd-m-yy',
		inline: true,
		onSelect: function() { 
			var date = $(".selector").val();
			splitDate = date.split("-")
			day = splitDate[0];
			$('#day').val(splitDate[0])
			$('#moth').val(splitDate[1])
			$('#year').val(splitDate[2])
		} 
    });	
})