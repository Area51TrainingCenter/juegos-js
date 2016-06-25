var Juego = Juego || {};

Juego.Escalamiento = {
	obtenerDimensiones: function(anchoMax, altoMax){
		var ancho, alto;

		var anchoDispositivo = window.innerWidth * window.devicePixelRatio,
			altoDispositivo = window.innerHeight * window.devicePixelRatio;

		ancho = Math.max(anchoDispositivo, altoDispositivo);
		alto = Math.min(anchoDispositivo, altoDispositivo);

		if(ancho > anchoMax) {
			var ratio = anchoMax / ancho;

			ancho *= ratio;
			alto *= ratio;
		}

		if(alto > altoMax) {
			var ratio = altoMax / alto;

			ancho *= ratio;
			alto *= ratio;
		}


		return {
			ancho: ancho,
			alto: alto
		}


	}

}