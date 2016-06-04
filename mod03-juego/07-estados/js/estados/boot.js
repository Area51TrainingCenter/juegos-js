var BootEstado = {
	init: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},
	preload: function(){
		this.load.image("logo", "img/logo.png");
		this.load.image("barra", "img/barra.png");
	},
	create: function(){
		this.game.stage.backgroundColor = "#000";
		game.state.start("CargadorEstado");
	}
};