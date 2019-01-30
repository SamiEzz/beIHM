<?php
include "connect_db.php";



// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";

$reponse = $conn->query('DELETE FROM `arret_urgence` WHERE 1;');

$reponse = $conn->query('INSERT INTO `arret_urgence`(`arret`) VALUES (1);');

$conn=null;
//$reponse->closeCursor(); // Termine le traitement de la requête

?>