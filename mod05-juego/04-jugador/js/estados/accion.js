var Juego = Juego || {};

Juego.AccionEstado = {
	create: function(){
		this.fondo = this.game.add.tileSprite(0,0, this.game.width, 512, "fondo");
		this.fondo.autoScroll(-100,0);

		this.primerPlano = this.game.add.tileSprite(0, 470, this.game.width, this.game.height-533, "primerPlano");
		this.primerPlano.autoScroll(-100, 0);

		this.piso = this.game.add.tileSprite(0, this.game.height-73, this.game.width, 73, "piso");
		this.piso.autoScroll(-400, 0);
		this.game.physics.arcade.enableBody(this.piso);
		this.piso.body.allowGravity = false;
		this.piso.body.immovable = true;

		this.jugador = this.game.add.sprite(200, this.game.world.centerY, "jugador");
		this.jugador.anchor.setTo(.5);
		this.jugador.scale.setTo(.3);
		this.jugador.animations.add("volar", [0, 1, 2, 3, 2, 1], 8, true);
		this.jugador.play("volar");
		this.game.physics.arcade.enableBody(this.jugador);
		this.jugador.body.collideWorldBounds = true;
	},
	update: function(){
		this.game.physics.arcade.collide(this.jugador, this.piso, this.colisionPiso, null, this);

		if(this.game.input.activePointer.isDown){
			this.jugador.body.velocity.y -= 25;
		}
	},
	colisionPiso: function(jugador, piso){
		jugador.body.velocity.y = -200;
	}








}