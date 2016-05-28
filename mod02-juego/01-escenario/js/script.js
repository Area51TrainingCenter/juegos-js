var JuegoEstado = {
	// Aquí se inicializan las variables
	init: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},
	// Aquí se cargan las imágenes, audios, etc.
	preload: function(){
		console.log("función preload");
	},
	// Aquí se dibuja, se anima, etc.
	create: function(){
		console.log("función create");
	},
	// Esta función se ejecuta muchas veces
	update: function(){
		console.log("función update");
	}
}


var game = new Phaser.Game(722, 642, Phaser.AUTO);
game.state.add("JuegoEstado", JuegoEstado);

game.state.start("JuegoEstado");

