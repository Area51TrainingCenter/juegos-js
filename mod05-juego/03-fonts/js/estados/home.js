var Juego = Juego || {};

Juego.HomeEstado = {
	create: function(){
		// Juego.game.state.start("AccionEstado");
		this.fondo = this.game.add.tileSprite(0,0, this.game.width, 512, "fondo");
		this.fondo.autoScroll(-100,0);

		this.primerPlano = this.game.add.tileSprite(0, 470, this.game.width, this.game.height-533, "primerPlano");
		this.primerPlano.autoScroll(-100, 0);

		this.piso = this.game.add.tileSprite(0, this.game.height-73, this.game.width, 73, "piso");
		this.piso.autoScroll(-400, 0);

		this.mensaje = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY, "cr", "Clic para empezar", 50);
		this.mensaje.anchor.setTo(.5);
	},
	update: function(){
		
	}











}