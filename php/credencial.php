<?php
	$server="localhost";
	$username="root";
	$password="";
	$database="econow";
        //$password="kkypRf8DSda5LILz";

	try {
		$conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
	} catch (PDOException $e) {
		die('Conexion fallida: '.$e->getMessage());
	}
        