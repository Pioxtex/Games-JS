// const debug = true;
// const millionaires = 
// {
//     init: function()
//     {
//         let level = 1;
//         let score = [0,100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];

//     }
// }


import { random } from './function/random.js';
import { background, point, score_set } from './function/theme.js';
import { audio, Video } from './function/audio.js';

$(function()
{
    function startGame()
    {
        let level = 1;
        let score = [0,100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];
        let choice_lifebouya = $( this ).attr( 'lifebuoya' );// .millionaires_lifebuoya

        $.ajax
        ({
            type: "POST",
            url: "questions.php",
            format: 'json',
            success: function( data ) 
            {
                let dat = JSON.parse( data )
                let drawn = random(16, dat.length);

                function display()
                {
                    if( level == 1 ) audio( 'theme_1' );
                    if( level == 5 ) audio( 'theme_2' );
                    if( level == 10 ) audio( 'theme_3' );
                    if( level == 15 ) audio( 'theme_4' );

                    $( '#questionText' ).text( dat[drawn[level]].question );
                    $( '[answerText="A"]' ).text( dat[drawn[level]].answer_A );
                    $( '[answerText="B"]' ).text( dat[drawn[level]].answer_B );
                    $( '[answerText="C"]' ).text( dat[drawn[level]].answer_C );
                    $( '[answerText="D"]' ).text( dat[drawn[level]].answer_D );
                }

                $( '.millionaires_answers' ).on('click', function()
                {
                    if(level > 16 ) return;

                    let answer_click = $( this ).attr( 'answer' );
                    let answer_clc = '[answer="' + answer_click + '"]';

                    background( answer_clc, 'wait');

                    setTimeout(function()
                    {
                        background( answer_clc, 'default');
                        if( answer_click === dat[drawn[level]].correct_answer )
                        {
                            audio( 'win1' );
                            background( answer_clc, 'green');                          
                            setTimeout(function()
                            {
                                level++;
                                if(level === 16) { alertify.success( 'Wygrałeś Million' ); audio( 'oklaski' ); background( answer_clc, 'default'); level++; return; } else { alertify.success( 'Udało się' ); }
                                point( level );
                                score_set( score[level-1] );
                                background( answer_clc, 'default');
                                display();
                            }, 2000);
                        }
                        else
                        {
                            audio( 'lose_1' );
                            background( answer_clc, 'red');
                            background( '[answer="' + dat[drawn[level]].correct_answer + '"]', 'green');
                            setTimeout(function()
                            {
                                level = 1;
                                alertify.error( 'Nie udało się' );
                                point( level );
                                score_set( score[level-1] );
                                background( answer_clc, 'default' );
                                //throw 'END GAMES';
                                return;
                            }, 2000);
                        }
                    }, 2000);
                });
                display();
            },
            error: function(){ alertify.error( 'error download question' ); }
        });
    }

    $( '#millionaires_start' ).on('click', function()
    {
        $( this ).remove();
        audio( 'start' );

        let video = new Video("video/intro.mp4", true);
        video.muted = true;
        video.play();

        setTimeout(function(){ startGame(); }, 1000*13);
    });
});



//INSERT INTO `millionaires` (`id`, `question`, `answer_A`, `answer_B`, `answer_C`, `answer_D`, `correct_answer`) VALUES ('1', 'Pytanie testowa', 'odp A', 'odp B', 'odp C', 'odp D', 'A');