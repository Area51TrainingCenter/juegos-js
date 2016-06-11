var HomeEstado = {
	init: function(mensaje){
		this.mensaje = mensaje;
	},
	create: function(){
		this.fondo = this.game.add.sprite(0,0,"fondo");
		this.fondo.inputEnabled = true;
		this.fondo.events.onInputDown.add(function(){
			this.game.state.start("JuegoEstado");
		}, this);

		var estilos = {
			font: "50px bold Verdana",
			fill: "red",
			align: "center"
		};

		var textoAccion = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Clic para empezar", estilos);
		textoAccion.anchor.set(0.5);

		if(this.mensaje) {
			var estilos = {
				font: "50px bold Verdana",
				fill: "green",
				align: "center"
			};

			var textoMensaje = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 150, this.mensaje, estilos);
			textoMensaje.anchor.set(0.5);			
		}
	}
}