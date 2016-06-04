var game = new Game('juegoTiros', 'juego'),
	MOVIMIENTO_JUGADOR = false,
	POSICION_JUGADOR = 0,
	LAST_ADVANCE_JUGADOR = 0,
	MOVIMIENTO_ARQUERO = 0,
	POSICION_ARQUERO = 0,
	LAST_ADVANCE_PORTERO = 0,
	PAGEFLIP_INTERVAL = 100,
	PAGEFLIP_INTERVAL_ARQUERO = 30,
	POSICION_ORIGINAL_ARQUERO = false,
	DISPARO_VALIDO = false,
	GRAVEDAD = 0.2,
	FACTOR_REBOTE = 0.8;
	LADO_ARQUERO = null,

	MOVIMIENTO_STOP = false,

	GOLES = 0,

	CONTADOR_REBOTES=0;

	CANTIDAD_PELOTAS_JUEGO = 5,

	LAST_ADVANCE_PELOTA = 0,
	PAGEFLIP_INTERVAL_PELOTA = 50,
	POSICION_PELOTA = 0,
	POSICION_ORIGINAL_PELOTA = false,
	MOVIMIENTO_PELOTA = true,
	POSICION_INICIAL_PELOTA = 0,
	PELOTA_TIPO = 0,
	DIRECCION_TIRO = 0,
	GOL = false,

	ZONA_DISPARO_LEFT = 52,
	ZONA_DISPARO_TOP = 132,
	ZONA_DISPARO_WIDTH = 90,
	ZONA_DISPARO_HEIGHT = 79,

	PELOTA_ALTURA_MAXIMA = 400,
	PELOTA_ALTURA_MINIMA = 340,

	FIN_JUEGO = false,

	ARCO_LEFT = 207,
	ARCO_TOP = 260,
	ARCO_WIDTH = 299,
	ARCO_HEIGHT = 125,

	FLIP_VOLEA = 500,

	pintarFondo = function (context, x, y) {
		context.drawImage(game.getImage('imagenes/background.jpg'),x,y);
	},
	pintarJugador = function(context) {
		jugador.update(context);
		jugador.paint(context);
	},
	pintarPortero = function(context) {
		portero.update(context);
		portero.paint(context);
	},
	pintarPelota = function(context) {
		pelota.update(context);
		pelota.paint(context);
	},
	jugadorMover = {
	    execute: function (sprite, context, time) {
	         if (!game.paused) {
	         	if(MOVIMIENTO_JUGADOR) {
	         		var tiempo = +new Date();
					if (tiempo - LAST_ADVANCE_JUGADOR > PAGEFLIP_INTERVAL) {
						LAST_ADVANCE_JUGADOR=tiempo;
		         		sprite.painter.advance();
		         		POSICION_JUGADOR++;
		         		if(POSICION_JUGADOR==4) {
		         			MOVIMIENTO_JUGADOR = false;
		         			POSICION_JUGADOR = 0;
		         		}
					}
	         	}
	         }
	      }
	},	
	jugadorPosiciones = [
		{left:0, top:0, width:150, height:211,relativo:false},
		{left:150, top:0, width:150, height:211,relativo:false},
		{left:300, top:0, width:150, height:211,relativo:false},
		{left:450, top:0, width:150, height:211,relativo:false}
	],
    jugador = new Sprite('jugador',
                     new SpriteSheetPainter(jugadorPosiciones, "imagenes/jugador.png"),
                     [jugadorMover]),
	porteroMover = {
	    execute: function (sprite, context, time) {
	         if (!game.paused) {

	         	if(MOVIMIENTO_ARQUERO) {
	         		var tiempo = +new Date();
					if (tiempo - LAST_ADVANCE_PORTERO > PAGEFLIP_INTERVAL_ARQUERO) {
						LAST_ADVANCE_PORTERO=tiempo;


	         			if(DIRECCION_TIRO==1) {
	         				LADO_ARQUERO=1;
	         			} else if(DIRECCION_TIRO==2) {
	         				LADO_ARQUERO=0;
	         			} else {
	         				LADO_ARQUERO=-1;
	         			}

						if(LADO_ARQUERO==0) {
			         		sprite.painter.advance();
						} else if(LADO_ARQUERO==1){
			         		sprite.painter.back();
						};

		         		POSICION_ARQUERO++;
		         		if(POSICION_ARQUERO==11) {
		         			MOVIMIENTO_ARQUERO= false;
		         			POSICION_ARQUERO = 0;
		         			POSICION_ORIGINAL_ARQUERO = true;
		         			if(DIRECCION_TIRO==1) {
		         				LADO_ARQUERO=1;
		         			} else if(DIRECCION_TIRO==2) {
		         				LADO_ARQUERO=0;
		         			} else {
		         				LADO_ARQUERO=-1;
		         			}
		         		}
					}
	         	}
	         }
	      }
	},	
	porteroPosiciones = [
		{left:0, top:0, width:307, height:123,relativo:false},
		{left:307, top:0, width:307, height:123,relativo:false},
		{left:614, top:0, width:307, height:123,relativo:false},
		{left:921, top:0, width:307, height:123,relativo:false},
		{left:1228, top:0, width:307, height:123,relativo:false},
		{left:1535, top:0, width:307, height:123,relativo:false},
		{left:1842, top:0, width:307, height:123,relativo:false},
		{left:2149, top:0, width:307, height:123,relativo:false},
		{left:2456, top:0, width:307, height:123,relativo:false},
		{left:2763, top:0, width:307, height:123,relativo:false},
		{left:3070, top:0, width:307, height:123,relativo:false},
		{left:3377, top:0, width:307, height:123,relativo:false},
		{left:3684, top:0, width:307, height:123,relativo:false},
		{left:3991, top:0, width:307, height:123,relativo:false},
		{left:4298, top:0, width:307, height:123,relativo:false},
		{left:4605, top:0, width:307, height:123,relativo:false},
		{left:4912, top:0, width:307, height:123,relativo:false},
		{left:5219, top:0, width:307, height:123,relativo:false},
		{left:5526, top:0, width:307, height:123,relativo:false},
		{left:5833, top:0, width:307, height:123,relativo:false},
		{left:6140, top:0, width:307, height:123,relativo:false},
		{left:6447, top:0, width:307, height:123,relativo:false},
		{left:6754, top:0, width:307, height:123,relativo:false}
	],	
	portero = new Sprite('portero',
                     new SpriteSheetPainter(porteroPosiciones, "imagenes/portero.png"),
                     [porteroMover]),
	pelotaMover = {
		reducir: function() {
			CANTIDAD_PELOTAS_JUEGO--;
			if(CANTIDAD_PELOTAS_JUEGO==0) {
				$("div.pelotaScore").hide();
				VerificarGol();
				FIN_JUEGO = true;
			} else {
				$("div.pelotaScore").eq(CANTIDAD_PELOTAS_JUEGO).hide();
			}

			if(GOL) {
				pelota.left = -40;
				GOL = false;
			}
		},
	    execute: function (sprite, context, time) {
	         if (!game.paused && !FIN_JUEGO) {
	        	if(MOVIMIENTO_PELOTA){
		         	if(DISPARO_VALIDO==false) {
			         	if(sprite.top+sprite.height+sprite.velocityY > 550) {
			         		sprite.velocityY *= -FACTOR_REBOTE;
			         	} else {
			         		sprite.top += sprite.velocityY;
			         		sprite.velocityY += GRAVEDAD;
			         	}

			         	if(sprite.left+sprite.width+sprite.velocityX > 722) {
			         		sprite.left=-sprite.width;
			         		sprite.velocityY = 3;
			         		sprite.top = Math.floor(Math.random()*(PELOTA_ALTURA_MAXIMA-PELOTA_ALTURA_MINIMA+1)+PELOTA_ALTURA_MINIMA);
			         		this.reducir();
			         	} else {
			         		sprite.left+=sprite.velocityX;
			         	}
		         	} else {

		         		var tiempo = +new Date();
						if (tiempo - LAST_ADVANCE_PELOTA > PAGEFLIP_INTERVAL_PELOTA) {
							LAST_ADVANCE_PELOTA=tiempo;

			         		if(POSICION_PELOTA<4) {
			         			sprite.painter.advance();
			         		}

			         		POSICION_PELOTA++;
			         		if(POSICION_PELOTA==5) {
			         			POSICION_PELOTA = 0;
			         			POSICION_ORIGINAL_PELOTA = true;
			         			MOVIMIENTO_PELOTA = false;
			         			this.reducir();
			         		}
						}
		         	}
		        }
	        }
	    }
	},	
	pelotaPosiciones = [
		/*A la derecha*/
		{left:0, top:164,width:25,height:25,relativo:true},
		{left:30, top:120,width:25,height:25,relativo:true},
		{left:61, top:75,width:24,height:24,relativo:true},
		{left:88, top:35,width:19,height:19,relativo:true},
		{left:113, top:0,width:15,height:15,relativo:true},

		{left:128, top:164,width:25,height:25,relativo:true},
		{left:158, top:120,width:25,height:25,relativo:true},
		{left:189, top:75,width:24,height:24,relativo:true},
		{left:216, top:35,width:19,height:19,relativo:true},
		{left:241, top:0,width:15,height:15,relativo:true},

		{left:258, top:164,width:25,height:25,relativo:true},
		{left:288, top:120,width:25,height:25,relativo:true},
		{left:319, top:75,width:24,height:24,relativo:true},
		{left:343, top:35,width:19,height:19,relativo:true},
		{left:371, top:0,width:15,height:15,relativo:true},

		/*A la izquierda*/
		{left:491, top:164,width:25,height:25,relativo:true},
		{left:458, top:120,width:25,height:25,relativo:true},
		{left:429, top:75,width:24,height:24,relativo:true},
		{left:406, top:35,width:19,height:19,relativo:true},
		{left:386, top:0,width:15,height:15,relativo:true},

		{left:620, top:164,width:25,height:25,relativo:true},
		{left:589, top:120,width:25,height:25,relativo:true},
		{left:561, top:75,width:24,height:24,relativo:true},
		{left:535, top:35,width:19,height:19,relativo:true},
		{left:515, top:0,width:15,height:15,relativo:true},

		{left:751, top:164,width:25,height:25,relativo:true},
		{left:721, top:120,width:25,height:25,relativo:true},
		{left:692, top:75,width:24,height:24,relativo:true},
		{left:665, top:35,width:19,height:19,relativo:true},
		{left:646, top:0,width:15,height:15,relativo:true},

		/*Al centro*/
		{left:880, top:164,width:25,height:25,relativo:true},
		{left:878, top:120,width:25,height:25,relativo:true},
		{left:880, top:75,width:24,height:24,relativo:true},
		{left:883, top:35,width:19,height:19,relativo:true},
		{left:886, top:0,width:15,height:15,relativo:true},

		{left:1008, top:164,width:25,height:25,relativo:true},
		{left:1009, top:120,width:25,height:25,relativo:true},
		{left:1010, top:75,width:24,height:24,relativo:true},
		{left:1012, top:35,width:19,height:19,relativo:true},
		{left:1016, top:0,width:15,height:15,relativo:true},

		{left:1139, top:164,width:25,height:25,relativo:true},
		{left:1139, top:120,width:25,height:25,relativo:true},
		{left:1141, top:75,width:24,height:24,relativo:true},
		{left:1142, top:35,width:19,height:19,relativo:true},
		{left:1147, top:0,width:15,height:15,relativo:true}
	],
	pelota = new Sprite('pelota',
                     new SpriteSheetPainter(pelotaPosiciones, "imagenes/pelota.png"),
                     [pelotaMover]);
