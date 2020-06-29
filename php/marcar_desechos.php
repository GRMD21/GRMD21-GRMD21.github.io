<?php 
	require("credencial.php");

	$conexion = mysqli_connect($server, $username, $password, $database);
	if (!$conexion) {
		die('No se ha podido conectar: ' . mysqli_error());
	}

	$bd_seleccionada = mysqli_select_db($conexion, $database);
	if (!$bd_seleccionada) {
	    die("No se puede usar la bd: " . mysqli_error());
	}

	$query = $mysqli->prepare("INSERT INTO desecho (tipo, detalle, fecha, estado) values (?, ?, CURDATE(), 'Ingresado')");
	$query->bindParam("ss", $_POST["tipo"], $_POST["detalle"]);
	$query->execute();

	if (!$pass) {
	    die("Consulta inválida: " . mysqli_error($conexion));
	}

?>