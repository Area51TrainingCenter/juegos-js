<?php
require 'clases/dbconn.inc';

//Conexión a la BD
$query = new dbconn();
$query->init();
$query->OpenDataBase();


$facebookId = utf8_decode($_GET["id"]); 
$nombres = utf8_decode($_GET["nombres"]); 
$dni = utf8_decode($_GET["dni"]); 
$telefono = utf8_decode($_GET["telefono"]); 
$correo = utf8_decode($_GET["correo"]); 
$ciudad = utf8_decode($_GET["ciudad"]); 

//echo "insert into usuario (nombres,dni,telefono,correo,mega) values ('$nombres','$dni', '$telefono','$correo', '$mega');";


$query->OpenDataBaseQuery("insert into usuario (facebookId, nombres,dni,telefono,correo,ciudad) values ('$facebookId','$nombres','$dni', '$telefono','$correo', '$ciudad');");

?>