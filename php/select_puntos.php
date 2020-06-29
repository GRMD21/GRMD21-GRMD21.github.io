<?php

require("credencial.php");

$dom = new DOMDocument("1.0");
$node = $dom->createElement("puntos");
$parnode = $dom->appendChild($node);

$conexion = mysqli_connect($server, $username, $password, $database);
if (!$conexion) {
    die('No se ha podido conectar: ' . mysqli_error());
}

$bd_seleccionada = mysqli_select_db($conexion, $database);
if (!$bd_seleccionada) {
    die("No se puede usar la bd: " . mysqli_error());
}

$query = "SELECT * FROM punto WHERE 1";
$result = mysqli_query($conexion, $query);
if (!$result) {
    die("Consulta inválida: " . mysqli_error($conexion));
}

header("Content-type: text/xml");

while ($row = @mysqli_fetch_assoc($result)) {
    $node = $dom->createElement("punto");
    $newnode = $parnode->appendChild($node);

    $newnode->setAttribute("idPunto", $row['idPunto']);
    $newnode->setAttribute("latitud", $row['latitud']);
    $newnode->setAttribute("longitud", $row['longitud']);
    $newnode->setAttribute("estado", $row['estado']);
    $newnode->setAttribute("tipo", $row['tipo']);
    $newnode->setAttribute("idCiudad", $row['idCiudad']);
}

$dom->save("/xmlpuntos.xml");
echo $dom->saveXML();
