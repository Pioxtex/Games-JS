<?php
//error_reporting(0);
$link = @new mysqli('localhost', 'root', '', 'pioxtex');
if ($link->connect_errno) { die('Connect Error: ' . $link->connect_errno); }

$question_err = $answer_a_err = $answer_b_err = $answer_c_err = $answer_d_err = $correct_answer_err = "";
$question = $answer_a = $answer_b = $answer_c = $answer_d = $correct_answer = "";

function data_input_security($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if($_SERVER["REQUEST_METHOD"] == "POST")
{

    if(empty(data_input_security($_POST['question']))){ $question_err = "Please enter question."; } else { $question = data_input_security($_POST['question']); }
    if(empty(data_input_security($_POST['answer_a']))){ $answer_a_err = "Please enter answer A"; } else { $answer_a = data_input_security($_POST['answer_a']); }
    if(empty(data_input_security($_POST['answer_b']))){ $answer_b_err = "Please enter answer B"; } else { $answer_b = data_input_security($_POST['answer_b']); }
    if(empty(data_input_security($_POST['answer_c']))){ $answer_c_err = "Please enter answer C"; } else { $answer_c = data_input_security($_POST['answer_c']); }
    if(empty(data_input_security($_POST['answer_d']))){ $answer_d_err = "Please enter answer D"; } else { $answer_d = data_input_security($_POST['answer_d']); }
    if(empty(data_input_security($_POST['correct_answer']))){ $answer_correct_answer_err = "Please enter correct_answer"; } else { $correct_answer = data_input_security($_POST['correct_answer']); }
    
    if(($correct_answer == "A") || ($correct_answer == "B") || ($correct_answer == "C") || ($correct_answer == "D")){} else {$correct_answer_err = "Please enter correct_answer";}

    if(empty($question_err) && empty($answer_a_err) && empty($answer_b_err) && empty($answer_c_err) && empty($answer_d_err) && empty($correct_answer_err))
    {
        if($stmt = $link -> prepare("INSERT INTO millionaires (question, answer_a, answer_b, answer_c, answer_d, correct_answer) VALUES (?, ?, ?, ?, ?, ?)")){
            $stmt -> bind_param("ssssss", $param_question, $param_answer_a, $param_answer_b, $param_answer_c, $param_answer_d, $param_correct_answer);
            $param_question = $question;
            $param_answer_a = $answer_a;
            $param_answer_b = $answer_b;
            $param_answer_c = $answer_c;
            $param_answer_d = $answer_d;
            $param_correct_answer = $correct_answer;
            if($stmt -> execute()){ header("location: index.php"); } else { echo "Something went wrong. Please try again later."; }
            $stmt -> close();
        }
    }
    $link -> close();
}