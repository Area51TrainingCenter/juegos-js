var Juego = Juego || {};

Juego.dimensiones = Juego.Escalamiento.obtenerDimensiones(700, 350);

Juego.game = new Phaser.Game(Juego.dimensiones.ancho, Juego.dimensiones.alto, Phaser.AUTO);

Juego.game.state.add("BootEstado", Juego.BootEstado);
Juego.game.state.add("CargadorEstado", Juego.CargadorEstado);
Juego.game.state.add("AccionEstado", Juego.AccionEstado);

Juego.game.state.start("BootEstado");