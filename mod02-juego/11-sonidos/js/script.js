var MARGEN_FLECHA = 80;

var JuegoEstado = {
	init: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignVertically = true;
		this.scale.pageAlignHorizontally = true;

		this.mamasData = [
			{clave: "mama01", imagen: "img/personaje01.png", mensaje: "Hola, soy la Mamá 01"},
			{clave: "mama02", imagen: "img/personaje02.png", mensaje: "Hola, soy la Mamá 02"},
			{clave: "mama03", imagen: "img/personaje03.png", mensaje: "Hola, soy la Mamá 03"},
			{clave: "mama04", imagen: "img/personaje04.png", mensaje: "Hola, soy la Mamá 04"},
			{clave: "mama05", imagen: "img/personaje05.png", mensaje: "Hola, soy la Mamá 05"},
			{clave: "mama06", imagen: "img/personaje06.png", mensaje: "Hola, soy la Mamá 06"},
			{clave: "mama07", imagen: "img/personaje07.png", mensaje: "Hola, soy la Mamá 07"}
		];

		this.mamaMoviendose = false;
	},
	preload: function(){
		this.load.image("fondo", "img/fondo.png");
		this.load.image("flecha", "img/flecha.png");
		this.load.audio("sonido", ["audios/sonido.mp3", "audios/sonido.ogg"]);

		this.mamasData.forEach(function(mama){
			this.load.image(mama.clave, mama.imagen);
		}, this);
	},
	create: function(){
		this.fondo = this.game.add.sprite(0, 0, "fondo");
		this.sonido = this.game.add.audio("sonido");

		this.grupoMamas = this.game.add.group();

		this.mamasData.forEach(function(mama){
			var objMama = this.grupoMamas.create(-64, this.game.world.centerY, mama.clave);
			objMama.customParams = {texto: mama.mensaje};
			objMama.anchor.setTo(0.5, 0.5);
		}, this);

		this.mamaActual = this.grupoMamas.next();
		this.mamaActual = this.grupoMamas.previous();
		this.mamaActual.position.x  = this.game.world.centerX;

		this.mostrarMensaje(this.mamaActual);

		this.flechaIzq = this.game.add.sprite(MARGEN_FLECHA, this.game.world.centerY, "flecha");
		this.flechaIzq.anchor.setTo(0.5, 0.5);
		this.flechaIzq.customParams = {direccion: -1};
		this.flechaIzq.inputEnabled = true;
		this.flechaIzq.input.pixelPerfectClick = true;
		this.flechaIzq.events.onInputDown.add(this.cambiarPersonaje, this);

		this.flechaDer = this.game.add.sprite(this.game.width-MARGEN_FLECHA, this.game.world.centerY, "flecha");
		this.flechaDer.anchor.setTo(0.5, 0.5);
		this.flechaDer.scale.setTo(-1, 1);
		this.flechaDer.customParams = {direccion: 1};
		this.flechaDer.inputEnabled = true;
		this.flechaDer.input.pixelPerfectClick = true;
		this.flechaDer.events.onInputDown.add(this.cambiarPersonaje, this);
	},
	update: function(){

	},
	cambiarPersonaje: function(sprite, evento){
		if(this.mamaMoviendose) return

		this.mamaMoviendose = true;

		this.texto.visible = false;

		var direccion = sprite.customParams.direccion;
		var nuevaMama;
		var posXMamaNueva;
		var posXMamaActual;

		if(direccion==-1) {
			nuevaMama = this.grupoMamas.next();
			posXMamaNueva = this.game.width + nuevaMama.width/2;
			posXMamaActual = -this.mamaActual.width/2;
		} else {
			nuevaMama = this.grupoMamas.previous();
			posXMamaNueva = -nuevaMama.width/2;
			posXMamaActual = this.game.width + this.mamaActual.width/2;
		};

		nuevaMama.position.x = posXMamaNueva;

		var animacionMamaActual = this.game.add.tween(this.mamaActual);
		animacionMamaActual.to({x: posXMamaActual}, 1000);
		animacionMamaActual.start();

		var animacionMamaNueva = this.game.add.tween(nuevaMama);
		animacionMamaNueva.to({x: this.game.world.centerX}, 1000);
		animacionMamaNueva.onComplete.add(function(){
			this.mamaMoviendose = false;
			this.mamaActual = nuevaMama;
			this.mostrarMensaje(this.mamaActual);
			this.sonido.play();
		}, this);

		animacionMamaNueva.start();	
	},
	mostrarMensaje: function(mama){
		var estilo = {
			font: "bold 30px Arial",
			fill: "blue",
			align: "center"
		};

		if(!this.texto) {
			this.texto = this.game.add.text(this.game.world.centerX, this.game.height-120,'', estilo);
			this.texto.anchor.setTo(0.5, 0.5);
		}

		this.texto.setText(mama.customParams.texto);
		this.texto.visible = true;
	}
};

var game = new Phaser.Game(722, 642, Phaser.AUTO);

game.state.add("juegoEstado", JuegoEstado);
game.state.start("juegoEstado");