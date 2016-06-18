var Juego = Juego || {};

Juego.Misil = function(game, x, y, clave){
	Phaser.Sprite.call(this, game, x, y, clave);

	this.scale.setTo(.1);
	this.anchor.setTo(.5);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;

	this.checkWorldBounds = true;
	this.outOfBoundsKill = true;

	this.events.onRevived.add(this.onRevive, this);
};

Juego.Misil.prototype = Object.create(Phaser.Sprite.prototype);
Juego.Misil.prototype.constructor = Juego.Misil;

Juego.Misil.prototype.onRevive = function(){
	var animacion = this.game.add.tween(this);
	// propiedades, duración (ms), función de animación, autoplay, retardo (ms), loop, yo-yo
	animacion.to({y: this.y+16}, 500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

	this.body.velocity.x = -400;

	/*
		this.game.add.tween(this).to({y: this.y+16}, 500, Phaser.Easing.LINEAR.NONE, true, 0, Infinity, true);
	*/

}




