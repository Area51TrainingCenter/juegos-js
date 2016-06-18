var Juego = Juego || {};

Juego.Moneda = function(game, x, y, clave){
	Phaser.Sprite.call(this, game, x, y, clave);

	this.anchor.setTo(.5);
	this.scale.setTo(.8);
	this.animations.add("spin");

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;

	this.checkWorldBounds = true;
	this.outOfBoundsKill = true;

	this.events.onKilled.add(this.onKill, this);
	this.events.onRevived.add(this.onRevive, this);
};

Juego.Moneda.prototype = Object.create(Phaser.Sprite.prototype);
Juego.Moneda.prototype.constructor = Juego.Moneda;

Juego.Moneda.prototype.onKill = function(){
	this.animations.stop();
	this.frame = 0;
};

Juego.Moneda.prototype.onRevive = function(){
	this.animations.play("spin", 10, true);
	this.body.velocity.x = -200;
}





