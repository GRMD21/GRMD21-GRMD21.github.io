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

	$query = $mysqli->prepare("SELECT pass FROM usuario WHERE email = ?");
	$query->bindParam("s", $_POST["email"]);
	$query->execute();
	$pass = $query->get_result();

	if (!$pass) {
	    die("Consulta inválida: " . mysqli_error($conexion));
	}


	echo $pass;
	$conexion->close();
?>