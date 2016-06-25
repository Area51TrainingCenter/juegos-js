var Juego = Juego || {};

Juego.BootEstado = {
	init: function(){
	    this.game.stage.backgroundColor = '#fff';  
	    
	    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    
	    this.scale.forceOrientation(true, false);

	    this.scale.pageAlignHorizontally = true;
	    this.scale.pageAlignVertically = true;	
	    
    	this.game.physics.startSystem(Phaser.Physics.ARCADE);    	    	
	},
	preload: function(){
		this.load.image('barra', 'img/preloader-bar.png');		
	},
	create: function(){
		Juego.game.state.start('CargadorEstado');
	}
}