<?php

$cmdb = $_GET['cmd'];
$args =  $_GET['args'];
$cmd = "sudo python /var/www/html/cmd/{$cmdb}.py {$args}";
print($cmd);
shell_exec($cmd);
header('Location: /');
?>