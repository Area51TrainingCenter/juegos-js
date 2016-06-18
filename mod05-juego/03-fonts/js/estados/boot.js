var Juego = Juego || {};

Juego.BootEstado = {
	init: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.physics.startSystem(Phaser.ARCADE);
		this.game.physics.arcade.gravity.y = 400;
	},
	preload: function() {
		this.load.image("logo", "img/logo.png");
		this.load.image("barra", "img/preloader-bar.png");
	},
	create: function(){
		Juego.game.state.start("PrecargaEstado");
	}

}