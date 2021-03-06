var JuegoEstado = {
	init: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignVertically = true;
		this.scale.pageAlignHorizontally = true;

		this.game.physics.startSystem(Phaser.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;

		this.VELOCIDAD_JUGADOR = 200;
		this.VELOCIDAD_SALTO = 500;

		this.POSICIONY_BOTONES = 535;
	},
	preload: function(){
		this.load.image("piso", "img/ground.png");
		this.load.image("plataforma", "img/platform.png");
		this.load.spritesheet("jugador", "img/player_spritesheet.png", 28, 30, 5, 1, 1);

		this.load.image("flecha", "img/arrowButton.png");
		this.load.image("salto", "img/actionButton.png");	
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

		this.jugador = this.game.add.sprite(40, 100, "jugador", 3);
		this.jugador.customParams = {};
		this.game.physics.arcade.enable(this.jugador);

		this.teclas = this.game.input.keyboard.addKeys({
			LEFT: Phaser.KeyCode.LEFT,
			RIGHT: Phaser.KeyCode.RIGHT,
			UP: Phaser.KeyCode.UP
		});		

		this.cargarControles();
	},
	update: function(){
		this.game.physics.arcade.collide(this.jugador, this.plataforma);
		this.game.physics.arcade.collide(this.jugador, this.piso);

		this.jugador.body.velocity.x = 0;

		if(this.teclas.RIGHT.isDown || this.jugador.customParams.right){
			this.jugador.body.velocity.x = this.VELOCIDAD_JUGADOR;
		} else if(this.teclas.LEFT.isDown || this.jugador.customParams.left) {
			this.jugador.body.velocity.x = -this.VELOCIDAD_JUGADOR;
		}

		if((this.teclas.UP.isDown || this.jugador.customParams.up) && this.jugador.body.touching.down){
			this.jugador.body.velocity.y = -this.VELOCIDAD_SALTO;
		}
	},
	cargarControles: function(){
		this.flechaIzq = this.game.add.sprite(20, this.POSICIONY_BOTONES, "flecha");
		this.flechaDer = this.game.add.sprite(110, this.POSICIONY_BOTONES, "flecha");
		this.saltar = this.game.add.sprite(280, this.POSICIONY_BOTONES, "salto");

		this.flechaIzq.inputEnabled = true;
		this.flechaDer.inputEnabled = true;
		this.saltar.inputEnabled = true;

		this.flechaIzq.customParams = {sentido: -1};
		this.flechaDer.customParams = {sentido: 1};

		this.flechaIzq.events.onInputDown.add(this.moverse, this);
		this.flechaDer.events.onInputDown.add(this.moverse, this);
		this.saltar.events.onInputDown.add(this.salto, this);

		this.flechaIzq.events.onInputUp.add(this.parar, this);
		this.flechaDer.events.onInputUp.add(this.parar, this);
		this.saltar.events.onInputUp.add(this.pararDeSaltar, this);

		this.flechaIzq.alpha = 0.5;
		this.flechaDer.alpha = 0.5;
		this.saltar.alpha = 0.5;
	},
	moverse:function(sprite, evento){
		if(sprite.customParams.sentido==1) {
			this.jugador.customParams.right = true;
		} else {
			this.jugador.customParams.left = true;
		}
			
	},
	salto:function(sprite, evento){
		this.jugador.customParams.up = true;
	},
	parar: function(){
		this.jugador.customParams.right = false;
		this.jugador.customParams.left = false;
	},
	pararDeSaltar: function(){
		this.jugador.customParams.up = false;	
	}

};

var game = new Phaser.Game(360, 592, Phaser.AUTO);
game.state.add("JuegoEstado", JuegoEstado);
game.state.start("JuegoEstado");