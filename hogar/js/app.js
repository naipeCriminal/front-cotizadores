$(document).ready(function(){
	avisoPrivacidad();
	planesAoB();
	domicilio();
	formaPago1();
	envioP();
	planes();

	$('[data-toggle="tooltip"]').tooltip();

	$("#checkbox-1").click(function(){
		avisoPrivacidad();
	})
	$("#checkbox-Acepto").click(function(){
		terminosCondiciones()
	})
	$(".planAB").click(function(){
		planesAoB();
	})
	$(".pregDom").click(function(){
		domicilio();
	})
	$(".entregaP").click(function(){
		envioP();
	})
	$("#formaP").click(function(){
		formaPago();
	})
	$("#sumaasegurar").click(function(){
		planes();
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
			$(".a").addClass("active");
			$(".b,.c").removeClass("active");
		}else {
			$(".b").addClass("active");
			$(".a,.c").removeClass("active");
		}
}
function domicilio(){
	if( $('#radio-domC').prop('checked') ){
		$('.edificio').fadeOut();
		$('.casa').fadeIn();
	} else {
		$('.casa').fadeOut();
		$('.edificio').fadeIn();
	}
}
function formaPago1(){
	$(".row .plan button").click(function(){
		$(".row .plan").removeClass("active");
		$(this).parent().parent().addClass("active");
	})
}
function envioP(){
	if( $('#radioEnvio').prop('checked') ){
		$('.envio').fadeIn();
	} else {
		$('.envio').fadeOut();
	}
}
function formaPago(){
	if( $('#formaP').val()==0 ){
	   	$(".ccb,.tdc1").fadeOut();
	 	$(".tdc").fadeIn();
	}else if( $('#formaP').val()==1 ){
		$(".ccb").fadeOut();
	 	$(".tdc, .tdc1").fadeIn();
	}else if( $('#formaP').val()==2 ){
	   	$(".tdc,.tdc1").fadeOut();
	   	$(".ccb").fadeIn();
	}
}
function terminosCondiciones(){
	if( $('#checkbox-Acepto').prop('checked') ){
			$( ".acepto1" ).prop( "enabled", true );
			$( ".acepto1" ).prop( "disabled", false );
		}else {
			$( ".acepto1" ).prop( "disabled", true );
			$( ".acepto1" ).prop( "enabled", false );
		}
}
function planes(){
	if( $('#sumaasegurar').val()<1550000 ){
	   	$(".plus").fadeOut();
	 	$(".aOb").fadeIn();
	}else if( $('#sumaasegurar').val()>=1550000 ){
		$(".aOb").fadeOut();
		$('#radio-Plus').attr('checked', true);
		$(".c").addClass("active");
		$(".a,.b").removeClass("active");
	 	$(".plus").fadeIn();
	}
}