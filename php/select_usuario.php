<?php  
header
require("credencial.php");

$conexion = mysqli_connect($server, $username, $password, $database);
if (!$conexion) {
	die('No se ha podido conectar: ' . mysqli_error());
}

$bd_seleccionada = mysqli_select_db($conexion, $database);
if (!$bd_seleccionada) {
	die ("No se puede usar la bd: ". mysqli_error());
}

$query = "SELECT * FROM usuario WHERE 1";
$result = mysqli_query($conexion, $query);
if (!$result) {
	die("Consulta inválida: " . mysqli_error($conexion));
}

$json_result = json_encode($result);

while ($row = mysqli_fetch_assoc($result)) {
	echo "ID Usuario: {$row['idUsuario']} <br>".
	"Nombre: {$row['nombre']} <br>".
	"E-mail: {$row['e-mail']} <br>".
	"Dirección: {$row['direccion']} <br>".
	"Rol: {$row['rol']} <br>".
	"ID Ciudad: {$row['idCiudad']} <br>";
}

mysqli_close($conexion);
/*
header("Content-type: text/xml");

while ($row = @mysqli_fetch_assoc($result)) {
    $node = $dom->createElement("usuario");
    $newnode = $parnode->appendChild($node);
    
    $newnode->setAttribute("direccion", $row['direccion']);
}

//$dom->save("/xmlpuntos.xml");
echo $dom->saveXML();
*/