<?php
require("credencial.php");

if (!empty($_POST['email']&&!empty($_POST['pass'])&&!empty($_POST['confirm_pass']))&&$_POST('pass')===$_POST('confirm_pass')) {
    $coded_pass = hash(sha256, $_POST['pass']);

    $query = $mysqli->prepare("INSERT INTO direccion (calle1, idCiudad) values (?, ? )");
    $query->bindParam("si", $_POST["address"], $_POST["city"] );
    $query->execute();
    //echo $query;

    $queryDir = $mysqli->prepare("SELECT idDireccion FROM direccion WHERE calle1 = ? AND idCiudad = ?");
    $queryDir->bindParam("si", $_POST["address"], $_POST["city"]);
    $queryDir->execute();
    $dirID = $queryDir->get_result()
    //echo $dirID;

    $query2 = $mysqli->prepare("INSERT INTO usuario (e-mail, pass, rol, idDireccion) values (?, ?, 0, ?)");
    $query2->bindParam("ssi", $_POST["email"], $coded_pass, $dirID);
    $query2->execute();

    /*
    "INSERT INTO `usuario`(`e-mail`, `pass`) VALUES (:email, :pass)";
    $statement = $conn->prepare($query);
    $statement->bindParam(':email',$_POST['email']);
    $pass = password_hash($_POST['pass'], PASSWORD_BCRYPT);
    $statement->bindParam(':pass', $password);

    if ($statement->execute()) {
    	$message = 'Usuario creado';
    } else {
    	$mesagge = 'Error al crear el usuario';
    }
    */
}