jugador.top = 350;
jugador.left = 260;
jugador.width = 150;
jugador.height = 211;
jugador.velocityX = 10;


portero.top = 295;
portero.left = 210;
portero.width = 307;
portero.height = 123;
portero.velocityX = 220;

pelota.top = Math.floor(Math.random()*(PELOTA_ALTURA_MAXIMA-PELOTA_ALTURA_MINIMA+1)+PELOTA_ALTURA_MINIMA);;
pelota.left = -40;
pelota.width = 25;
pelota.height = 25;
pelota.velocityX = 3;
pelota.velocityY = 1;

var lastKeyListenerTime = 0;

game.addKeyListener(
   {
      key: 'left arrow',
      listener: function () {
         var now;

         if (game.paused || FIN_JUEGO)
            return;

         jugador.left-=jugador.velocityX;
      }
   }
);

game.addKeyListener(
   {
      key: 'right arrow',
      listener: function () {
         var now;

         if (game.paused || FIN_JUEGO)
            return;

         jugador.left+=jugador.velocityX;
      }
   }
);

game.addKeyListener(
   {
      key: 'up arrow',
      listener: function () {
         var now;

         if (game.paused || FIN_JUEGO)
            return;

         now = +new Date();
         if (now - lastKeyListenerTime > 80) { // throttle
            lastKeyListenerTime = now;
       
         }
      }
   }
);

