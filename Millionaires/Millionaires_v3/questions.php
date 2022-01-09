<?php
require_once 'config.php';

$link = @new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if ($link->connect_errno) { die('Connect Error: ' . $link->connect_errno); }

$result = $link->query("SELECT * FROM `millionaires`");
$table = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($table);