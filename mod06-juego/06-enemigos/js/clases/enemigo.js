var Juego = Juego || {};

Juego.Enemigo = function(game, x, y, velocidad, mapa, clave) {
	Phaser.Sprite.call(this, game, x, y, clave);

	this.game = game;
	this.anchor.setTo(.5);

	this.tilemap = mapa;

	this.game.physics.arcade.enableBody(this);
	this.body.collideWorldBounds = true;
	this.body.bounce.setTo(1, 0);
	this.body.velocity.x = velocidad;
}

Juego.Enemigo.prototype = Object.create(Phaser.Sprite.prototype);
Juego.Enemigo.prototype.constructor = Juego.Enemigo;

Juego.Enemigo.prototype.update = function(){
	if(this.body.velocity.x > 0) {
		this.scale.setTo(-1, 1);
	} else {
		this.scale.setTo(1, 1);
	}
}