game.addKeyListener(
   {
      key: 'space',
      listener: function () {
         var now;

         if (game.paused || FIN_JUEGO)
            return;

         now = +new Date();
         if (now - lastKeyListenerTime > FLIP_VOLEA) { // throttle
            lastKeyListenerTime = now;
            if(!MOVIMIENTO_JUGADOR && !MOVIMIENTO_STOP) {
            	pelota.leftOriginal = pelota.left;
            	pelota.topOriginal = pelota.top;
            	MOVIMIENTO_PELOTA = true;
            	MOVIMIENTO_JUGADOR = true;

            	var centroPelotaX = pelota.left + pelota.width/2;
            	var centroPelotaY = pelota.top + pelota.height/2;

            	var ladoIzquierdo = jugador.left + ZONA_DISPARO_LEFT;
            	var ladoDerecho = ladoIzquierdo + ZONA_DISPARO_WIDTH;
            	var ladoSuperior = jugador.top + ZONA_DISPARO_TOP;
            	var ladoInferior = ladoSuperior + ZONA_DISPARO_HEIGHT;

            	if(ladoIzquierdo<=centroPelotaX && ladoDerecho>=centroPelotaX && ladoSuperior<=centroPelotaY && ladoInferior>=centroPelotaY) {

            		ladoIzquierdo = jugador.left + ZONA_DISPARO_LEFT;
            		ladoDerecho = ladoIzquierdo + ZONA_DISPARO_WIDTH/2;
            		if(ladoIzquierdo<=centroPelotaX && ladoDerecho>=centroPelotaX) {
            			DIRECCION_TIRO=1;
            		}


            		ladoIzquierdo = jugador.left + ZONA_DISPARO_LEFT+ ZONA_DISPARO_WIDTH/2;
            		ladoDerecho = ladoIzquierdo + ZONA_DISPARO_WIDTH/2;
            		if(ladoIzquierdo<=centroPelotaX && ladoDerecho>=centroPelotaX) {
            			DIRECCION_TIRO=2;
            		}


            		pelota.painter.position(5*PELOTA_TIPO+15*DIRECCION_TIRO);

	            	MOVIMIENTO_ARQUERO = true;
	            	DISPARO_VALIDO = true;
	            	game.playSound('patada', false);

                }


            }
         }
      }
   }
);




