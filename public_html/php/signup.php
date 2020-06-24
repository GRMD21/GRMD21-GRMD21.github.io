<?php
require("credencial.php");

if (!empty($_POST['email']&&!empty($_POST['pass'])&&!empty($_POST['confirm_pass']))) {
    $query = "INSERT INTO `usuario`(`e-mail`, `pass`) VALUES (:email, :pass)";
    $statement = $conn->prepare($query);
    $statement->bindParam(':email',$_POST['email']);
    $pass = password_hash($_POST['pass'], PASSWORD_BCRYPT);
    $statement->bindParam(':pass', $password);

    if ($statement->execute()) {
    	$message = 'Usuario creado';
    } else {
    	$mesagge = 'Error al crear el usuario';
    }
}
