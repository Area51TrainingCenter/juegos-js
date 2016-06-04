<?php
require 'clases/dbconn.inc';

//Conexión a la BD
$query = new dbconn();
$query->init();
$query->OpenDataBase();


$facebookId = utf8_decode($_GET["id"]); 

$query->OpenDataBaseQuery("update usuario set gol=1 where facebookId='$facebookId';");
?>