<?php
require 'clases/dbconn.inc';

//Conexión a la BD
$query = new dbconn();
$query->init();
$query->OpenDataBase();


$facebookId = utf8_decode($_GET["id"]); 

$resultado=$query->NombreUsuario($facebookId);
echo $resultado;
?>