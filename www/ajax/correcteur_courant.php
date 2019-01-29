<?php
include "connect_db.php";

// to do ksi_il ki_il kp_il gw
// $_GET["wn_s_il"] 

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";

$reponse = $conn->query('DELETE FROM `arret_urgence` WHERE 1;INSERT INTO `arret_urgence`(`arret`) VALUES ('0');');

$conn=null;
//$reponse->closeCursor(); // Termine le traitement de la requête

?>