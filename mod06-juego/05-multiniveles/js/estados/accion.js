var Juego = Juego || {};

Juego.AccionEstado = {
  init: function(nuevoNivel) {    

    this.VELOCIDAD_CORRER = 180;
    this.VELOCIDAD_SALTAR = 500;

    if(nuevoNivel) {
      this.nivelActual = nuevoNivel;
    } else {
      this.nivelActual = 1;  
    }

    

    this.game.physics.arcade.gravity.y = 1000;    
    
    this.cursors = this.game.input.keyboard.createCursorKeys();
  },
  create: function() {
    this.cargarNivel();
    
    this.controles();    
  },   
  update: function() {    
    //this.game.physics.arcade.collide(this.jugador, this.plataforma); 
    this.game.physics.arcade.collide(this.jugador, this.capaColisiones);
    this.game.physics.arcade.overlap(this.jugador, this.meta, this.pasarNivel, null, this);

    this.jugador.body.velocity.x = 0;

    if(this.cursors.left.isDown || this.jugador.customParams.estaMoviendoIzquierda) {
      this.jugador.body.velocity.x = -this.VELOCIDAD_CORRER;
      this.jugador.scale.setTo(1, 1);
      this.jugador.play('caminar');
    }
    else if(this.cursors.right.isDown || this.jugador.customParams.estaMoviendoDerecha) {
      this.jugador.body.velocity.x = this.VELOCIDAD_CORRER;
      this.jugador.scale.setTo(-1, 1);
      this.jugador.play('caminar');
    }
    else {
      this.jugador.animations.stop();
      this.jugador.frame = 3;
    }

    if((this.cursors.up.isDown || this.jugador.customParams.salto) && (this.jugador.body.blocked.down || this.jugador.body.touching.down)) {
      this.jugador.body.velocity.y = -this.VELOCIDAD_SALTAR;
      this.jugador.customParams.salto = false;
    }
  },
  cargarNivel: function(){  
    this.map = this.game.add.tilemap("nivel" + this.nivelActual);
    this.map.addTilesetImage("patron-stylesheet", "mapaJuego");

    this.capaFondo = this.map.createLayer("capaFondo");
    this.capaColisiones = this.map.createLayer("capaColisiones");

    //this.capaColisiones.debug = true;

    this.capaColisiones.resizeWorld();

    this.map.setCollisionBetween(1, 160, true, "capaColisiones")

    this.jugadorArreglo = this.obtenerElementoPorTipo("jugador", this.map, "capaObjetos");


    this.jugador = this.add.sprite(this.jugadorArreglo[0].x, this.jugadorArreglo[0].y, 'jugador', 3);
    this.jugador.anchor.setTo(0.5);
    this.jugador.animations.add('caminar', [0, 1, 2, 1], 6, true);
    this.game.physics.arcade.enable(this.jugador);
    this.jugador.customParams = {};
    this.jugador.body.collideWorldBounds = true;

    this.metaArreglo = this.obtenerElementoPorTipo("meta", this.map, "capaObjetos");

    console.log(this.metaArreglo);

    this.meta = this.game.add.sprite(this.metaArreglo[0].x, this.metaArreglo[0].y, this.metaArreglo[0].properties.clave);
    this.meta.anchor.setTo(.5);
    this.game.physics.arcade.enable(this.meta);
    this.meta.body.allowGravity = false;
    this.meta.siguienteNivel = this.metaArreglo[0].properties.nivel;
    // this.meta.body.immovable = true;
    
    /*this.plataforma = this.add.sprite(50, 180, 'plataforma');
    this.game.physics.arcade.enable(this.plataforma);
    this.plataforma.body.allowGravity = false;
    this.plataforma.body.immovable = true;*/

    this.game.camera.follow(this.jugador);
  },
  controles: function(){
    this.flechaIzq = this.add.button(20, this.game.height - 60, 'arrowButton');
    this.flechaDer = this.add.button(110, this.game.height - 60, 'arrowButton');
    this.botonSalto = this.add.button(this.game.width - 100, this.game.height - 60, 'actionButton');

    this.flechaIzq.alpha = 0.5;
    this.flechaDer.alpha = 0.5;
    this.botonSalto.alpha = 0.5;

    this.flechaIzq.fixedToCamera = true;
    this.flechaDer.fixedToCamera = true;
    this.botonSalto.fixedToCamera = true;

    this.botonSalto.events.onInputDown.add(function(){
      this.jugador.customParams.salto = true;
    }, this);

    this.botonSalto.events.onInputUp.add(function(){
      this.jugador.customParams.salto = false;
    }, this);

    this.flechaIzq.events.onInputDown.add(function(){
      this.jugador.customParams.estaMoviendoIzquierda = true;
    }, this);

    this.flechaIzq.events.onInputUp.add(function(){
      this.jugador.customParams.estaMoviendoIzquierda = false;
    }, this);

    this.flechaIzq.events.onInputOver.add(function(){
      this.jugador.customParams.estaMoviendoIzquierda = true;
    }, this);

    this.flechaIzq.events.onInputOut.add(function(){
      this.jugador.customParams.estaMoviendoIzquierda = false;
    }, this);

    this.flechaDer.events.onInputDown.add(function(){
      this.jugador.customParams.estaMoviendoDerecha = true;
    }, this);

    this.flechaDer.events.onInputUp.add(function(){
      this.jugador.customParams.estaMoviendoDerecha = false;
    }, this);

    this.flechaDer.events.onInputOver.add(function(){
      this.jugador.customParams.estaMoviendoDerecha = true;
    }, this);

    this.flechaDer.events.onInputOut.add(function(){
      this.jugador.customParams.estaMoviendoDerecha = false;
    }, this);
  },
  obtenerElementoPorTipo: function(tipo, mapa, capa){
    var lista = mapa.objects[capa];
    var arr = [];

    lista.forEach(function(item){
        if(item.properties.tipo==tipo) {
          arr.push(item);
        }
    }, this);

    return arr;
  },
  pasarNivel: function(jugador, meta) {
    if(meta.siguienteNivel!=0) {
      Juego.game.state.start("AccionEstado", true, false, meta.siguienteNivel);
    }
    console.log("Nivel completo");
  }





}