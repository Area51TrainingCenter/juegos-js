jQuery(
	function($) {

		var jugadorElegido = false,
			pelotaElegida = false
			reinicio = false;

		$("div.participa a").on("click", function(e){
			e.preventDefault();
			if(leido) {
				if(nombreUsuario.indexOf(" ")) {
					$(".zonaNombre").html(nombreUsuario.substring(0,nombreUsuario.indexOf(" ")));
				} else {
					$(".zonaNombre").html(nombreUsuario);
				}	

				$("div.intro").hide();
				if(nombreUsuario!="") {
					$("div.eleccion").show();
				} else {
					$("div.registro").show();	
				}
			}
		});

		$("a.btnContinuar").on("click", function(e){
			e.preventDefault();

			var nombres = $("#txtNombres").val(),
				dni = $("#txtDNI").val(),
				correo = $("#txtCorreo").val(),
				telefono = $("#txtTelefono").val(),
				ciudad = $("#txtCiudad").val();

				nombreUsuario=nombres;

			if(nombres!="" && dni!="" && correo!="" && telefono!="" && ciudad!="") {
				var url = "registro.php?id="+ facebookId + "&nombres=" + nombres + "&dni=" + dni + "&telefono=" + telefono + "&correo=" + correo + "&ciudad=" + ciudad;
				var jqxhr = $.get(url,function(data) {
				if(nombreUsuario.indexOf(" ")) {
					$(".zonaNombre").html(nombreUsuario.substring(0,nombreUsuario.indexOf(" ")));
				} else {
					$(".zonaNombre").html(nombreUsuario);
				}


					$("div.registro").hide();
					$("div.eleccion").show();
				}).fail(function() {
	    			alert('Error al registrar');
	  			});
			}


		});

		$("div.seleccionUsuario").on("click", function(){
			if($(this).hasClass('seleccionJugador')){
				$(".jugador").css("backgroundPosition","left top");
				$(".jugador[rel=" + parseInt($(this).attr("rel")) + "]").css("backgroundPosition","right top");
//				$(this).css("backgroundPosition","right top");
				jugadorElegido = true;
			}
			if($(this).hasClass('seleccionPelota')){
				$(".pelota").css("backgroundPosition","left top");
				if(parseInt($(this).attr("rel")) == 2) {
					$(".pelota1").css("backgroundPosition","right top");	
				}
				if(parseInt($(this).attr("rel")) == 1) {
					$(".pelota2").css("backgroundPosition","right top");	
				}
				if(parseInt($(this).attr("rel")) == 0) {
					$(".pelota3").css("backgroundPosition","right top");	
				}


				
				//$(this).css("backgroundPosition","right top");
				pelotaElegida = true;

				PELOTA_TIPO = parseInt($(this).attr("rel"));
				POSICION_INICIAL_PELOTA = PELOTA_TIPO*5;
			}
		});

		$(".btnInstrucciones").on("click", function(e){
			e.preventDefault();
			$("div.instrucciones").show();
		});

		$(".btnIniciar").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();

			if(pelotaElegida && jugadorElegido) {
				pelota.left = -40;
				$("div.instrucciones").hide();
				$("div.eleccion").hide();
				$("div.mensaje").show();
				$("div.zonaCanvas").hide();
				$("div.zonaJuego").show();
				$("div.mensajeFallo").hide();
				GOLES=0;
				LADO_ARQUERO=null;

				//game.paused = false;
				setTimeout(function(){
					$("div.mensaje").hide();
					$("div.zonaCanvas").show();
					if(reinicio) {
						pelota.left = -40;
						GOLES = 0;
						MOVIMIENTO_PELOTA=true;
						FIN_JUEGO = false;
						POSICION_PELOTA = 0;
						POSICION_ORIGINAL_PELOTA = false;
						DISPARO_VALIDO = false;
						CANTIDAD_PELOTAS_JUEGO = 5;
						LADO_ARQUERO=null;
						reinicio=false;
						jugador.top = 350;
						jugador.left = 260;
						ActualizarPosicionInicialPelota();
						$(".pelotaScore").show();

						var vid = document.getElementById("estadio");
						vid.loop = true;
						vid.load();
						vid.play();

					} else {
						game.start();

						var vid = document.getElementById("estadio");
						vid.loop = true;
						vid.load();
						vid.play();

						//game.playSound('estadio', true);
					}
					
				}, 1500);
			}
		});

		$(".btnRegresar").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			$("div.instrucciones").hide();
		});		

		$("div.mensajeGol a").on("click", function(e){
			e.preventDefault();

			FB.ui({
			  method: 'feed',
			  link: 'https://www.facebook.com/cdsperu/app_822915474464976',
			  caption: '¡Juega con Cruz del Sur y GANA!',
			  picture: 'https://www.ayasolutions.com/clientes/facebook/cruzdelsur/tiros/imagenes/golazo.jpg',
			  description: 'Juega en nuestra aplicación y gana pasaje y estadía para que puedas disfrutar de la final de la Copa América en el Hotel Las Dunas de Ica.'
			}, function(response){});

		});

		$("div.mensajeFallo a, div.btnVolver").on("click", function(e){
			e.preventDefault();
			CANTIDAD_PELOTAS_JUEGO = 3;
			FIN_JUEGO = false;
			reinicio=true;
			pelota.left = -40;
			$("div.instrucciones").hide();
			$("div.eleccion").show();
			$("div.mensaje").hide();
			$("div.zonaCanvas").hide();
			$("div.zonaJuego").hide();	
			$("div.mensajeFallo").hide();		
			$("div.mensajeGol").hide();		
		});

		$(".terminos").on("click", function(e){
			e.preventDefault();
			Custombox.open({
               	target: '#modal',
               	effect: 'sign'
            });			
		});

	}
)