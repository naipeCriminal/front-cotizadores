$(document).ready(function(){
	avisoPrivacidad();
	planesAoB();

	$("#checkbox-1").click(function(){
		avisoPrivacidad();
	})
	$(".planAB").click(function(){
		planesAoB();
	})

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
function planesAoB(){
	if( $('#radio-1').prop('checked') ){
			console.log("Plan A")
			$(".a").addClass("active");
			$(".b").removeClass("active");
		}else {
			console.log("Plan B")
			$(".b").addClass("active");
			$(".a").removeClass("active");
		}
}