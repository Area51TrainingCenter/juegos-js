var CargadorEstado = {
	preload: function(){
		this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
		this.logo.anchor.setTo(0.5, 0.5);

		this.barra = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 140, "barra");
		this.barra.anchor.setTo(0.5, 0.5);

		this.load.image("fondo", "img/fondo.png");
		this.load.image("dulce", "img/dulce.png");
		this.load.image("manzana", "img/manzana.png");
		this.load.image("pato", "img/pato.png");
		this.load.image("rotar", "img/rotar.png");

		this.load.spritesheet("mascota", "img/mascota.png", 97, 83, 5, 1, 1);

		this.load.setPreloadSprite(this.barra);
	},
	create: function(){
		game.state.start("HomeEstado");
	}
}