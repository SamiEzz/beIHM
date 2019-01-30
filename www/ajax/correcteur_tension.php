<?php
include "connect_db.php";

// to do ksi_il ki_il kp_il gw
// $_GET["wn_s_il"] 

$sql_query="INSERT INTO `correcteur_tension_vch`(`wn_s_Vch`, `ksi_Vch`, `Ki_Vch`, `Kp_Vch`) VALUES (". $_GET['wn_s_Vch'] .",". $_GET['ksi_Vch'].",".$_GET['Ki_Vch'].",".$_GET['Kp_Vch'].");";


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";
echo $sql_query;
$conn->query('DELETE FROM `correcteur_tension_vch` WHERE 1');
$conn->query($sql_query);

$conn=null;
//$reponse->closeCursor(); // Termine le traitement de la requête

?>