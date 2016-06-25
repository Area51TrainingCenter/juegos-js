var Juego = Juego || {};

Juego.CargadorEstado = {
	init: function(){
	    this.barra = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'barra');
	    this.barra.anchor.setTo(0.5);
	    this.barra.scale.setTo(3);	

	    this.load.setPreloadSprite(this.barra);	
	},
	preload: function(){
	    this.load.image('plataforma', 'img/platform.png');
	    this.load.image('meta', 'img/goal.png');
	    this.load.image('enemigo', 'img/slime.png');
	    this.load.spritesheet('jugador', 'img/player_spritesheet.png', 28, 30, 5, 1, 1); 
	    this.load.image('arrowButton', 'img/arrowButton.png');    
	    this.load.image('actionButton', 'img/actionButton.png');

	    this.load.image("mapaJuego", "img/tiles_spritesheet.png");
	    this.load.tilemap("nivel1", "assets/nivel1.json", null, Phaser.Tilemap.TILED_JSON);   		
	    this.load.tilemap("nivel2", "assets/nivel2.json", null, Phaser.Tilemap.TILED_JSON);   		
	},
	create: function(){
		Juego.game.state.start("AccionEstado");
	}
}