<?php

$servername = "localhost";
$username = "root";
$password = "toor";

// Create connection

$conn = new mysqli($servername, $username);

mysqli_select_db($conn,"compacc_ihm");

?>