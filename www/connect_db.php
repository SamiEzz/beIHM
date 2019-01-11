<?php
$servername = "localhost";
$username = "root";
$password = "toor";

// Create connection
$conn = new mysqli($servername, $username);
mysqli_select_db($conn,"bei_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

?>
<h1>Données du courant :</h1>
   <table border="1" cellspacing="1" cellpadding="1" >
    	<tr class='titre_tab'>
        	<td>&nbsp;id&nbsp;</td>
        	<td>&nbsp;courant&nbsp;</td>
    	</tr>
    
 	<?php
    $reponse = $conn->query('SELECT * FROM table1 ORDER BY id DESC LIMIT 0, 12');
    
	while ($donnees = $reponse->fetch())
	{
	?>
  	<tr><td>
      	<?php echo $donnees['id']; ?> </td><td> <?php echo $donnees['tension']; ?>
    	</td></tr>
	<?php
	}
	$reponse->closeCursor(); // Termine le traitement de la requête

  	?>
</table>
