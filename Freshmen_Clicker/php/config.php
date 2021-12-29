<?php
$link = @new mysqli('localhost', 'root', '', 'pioxtex');
if($link->connect_errno) die("ERROR: Could not connect. " . $link->connect_errno);