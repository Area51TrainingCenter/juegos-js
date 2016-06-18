var Juego = Juego || {};

Juego.game = new Phaser.Game("100%", "100%", Phaser.AUTO);
Juego.game.state.add("BootEstado", Juego.BootEstado);
Juego.game.state.add("PrecargaEstado", Juego.PrecargaEstado);
Juego.game.state.add("HomeEstado", Juego.HomeEstado);
Juego.game.state.add("AccionEstado", Juego.AccionEstado);

Juego.game.state.start("BootEstado");