var game = new Phaser.Game(722, 642, Phaser.AUTO);
game.state.add("JuegoEstado", JuegoEstado);
game.state.add("BootEstado", BootEstado);
game.state.add("HomeEstado", HomeEstado);
game.state.add("CargadorEstado", CargadorEstado);
game.state.start("BootEstado");