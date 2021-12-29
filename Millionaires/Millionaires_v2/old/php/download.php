<?php
require_once 'connect.php';

if( $_POST['n'] > 1 )
{
    $result = $link->query("SELECT max(id) FROM `chatjs`");
    while($row = $result->fetch_assoc())
    {
        $result = $link->query('SELECT * FROM `chatjs` WHERE id='.$row['max(id)']);
        while($row = $result->fetch_assoc())
        {
            /*
            $data = array(
                'author' -> $row['author'],
                'date' -> $row['date'],
                'message' -> $row['message'],
                'color' -> $row['color'],
                'bold_text' -> $row['bold_text'],
                'italic_text' -> $row['italic_text'],
                'underlined_text' -> $row['underlined_text']
            );
            echo json_encode($data);
            */

            echo '{"author":"'.$row['author'].'","date":"'.$row['date'].'","message":"'.$row['message'].'","color":"'.$row['color'].'","bold_text":"'.$row['bold_text'].'","italic_text":"'.$row['italic_text'].'","underlined_text":"'.$row['underlined_text'].'"}';
        }
    }
} else {
    $result = $link->query("SELECT * FROM `chatjs`");
    $table = $result->fetch_all(MYSQLI_ASSOC);
    if( $_POST['n'] != count($table) ) echo json_encode($table);
}

$link->close();
