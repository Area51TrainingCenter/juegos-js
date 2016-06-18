var Juego = Juego || {};

Juego.PrecargaEstado = {
	preload: function(){
		this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
		this.logo.anchor.setTo(.5);

		this.barra = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, "barra");
		this.barra.anchor.setTo(.5);

		this.load.setPreloadSprite(this.barra);

		this.load.image("piso", "img/ground.png");
		this.load.image("primerPlano", "img/foreground.png");
		this.load.image("fondo", "img/background.png");

		this.load.spritesheet("jugador", "img/jetpack-ps.png", 229, 296, 4);
		this.load.spritesheet("moneda", "img/coins-ps.png", 51, 51, 7);
		this.load.spritesheet("misil", "img/missiles-ps.png", 361, 218, 4);
	},
	create: function(){
		Juego.game.state.start("HomeEstado");
	}
	
}