game.paintUnderSprites = function () {
	pintarFondo(game.context,0,0);
}

game.paintOverSprites = function () {
	pintarPortero(game.context);
	pintarPelota(game.context);
	pintarJugador(game.context);
}



game.startAnimate = function (time) {
	if(LAST_ADVANCE_JUGADOR==0) {
		portero.painter.position(11);
		pelota.painter.position(POSICION_INICIAL_PELOTA);
		LAST_ADVANCE_JUGADOR = +new Date();	
	}

	if(LAST_ADVANCE_PORTERO==0) {
		LAST_ADVANCE_PORTERO = +new Date();	
	}

	if(POSICION_ORIGINAL_ARQUERO) {
		POSICION_ORIGINAL_ARQUERO = false;		

		FueGol();

		setTimeout(
			function() {
				if(CANTIDAD_PELOTAS_JUEGO!=0) {
					VerificarGol();	
				}
				

				portero.painter.position(11);
       			pelota.painter.position(POSICION_INICIAL_PELOTA);
         		pelota.left=-40;
         		pelota.velocityY = 3;
         		pelota.top = Math.floor(Math.random()*(PELOTA_ALTURA_MAXIMA-PELOTA_ALTURA_MINIMA+1)+PELOTA_ALTURA_MINIMA);;
			},
			100
		);


	}

}

