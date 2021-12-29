<?php
require_once('config.php');

if ($link->query("UPDATE `games` SET `score` = '".$_POST['score']."', `autoClicker` = '".$_POST['autoClicker']."', `clicker` = '".$_POST['clicker']."', `shop1` = '".$_POST['shop1']."', `shop2` = '".$_POST['shop2']."', `shop3` = '".$_POST['shop3']."', `shop4` = '".$_POST['shop4']."', `shop5` = '".$_POST['shop5']."', `shop6` = '".$_POST['shop6']."', `shop7` = '".$_POST['shop7']."', `shop8` = '".$_POST['shop8']."', `shop9` = '".$_POST['shop9']."', `shop10` = '".$_POST['shop10']."',  `shop11` = '".$_POST['shop11']."',  `shop12` = '".$_POST['shop12']."',  `shop13` = '".$_POST['shop13']."',  `shop14` = '".$_POST['shop14']."',  `shop15` = '".$_POST['shop15']."',  `shop16` = '".$_POST['shop16']."' WHERE `username` = '".$_POST['username']."'") === TRUE) { echo "Record updated successfully"; }
else { echo "Error updating record: " . $link->error; }

$link->close();