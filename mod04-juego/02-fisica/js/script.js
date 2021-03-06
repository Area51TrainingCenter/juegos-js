var JuegoEstado = {
	init: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignVertically = true;
		this.scale.pageAlignHorizontally = true;

		this.game.physics.startSystem(Phaser.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;
	},
	preload: function(){
		this.load.image("piso", "img/ground.png");
		this.load.image("plataforma", "img/platform.png");
		this.load.spritesheet("jugador", "img/player_spritesheet.png", 28, 30, 5, 1, 1);
	},
	create: function(){
		this.piso = this.game.add.sprite(0, this.game.height-72, "piso");
		this.game.physics.arcade.enable(this.piso);
		this.piso.body.allowGravity = false;
		this.piso.body.immovable = true;

		this.plataforma = this.game.add.sprite(20, 200, "plataforma");
		this.game.physics.arcade.enable(this.plataforma);
		this.plataforma.body.allowGravity = false;
		this.plataforma.body.immovable = true;

		this.jugador = this.game.add.sprite(40, 100, "jugador", 4);
		this.game.physics.arcade.enable(this.jugador);
	},
	update: function(){
		this.game.physics.arcade.collide(this.jugador, this.plataforma);
		this.game.physics.arcade.collide(this.jugador, this.piso);
	}

};

var game = new Phaser.Game(360, 592, Phaser.AUTO);
game.state.add("JuegoEstado", JuegoEstado);
game.state.start("JuegoEstado");