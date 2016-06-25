var Juego = Juego || {};

Juego.game = new Phaser.Game(480, 360, Phaser.AUTO);

Juego.game.state.add("BootEstado", Juego.BootEstado);
Juego.game.state.add("CargadorEstado", Juego.CargadorEstado);
Juego.game.state.add("AccionEstado", Juego.AccionEstado);

Juego.game.state.start("BootEstado");