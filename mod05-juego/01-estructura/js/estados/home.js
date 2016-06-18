var Juego = Juego || {};

Juego.HomeEstado = {
	create: function(){
		Juego.game.state.start("AccionEstado");
	}
}