function ActualizarPosicionInicialPelota() {
	pelota.painter.position(POSICION_INICIAL_PELOTA);
}

function VerificarGol() {

	var centroX = pelota.leftActual+pelota.width/2;
	var centroY = pelota.topActual+pelota.height/2;

	var ladoIzquierdo = ARCO_LEFT;
	var ladoDerecho = ARCO_LEFT+ARCO_WIDTH;
	var ladoSuperior = ARCO_TOP;
	var ladoInferior = ARCO_TOP+ARCO_HEIGHT;

	if(ladoIzquierdo<=centroX && centroX<=ladoDerecho && ladoSuperior<=centroY && centroY<=ladoInferior) {
				var vid = document.getElementById("sisepuede");
				vid.pause();			

				var vid = document.getElementById("gol");
				vid.load();
				vid.play();		

				GOLES++;	

	
				if(GOLES==3) {
					setTimeout(function(){
						$("div.mensajeGol").show();			
					}, 1800);				
				} else {

					if(CANTIDAD_PELOTAS_JUEGO==0) {
						var vid = document.getElementById("sisepuede");
						vid.pause();

						$("div.mensajeFallo").show();						
					} else {
						if(GOLES==2) {
							MOVIMIENTO_STOP=true;
							$("div.falta1").show();
						}

						if(GOLES==1) {
							MOVIMIENTO_STOP=true;
							$("div.falta2").show();	
						}


						setTimeout(function(){
							$("div.falta1").hide();	
							$("div.falta2").hide();	

							LADO_ARQUERO=null;
							DISPARO_VALIDO = false;
							MOVIMIENTO_PELOTA = true;
							MOVIMIENTO_STOP=false;
						},1500);						
					}

				}

			if(GOLES==3) {
				var url = "gano.php?id="+ facebookId;
				var jqxhr = $.get(url,function(data) {});
			};

		
	} else {
		if(CANTIDAD_PELOTAS_JUEGO>0 && CANTIDAD_PELOTAS_JUEGO<5) {

				MOVIMIENTO_STOP=true;
				$("div.tiro"+CANTIDAD_PELOTAS_JUEGO).show();

				CONTADOR_REBOTES=0;

				if(GOLES==2) {
					var vid = document.getElementById("sisepuede");
					vid.load();
					vid.play();		
				}

			setTimeout(function(){
				$("div.tiro1").hide();
				$("div.tiro2").hide();
				$("div.tiro3").hide();
				$("div.tiro4").hide();
				LADO_ARQUERO=null;
				DISPARO_VALIDO = false;
				MOVIMIENTO_PELOTA = true;
				MOVIMIENTO_STOP=false;
			},1000);


		} else {
			CONTADOR_REBOTES=0;

			var vid = document.getElementById("estadio");
			vid.pause();		
			var vid = document.getElementById("sisepuede");
			vid.pause();

			$("div.mensajeFallo").show();
		}

	}
}

function FueGol() {
	var centroX = pelota.leftActual+pelota.width/2;
	var centroY = pelota.topActual+pelota.height/2;

	var ladoIzquierdo = ARCO_LEFT;
	var ladoDerecho = ARCO_LEFT+ARCO_WIDTH;
	var ladoSuperior = ARCO_TOP;
	var ladoInferior = ARCO_TOP+ARCO_HEIGHT;

	if(ladoIzquierdo<=centroX && centroX<=ladoDerecho && ladoSuperior<=centroY && centroY<=ladoInferior) {
		GOL = true;
	} else {
		GOL = false;
	}
}

//Cargar imágenes
game.queueImage('imagenes/background.jpg');
game.queueImage('imagenes/jugador.png');
game.queueImage('imagenes/portero.png');
game.queueImage('imagenes/pelota.png');

var interval = setInterval( function (e) {
   var percentComplete = game.loadImages();

   if (percentComplete >= 100) {
      clearInterval(interval);
   }
}, 16);