<?php
include "connect_db.php";

// to do ksi_il ki_il kp_il gw
// $_GET["wn_s_il"] 

$sql_query="INSERT INTO `correcteur_courant_il`(`wn_s_IL`, `ksi_IL`, `Ki_IL`, `Kp_IL`, `Gw`) VALUES (". $_GET['wn_s_il'] .",". $_GET['ksi_IL'].",".$_GET['Ki_IL'].",".$_GET['Kp_IL'].",".$_GET['Gw'] .");";


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";
echo $sql_query;
$conn->query('DELETE FROM `correcteur_courant_il` WHERE 1');
$conn->query($sql_query);

$conn=null;
//$reponse->closeCursor(); // Termine le traitement de la requête

?>