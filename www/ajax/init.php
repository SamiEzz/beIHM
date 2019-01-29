<?php
include "connect_db.php";


mysqli_select_db($conn,"bei_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";

$reponse = $conn->query('DELETE FROM `arret_urgence` WHERE 1;INSERT INTO `arret_urgence`(`arret`) VALUES ('0');');

$conn=null;
//$reponse->closeCursor(); // Termine le traitement de la requête

?>