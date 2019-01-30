<?php
include "connect_db.php";



// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";

$reponse = $conn->query('SELECT * FROM _test_temps_reel ORDER BY id DESC LIMIT 0, 10');
while ($donnees = $reponse->fetch_assoc())
{
    echo $donnees['tension'];
    echo ",";
}
echo "0";
$conn=null;
//$reponse->closeCursor(); // Termine le traitement de la requête

?>