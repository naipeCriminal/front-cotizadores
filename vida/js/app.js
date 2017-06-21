$(document).ready(function(){
	avisoPrivacidad();
	$('[data-toggle="tooltip"]').tooltip();
	
	$("#checkbox-1").click(function(){
		avisoPrivacidad();
	})

    $('.selector').datepicker({
		changeMonth: true,
		changeYear: true, 	
		yearRange: "1940:2004",
		dateFormat: 'd-m-yy',
		inline: true,
		onSelect: function() {
			var date = $(".selector").val();
			splitDate = date.split("-")
			$('#day').val(splitDate[0])
			$('#moth').val(splitDate[1])
			$('#year').val(splitDate[2])
		} 
    });	
    $('.selector2').datepicker({
		changeMonth: true,
		changeYear: true, 	
		yearRange: "1940:2004",
		dateFormat: 'd-m-yy',
		inline: true,
		onSelect: function() {
			var date2 = $(".selector2").val();
			splitDate2 = date2.split("-")
			$('#day2').val(splitDate2[0])
			$('#moth2').val(splitDate2[1])
			$('#year2').val(splitDate2[2])
		} 
    });	
})
function avisoPrivacidad(){
	if( $('#checkbox-1').prop('checked') ){
			$( ".registro" ).prop( "enabled", true );
			$( ".registro" ).prop( "disabled", false );
		}else {
			$( ".registro" ).prop( "disabled", true );
			$( ".registro" ).prop( "enabled", false );
		}
}