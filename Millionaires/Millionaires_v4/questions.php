<?php
require_once 'config.php';

$n = 15;

function random_questions($q, $r){
    $x=0;
    $number_random;
    for ($i=1; $i<=$r; $i++) {
        do {
            $number=rand(1, $q);
            $random_ok=true;

            for ($j=1; $j<=$x; $j++) {
                if ($number==$number_random[$j]) $random_ok=false;
            }

            if ($random_ok==true) {
                $x++;
                $number_random[$x]=$number;
            }
        } while ($random_ok!=true);
    }

    return $number_random;
}

function count_question($g){
    while($rowData = mysqli_fetch_array($g)) {
        return $rowData[0]-1;
    }
}

$sql = "SELECT question, answer_A, answer_B, answer_C, answer_D, correct_answer FROM millionaires";

//polaczenie z baza
$link = @new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if ($link->connect_errno) { die('Connect Error: ' . $link->connect_errno); }

// wybieranie wszystkich wyników z bazy
$result = $link->query($sql);
$r = $result->fetch_all(MYSQLI_ASSOC);

// liczenie ilosc pytan
$qq = $link->query("SELECT COUNT(*) FROM millionaires;");

//losowanie pytan
$d = random_questions(count_question($qq), $n);
// for ($y=1; $y<=$n; $y++) { if ($r[$d[$y]]['verification']==0) echo 'no verification: '.json_encode($r[$d[$y]]).'<br>'; }


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_GET['api']) && !empty($_GET['api'])) {
        if($_GET['api'] == "PioxtexOS") {
            echo '{ 
                "a0": '.json_encode($r[$d[1]]).',
                "a1": '.json_encode($r[$d[2]]).',
                "a2": '.json_encode($r[$d[3]]).',
                "a3": '.json_encode($r[$d[4]]).',
                "a4": '.json_encode($r[$d[5]]).',
                "a5": '.json_encode($r[$d[6]]).',
                "a6": '.json_encode($r[$d[7]]).',
                "a7": '.json_encode($r[$d[8]]).',
                "a8": '.json_encode($r[$d[9]]).',
                "a9": '.json_encode($r[$d[10]]).',
                "a10": '.json_encode($r[$d[11]]).',
                "a11": '.json_encode($r[$d[12]]).',
                "a12": '.json_encode($r[$d[13]]).',
                "a13": '.json_encode($r[$d[14]]).',
                "a14": '.json_encode($r[$d[15]]).'
            }';
        }
    }
}
     

// function unicodes($sText)
// {
//     $aReplacePL = array(
//         '\u0104' => 'Ą',
//         '\u0106' => 'Ć',
//         '\u0118' => 'Ę',
//         '\u0141' => 'Ł',
//         '\u0143' => 'Ń',
//         '\u00d3' => 'Ó',
//         '\u015a' => 'Ś',
//         '\u0179' => 'Ź',
//         '\u017b' => 'Ż',
        
//         '\u0105' => 'ą',
//         '\u0107' => 'ć',
//         '\u0119' => 'ę',
//         '\u0142' => 'ł',
//         '\u0144' => 'ń',
//         '\u00f3' => 'ó',
//         '\u015b' => 'ś',
//         '\u017a' => 'ź',
//         '\u017c' => 'ż'
//     );
//     return str_replace(array_keys($aReplacePL), array_values($aReplacePL), $sText);
// }

// echo unicodes(json_encode($r));

