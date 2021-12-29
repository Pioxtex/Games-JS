<?php

$link = @new mysqli('localhost', 'root', '', 'pioxtex');
if ($link->connect_errno) { die('Connect Error: ' . $link->connect_errno); }
