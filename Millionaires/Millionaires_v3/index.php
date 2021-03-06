<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Millionaires v3 </title>
    <link type="text/css" href="css/style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/script.js"></script>
</head>
<body>

<div class="start_container"><button class="start">START GAME</button></div>
<div class="container">
    <div class="settings">
        <div class="buttons">
            <div class="sound" mute="no"><img class="sound_img" title="Mute off" src="img/sound.png"></div>
            <div class="reset"><img class="reset_img" title="Reset Game" src="img/reset.png"></div>
            <div class="debug"><img class="debug_img" title="Correct Answer" src="img/debug.png"></div>
            <div class="adding_question"><img class="adding_question_img" title="Adding Question" src="img/adding_question.png"></div>
        </div>
        <div class="debug_display"></div>
    </div>
    <div class="question"></div>
    <div class="panel">
        <div blc="0" lifebuoy="1"><img class="lifebuoy_img" src="img/lifebuoy/lifebuoy_1.png"></div>
        <div blc="0" lifebuoy="2"><img class="lifebuoy_img" src="img/lifebuoy/lifebuoy_2.png"></div>
        <div blc="0" lifebuoy="3"><img class="lifebuoy_img" src="img/lifebuoy/lifebuoy_3.png"></div>
        <div class="score"><div class="score_text_1">Your score:</div><div class="display_score">0</div><div class="score_text">$</div></div>
        <div class="points">
            <div point="12"><div class="number guaranteed">12</div><div class="sign">♦</div><div class="sum guaranteed">1'000'000</div></div>
            <div point="11"><div class="number">11</div><div class="sign">♦</div><div class="sum">500'000</div></div>
            <div point="10"><div class="number guaranteed">10</div><div class="sign">♦</div><div class="sum guaranteed">250'000</div></div>
            <div point="9"><div class="number">9</div><div class="sign">♦</div><div class="sum">125'000</div></div>
            <div point="8"><div class="number">8</div><div class="sign">♦</div><div class="sum">75'000</div></div>
            <div point="7"><div class="number">7</div><div class="sign">♦</div><div class="sum">40'000</div></div>
            <div point="6"><div class="number">6</div><div class="sign">♦</div><div class="sum">20'000</div></div>
            <div point="5"><div class="number guaranteed">5</div><div class="sign">♦</div><div class="sum guaranteed">10'000</div></div>
            <div point="4"><div class="number">4</div><div class="sign">♦</div><div class="sum">5'000</div></div>
            <div point="3"><div class="number">3</div><div class="sign">♦</div><div class="sum">2'000</div></div>
            <div point="2"><div class="number">2</div><div class="sign">♦</div><div class="sum">1'000</div></div>
            <div point="1" class="active"><div class="number guaranteed">1</div><div class="sign">♦</div><div class="sum guaranteed">500</div></div>
        </div>
    </div>
    <div blc="0" answer="A"></div>
    <div blc="0" answer="B"></div>
    <div blc="0" answer="C"></div>
    <div blc="0" answer="D"></div>
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

</body>
</html>
