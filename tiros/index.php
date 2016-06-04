<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf8">
    <link rel="stylesheet" href="js/vendor/custombox.min.css">
	<link rel="stylesheet" type="text/css" href="css/estilos.css">	
</head>
<body>

<div class="intro fondoInicial">
	<div class="participa">
		<a href="#"></a>
	</div>
</div>

<div class="registro fondoInicial">
	<div class="datos">
		<input type="text" id="txtNombres" placeholder="Nombre y Apellidos" />
		<input type="text" id="txtDNI" placeholder="DNI" />
		<input type="text" id="txtCorreo" placeholder="Correo electrónico" />
		<input type="text" id="txtTelefono" placeholder="Teléfono" />
		<input type="text" id="txtCiudad" placeholder="Ciudad" />
		<div class="check"></div>
		<a class="terminos" href="#"></a>
		<a class="btnContinuar" href="#"></a>
	</div>
</div>

<div class="eleccion">
	<div class="seleccionUsuario seleccionJugador seleccionJugador1" rel="1"></div>	
	<div class="seleccionUsuario seleccionJugador seleccionJugador2" rel="2"></div>	
	<div class="seleccionUsuario seleccionJugador seleccionJugador3" rel="3"></div>	
	<div class="seleccionUsuario seleccionPelota seleccionPelota1" rel="2"></div>	
	<div class="seleccionUsuario seleccionPelota seleccionPelota2" rel="1"></div>	
	<div class="seleccionUsuario seleccionPelota seleccionPelota3" rel="0"></div>	
	<div class="checkEleccion jugador jugador1" rel="1"></div>
	<div class="checkEleccion jugador jugador2" rel="2"></div>
	<div class="checkEleccion jugador jugador3" rel="3"></div>
	<div class="checkEleccion pelota pelota1" rel="2"></div>
	<div class="checkEleccion pelota pelota2" rel="1"></div>
	<div class="checkEleccion pelota pelota3" rel="0"></div>
	<a href="#" class="btnInstrucciones"></a>
	<a href="#" class="btnIniciar"></a>
	<div class="instrucciones">
		<a href="#" class="btnRegresar"></a>
		<a href="#" class="btnIniciar"></a>
	</div>
</div>

<div class="zonaJuego">
	<div class="mensaje"></div>
	<div class="zonaCanvas">
		<div class="score">
			<div class="numero"></div>
		</div>
		<div class="logo"></div>
		<div class="pelotasRestantes">
			<div class="pelotaScore"></div>
			<div class="pelotaScore"></div>
			<div class="pelotaScore"></div>
			<div class="pelotaScore"></div>
			<div class="pelotaScore"></div>
		</div>
		<div class="zonaNombre"></div>
		<canvas id="juego" width="722" height="657"></canvas>		
	</div>
	<div class="mensajeGol">
		<div class="btnVolver"></div>
		<a href="#"></a>
	</div>
	<div class="mensajeFallo">
		<a href="#"></a>
	</div>
	<div class="falta1"></div>
	<div class="falta2"></div>
	<div class="tiro4"></div>
	<div class="tiro3"></div>
	<div class="tiro2"></div>
	<div class="tiro1"></div>
	
</div>

<div class="modal-demo" id="modal">
<button type="button" class="close" onclick="Custombox.close();">
    <span>&times;</span><span class="sr-only"></span>
</button>
<h1>Términos y Condiciones</h1>
<ol>
	<li>Esta promoción es válida sólo para fans de Cruz del Sur en Facebook (mayores de 18 años), a nivel nacional.</li>
	<li>Para participar los interesados deberán registrar sus datos en el formulario (nombres, apellidos, N° DNI, correo electrónico, teléfono y ciudad de donde están participando).</li>
	<li>Para iniciar el juego debes seleccionar un jugador y el balón de tu preferencia. También podrás visualizar las instrucciones del juego y comenzar a jugar.</li>
	<li>Los participantes deberán registrarse una sola vez y jugar las veces que deseen hasta meter un gol. </li>
	<li>Participan todas las personas que cumplan con los términos y condiciones.</li>
	<li>El plazo para participar inicia hoy lunes 04 de junio a las 11:00 a.m. del 2015 y vence el martes 30 de junio del 2015 a las 12:00 p.m.</li>
	<li>Los premios serán pasajes y estadía en el hotel Las Dunas de Ica; además de camisetas originales de la selección.</li>
	<li>Elegiremos a los ganador@s a través de random.</li>
	<li>El sorteo se realizará el martes 30 de junio a las 3:00 p.m. y la publicación de ganadores a las 6:00 p.m. del mismo día.</li>
	<li>Los ganadores tendrán un plazo de 3 días para comunicarse.</li>
	<li>Los ganadores deberán recoger sus premios personalmente con sus DNI y copia del mismo en la dirección que le proporcionemos.</li>
	<li>Los participantes autorizan a Cruz del Sur a utilizar sus datos registrados en el formulario (si la empresa lo considera conveniente).</li>
	<li>Facebook no patrocina, avala ni administra esta promoción.</li>
</ol>
</div>

<div class="nopermisos">
	
</div>



<audio id='estadio' preload='auto'>
 <source src='sonidos/estadio.ogg' type='audio/ogg'>
 <source src='sonidos/estadio.mp3' type='audio/mp3'>
</audio>

<audio id='patada' preload='auto'>
 <source src='sonidos/patada.ogg' type='audio/ogg'>
 <source src='sonidos/patada.mp3' type='audio/mp3'>
</audio>

<audio id='gol' preload='auto'>
 <source src='sonidos/gol.ogg' type='audio/ogg'>
 <source src='sonidos/gol.mp3' type='audio/mp3'>
</audio>

<audio id='sisepuede' preload='auto'>
 <source src='sonidos/sisepuede.ogg' type='audio/ogg'>
 <source src='sonidos/sisepuede.mp3' type='audio/mp3'>
</audio>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/vendor/custombox.min.js"></script>
<script src="js/facebook.js"></script>
<script src="js/vendor/gameEngine.js"></script>
<script src="js/vendor/requestNextAnimationFrame.js"></script>
<script src="js/vendor/sprites.js"></script>
<script src="js/juego.js"></script>
<script src="js/modulo.js"></script>

</body>
</html>