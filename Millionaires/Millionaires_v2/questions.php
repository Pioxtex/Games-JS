<?php
$link = @new mysqli('localhost', 'root', '', 'pioxtex');
if ($link->connect_errno) { die('Connect Error: ' . $link->connect_errno); }

$result = $link->query("SELECT * FROM `millionaires`");
$table = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($table);