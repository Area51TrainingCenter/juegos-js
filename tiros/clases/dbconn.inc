<?php
//**-------------------------------------------------------------**
//
// www.peru.com S.A.
// ECHM (c) 2010
// dbconn class
// Conexion a la Base de datos
//
//**-------------------------------------------------------------**
 date_default_timezone_set('America/Lima');
 class dbconn
  {
    var $connServer=Array("Servidor"=>"","Usuario"=>"","Password"=>"","Db"=>"");
    var $Mysqli, $RecordDB;
    
	// Inicializa el objeto instanciado
    function init()
	 {
            //echo('Hola INIT ');
            $this->connServer["Servidor"]="ayasolutions.com";
            $this->connServer["Usuario"] ="root"; 
            $this->connServer["Password"]="ayaviri2011";  
            $this->connServer["Db"]      ="fb_cds_penales";
	 }

    // Por Ref. ObjetoDB, el cual es la apertura de la Base
    function OpenDataBaseQuery($TextoCmd)
     {
	  //echo('Hola INIT de LOGIN '.$TextoCmd);
      return $this->Mysqli->query($TextoCmd);
     }

    // Por Ref. ObjetoDB, el cual es la ejecucion de una transaccion a la BD
    function OpenDataBase()
     {
       return $this->Mysqli =  new mysqli( $this->connServer["Servidor"], $this->connServer["Usuario"] ,  $this->connServer["Password"],$this->connServer["Db"] );
     }
 
    // Inicia una transaccion 
    function BeginTransaction() 
     {
      $this->Mysqli->autocommit(FALSE);
     }

    // Commit transaction . 
    function CommitTransaction()
     {echo('COMMIT');
      $this->Mysqli->commit();
	  
     }
    function StatementTransaction($TextCmd)
        {
	  $this->Mysqli->multi_query($TextCmd);
	  do{ 
                $this->Mysqli->use_result(); 
          }
		while ($this->Mysqli->next_result()); 
	  echo("Hola MULTIQUEY");
        }
    // Aborta la ejecucion 
    function RollbackTransaction()
     {
      echo('ROLLBACK');
      $this->Mysqli->rollback();
     }
	 
	 function ErrorTransaction()
     {
	  echo("Error ".$this->Mysqli->errno);	 
      return $this->Mysqli->errno;
     }

    // Cierra la Base de datos
    function CloseDataBase()
        {
	  $this->Mysqli->close();
        }
    function NumberRegHorario($id)
        {
	  //echo("NumberRegHorario ".$id."<br />");
	  $num=$this->Mysqli->query("Select * from organizadorsemanal where idusuario=$id");
	  return $num->num_rows;
        }
		function NumberRegister($texto)
        {
	  //echo("NumberRegHorario ".$id."<br />");
	   $num=$this->Mysqli->query($texto);
	   return $num->num_rows;
        }
		
    function RecetaDia($tiporeceta,$diasemana,$idusuario)
        {
	  //echo("Receta ".$idusuario.' Dia Semana '.$diasemana."<br />");
	  
	  //echo(" lo que entra Select * from organizadorsemanal where idusuario=$idusuario and iddiasemana=$diasemana");
	  $resultado=$this->Mysqli->query("Select * from organizadorsemanal where tiporeceta = $tiporeceta and idusuario=$idusuario and iddiasemana=$diasemana");
	  
	  $row = $resultado->fetch_array(MYSQLI_ASSOC);
	  //var_dump($row);
	  $idreceta=$row['idreceta'];
        
	  return $idreceta;
        }	
     
    function NombreUsuario($facebookId)
        {
	  $resultado=$this->Mysqli->query("SELECT nombres FROM usuario WHERE facebookId='$facebookId' limit 1");
	  
	  $row = $resultado->fetch_array(MYSQLI_ASSOC);
	  //var_dump($row);
	  $nombres=$row['nombres'];
        
	  return $nombres;
        }	
	
	 
    
    
  }
?>