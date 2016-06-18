var Juego = Juego || {};

Juego.Tablero = function(game){
	Phaser.Group.call(this, game);
};

Juego.Tablero.prototype = Object.create(Phaser.Group.prototype);
Juego.Tablero.prototype.constructor = Juego.Tablero;	

Juego.Tablero.prototype.mostrar = function(puntaje){
	var bmp, fondo;

	bmp = this.game.add.bitmapData(this.game.width, this.game.height);
	bmp.ctx.fillStyle = "#000";
	bmp.ctx.fillRect(0, 0, this.game.width, this.game.height);

	fondo = this.game.add.sprite(0, 0, bmp);
	fondo.alpha = .5;

	this.add(fondo);

	if(localStorage.puntaje) {
		if(puntaje > localStorage.puntaje) {
			localStorage.puntaje = puntaje;
		}
	} else {
		localStorage.puntaje = puntaje;
	}

	this.mensaje1 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY, 'cr', 'Tu puntaje es ' + puntaje, 50);
	this.mensaje1.anchor.setTo(.5);
	this.add(this.mensaje1);

	this.mensaje2 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 100, 'cr', 'El mayor puntaje es ' + localStorage.puntaje, 50);
	this.mensaje2.anchor.setTo(.5);
	this.add(this.mensaje2);


	this.y = this.game.height;

	this.game.add.tween(this).to({y:0}, 500, Phaser.Easing.Bounce.Out, true)

	this.game.input.onDown.addOnce(this.reiniciar, this);
}

Juego.Tablero.prototype.reiniciar = function(){
	this.game.state.start("AccionEstado", true, false);
}






