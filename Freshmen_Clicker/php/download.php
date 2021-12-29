<?php
require_once('config.php');

if( array_key_exists('username', $_POST) === false ){ exit; }

if($stmt = $link->prepare("SELECT score, autoClicker, clicker, shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10, shop11, shop12, shop13, shop14, shop15, shop16 FROM games WHERE username = ?"))
{
    $stmt -> bind_param("s", $param_username);
    $param_username = $_POST['username'];
    if($stmt -> execute())
    {
        $stmt -> store_result();
        if($stmt -> num_rows() == 1)
        {
            $stmt -> bind_result($score, $autoClicker, $clicker, $shop1, $shop2, $shop3, $shop4, $shop5, $shop6, $shop7, $shop8, $shop9, $shop10, $shop11, $shop12, $shop13, $shop14, $shop15, $shop16);
            if($stmt -> fetch())
            {
                $data = array(
                    'score' => $score,
                    'autoClicker' => $autoClicker,
                    'clicker' => $clicker,
                    'shop1' => $shop1,
                    'shop2' => $shop2,
                    'shop3' => $shop3,
                    'shop4' => $shop4,
                    'shop5' => $shop5,
                    'shop6' => $shop6,
                    'shop7' => $shop7,
                    'shop8' => $shop8,
                    'shop9' => $shop9,
                    'shop10' => $shop10,
                    'shop11' => $shop11,
                    'shop12' => $shop12,
                    'shop13' => $shop13,
                    'shop14' => $shop14,
                    'shop15' => $shop15,
                    'shop16' => $shop16
                );
                echo json_encode($data);
            }
        }
    } else echo 'ERROR:' . $link->connect_errno;
    $stmt -> close();
} else echo 'ERROR:' . $link->connect_errno;
$link -> close();
