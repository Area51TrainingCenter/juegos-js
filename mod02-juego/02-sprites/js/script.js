var JuegoEstado = {
	preload: function(){
		this.load.image("fondo", "img/fondo.png");
	},
	create: function(){
		this.game.add.sprite(0, 0, "fondo");
	}
};

var game = new Phaser.Game(722, 642, Phaser.AUTO);
game.state.add("JuegoEstado", JuegoEstado);

game.state.start("JuegoEstado");