<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Millionaires v4 </title>
    <link rel="icon" type="image/png" sizes="192x192" href="img/icon.png">
    <link type="text/css" href="css/style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/script.js"></script>
</head>
<body>

<div class="backcolor"></div>

<div class="container">
    <div class="parent">
        <div class="answer_C answerHover" blc="0" answer="C"></div>
        <div class="answer_D answerHover" blc="0" answer="D"></div>
        <div class="answer_B answerHover" blc="0" answer="B"></div>
        <div class="answer_A answerHover" blc="0" answer="A"></div>
        <div class="_question"><span class="question"></span></div>
        <div class="information_panel">
            <img src="img/hubert.jpg" class="hubert">
            <span class="speaker">
                Witamy w grze Millionaires!</br>Czy jesteś gotowy, aby wygrać milion dolarów?</br>Myśl lub ryzykuj, to Twoja gra!</br>Masz do dyspozycji 3 koła ratunkowe!</br>Powodzenia, Huberta Urbańskiego!<br />
                <button class="start">Start</button>
            </span>
            <button class="reset resetGames">Spróbuj ponownie!</button>
        </div>
        <div class="points">
            <div point="15" class="noActive"></div>
            <div point="14" class="noActive"></div>
            <div point="13" class="noActive"></div>
            <div point="12" class="noActive"></div>
            <div point="11" class="noActive"></div>
            <div point="10" class="noActive"></div>
            <div point="9" class="noActive"></div>
            <div point="8" class="noActive"></div>
            <div point="7" class="noActive"></div>
            <div point="6" class="noActive"></div>
            <div point="5" class="noActive"></div>
            <div point="4" class="noActive"></div>
            <div point="3" class="noActive"></div>
            <div point="2" class="noActive"></div>
            <div point="1" class="active"></div>
        </div>
        <div class="settings">
            <div class="buttons" style="<?php if(!isset($_GET['debug'])){echo'transform: scale(0.6);right: 15%;position: relative;';}?>">
                <div class="sound" mute="no"><img class="sound_img" title="Mute off" src="img/sound.png"></div>
                <div class="reset"><img class="reset_img" title="Reset Game" src="img/reset.png"></div>
                <?php if(isset($_GET['debug'])){
                    echo '<div class="adding_question"><img class="adding_question_img" title="Adding Question" src="img/adding_question.png"></div>';
                    echo '<div class="debug"><img class="debug_img" title="Correct Answer" src="img/debug.png"></div>';
                }?>
            </div>
            <div class="debug_display"></div>
        </div>
        <div class="wheel1 wheelHover" blc="0" lifebuoy="1"></div>
        <div class="wheel2 wheelHover" blc="0" lifebuoy="2"></div>
        <div class="wheel3 wheelHover" blc="0" lifebuoy="3"></div>
    </div>

    <div class="addQuestion">
        <div class="close_new_question">X</div>
        <div class="add_question_info">Form for adding a question to the game Millionaires</div>
        <div class="add_question_text">
            <div class="question_text">New Question: </div>
            <div class="answer_a_text">New Answer A:</div>
            <div class="answer_b_text">New Answer B:</div>
            <div class="answer_c_text">New Answer C:</div>
            <div class="answer_d_text">New Answer D:</div>
            <div class="correct_answer_text">New Correct Answer:</div>
            <div class="reset_text"></div>
        </div>
        <form action="new_question.php" method="POST" class="add_question_input" name="new_question">
            <div class="question_input"><input class="question_input2" type="text" name="question" maxlength="200" placeholder="New Question" required></div>
            <div class="answer_a_input"><input class="answer_a_input2" type="text" name="answer_a" maxlength="200" placeholder="Answer for A" required></div>
            <div class="answer_b_input"><input class="answer_b_input2" type="text" name="answer_b" maxlength="200" placeholder="Answer for B" required></div>
            <div class="answer_c_input"><input class="answer_c_input2" type="text" name="answer_c" maxlength="200" placeholder="Answer for C" required></div>
            <div class="answer_d_input"><input class="answer_d_input2" type="text" name="answer_d" maxlength="200" placeholder="Answer for D" required></div>
            <div class="correct_answer_input"><select class="correct_answer_input2" name="correct_answer" required><option value="" label="select"></option><option value="A" label="A"></option><option value="B" label="B"></option><option value="C" label="C"></option><option value="D" label="D"></option></select></div>
            <div class="submit_input"><input type="reset" name="reset" class="reset_add_question"><input class="submit_input2" type="submit" name="Submit" onclick="new_question.reset()"></div>
        </form>
    </div>
</div>

</body>
</html>
