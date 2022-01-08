$(document).ready(function()
{
    $.ajax
    ({
        type: "POST",
        url: "questions.php",
        format: 'json',
        success: function( obj ) 
        {

            const config = 
            {
                duration: 3,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                yellow: 'rgba(230, 230, 0, 0.9)',
                green: 'rgba(0, 255, 0, 0.9)',
                red: 'rgba(255, 0, 0, 0.9)',
                winning_amount: new Array(0, 500, 1000, 2000, 5000, 10000, 20000, 40000, 75000, 125000, 250000, 500000, 1000000),
                number_questions: 12
            }

            let lvl = 1

            function alert_game( message, win)
            {
                $('body').append($('<div class="alert_content"><span class="alert_display">'+message+'</span></div>'))
                if(win == 'alert'){ return false }
                if(win != 'win'){ let s = setTimeout(function(){ $('.alert_content').remove(); clearTimeout(s) }, 3000) }
            }

            function sound( click, music, loop )
            {
                if(click === 'stopClick') return $('.my_audio').each(function(){this.pause(); this.currentTime = 0 })//$(".my_audio").remove()
                if(music === 'stopMusic') return $('.my_audio_music').each(function(){this.pause(); this.currentTime = 0 })//$(".my_audio_music").remove()

                if(click)
                {
                    $(".my_audio").remove()
                    $('body').append("<audio class='my_audio' controls preload='none' style='display:none'></audio>")
                    $(".my_audio").trigger('load')
                    $('.my_audio').append("<source id='sound_src' src='sound/"+click+".mp3' type='audio/mpeg'>")
                    if($('.sound').attr('mute') === 'no'){ $('.my_audio').prop("volume", 0.5) } else { $('.my_audio').prop("volume", 0) }
                    $(".my_audio").trigger('play')
                    $('.my_audio').on('ended', function(){ $(".my_audio").remove() })
                }
                if(music)
                {
                    $(".my_audio_music").remove()
                    $('body').append("<audio class='my_audio_music' controls preload='none' style='display:none'></audio>")
                    $(".my_audio_music").trigger('load')
                    $('.my_audio_music').append("<source id='sound_src' src='sound/"+music+".mp3' type='audio/mpeg'>")
                    if($('.sound').attr('mute') === 'no'){ $('.my_audio_music').prop("volume", 0.8) } else { $('.my_audio_music').prop("volume", 0) }
                    if(loop == 'yes') $('.my_audio_music').prop("loop", "loop")
                    $(".my_audio_music").trigger('play')
                    $('.my_audio_music').on('ended', function(){ $(".my_audio_music").remove() })
                }
            }

            function random(k, n)
            {
                let numbers = new Array(n);
                let a = new Array();
                for (let i=0; i<n; i++) {numbers[i] = i + 1;}
                for (let i=0; i<k; i++)
                {
                    let r = Math.floor(Math.random()*n);
                    a.push(numbers[r]);
                    numbers[r] = numbers[n - 1];
                    n--;
                }
                return a;
            }

            let dat = JSON.parse( obj )
            let drawn = random(config.number_questions, dat.length)

            $('.debug').on('click', debug)
            $('.sound').on('click', mute)
            $('.reset').on('click', function(){game_reset('yes')})
            $('.adding_question').on('click', adding_question)

            function debug()
            {
                $('.debug_display').html('<i style="color:rgb(255, 255, 255);">Correct Answer: </i>' + dat[drawn[lvl]].correct_answer)
                let debugMode = setTimeout(function(){ $('.debug_display').text(''); clearTimeout(debugMode) }, 2000)
            }

            function mute()
            {
                if($('.sound').attr('mute') === 'no')
                {
                    $('.my_audio').prop("volume", 0)
                    $('.my_audio_music').prop("volume", 0)
                    $('.sound').attr('mute', 'yes')
                    $('.sound_img').attr('title', 'Mute on')
                }
                else if($('.sound').attr('mute') === 'yes')
                {
                    $('.my_audio').prop("volume", 0.5)
                    $('.my_audio_music').prop("volume", 0.8)
                    $('.sound').attr('mute', 'no')
                    $('.sound_img').attr('title', 'Mute off')
                }

            }

            function adding_question()
            {
                alert_game('Game resets after upload, do you want to continue? <br><br><button class="alert_yes">YES</button><button class="alert_no">NO</button>', 'alert')
                $('.alert_no').on('click', function(){ $('.alert_content').remove() })
                $('.alert_yes').on('click', function()
                {
                    $('.sound').click()
                    $('.container').hide()
                    $('.alert_content').remove()
                    $('.addQuestion').css('display', 'grid')
                    $('.close_new_question').on('click', function()
                    {
                        $('.addQuestion').hide('slow')
                        $('.container').show('slow')
                        $('.sound').click()
                    })
                })
            }

            $('.start').on('click', game_start)

            $('[lifebuoy]').on('click', function()
            {
                if($(this).attr('blc') === '0')
                {
                    $(this).attr('blc', '1')
                    checking_lifebuoy($(this).attr('lifebuoy'))
                }
            })

            $('[answer]').hover(
                function(){ if($(this).attr('blc') === '0'){$(this).css('backgroundColor', config.yellow)} },
                function(){ if($(this).attr('blc') === '0'){$(this).css('backgroundColor', config.backgroundColor)} }
            )

            $('[answer]').on('click', function()
            {
                if($(this).attr('blc') === '0')
                {
                    sound('final-answer')
                    $('[answer]').attr('blc', '1')
                    $(this).animate({opacity: 0.5}, 1000*config.duration, function(){ checking_answers( $(this).attr('answer'))})
                    $(this).css('backgroundColor', config.yellow)
                }
            })

            function checking_lifebuoy(lifebuoy)
            {
                if(lifebuoy == 1)
                {
                    sound('50-50')
                    if(dat[drawn[lvl]].correct_answer == 'A'){$('[answer="C"]').text(''); $('[answer="D"]').text('')}
                    if(dat[drawn[lvl]].correct_answer == 'B'){$('[answer="A"]').text(''); $('[answer="C"]').text('')}
                    if(dat[drawn[lvl]].correct_answer == 'C'){$('[answer="D"]').text(''); $('[answer="B"]').text('')}
                    if(dat[drawn[lvl]].correct_answer == 'D'){$('[answer="A"]').text(''); $('[answer="B"]').text('')}
                }
                if(lifebuoy == 2)
                {
                    sound('phone')
                    let ss = setTimeout(function()
                    {
                        sound('phone-end')
                        alert_game('A friend suggests: '+dat[drawn[lvl]].correct_answer)
                        clearTimeout(ss)
                    }, 5000)
                }
                if(lifebuoy == 3){
                    sound('ask')
                    let ss = setTimeout(function()
                    {
                        sound('phone-end')
                        alert_game('The audience voted for: '+dat[drawn[lvl]].correct_answer)
                        clearTimeout(ss)
                    }, 5000)
                }
            }

            function checking_answers(answer)
            {
                if(dat[drawn[lvl]].correct_answer === answer)
                {
                    lvl++
                    sound('correct-answer')
                    $('[answer="'+answer+'"]').css({'backgroundColor':config.green, 'opacity':1})
                    $(this).animate({opacity: 1}, 1000*config.duration, function()
                    {
                        $('[answer]').attr('blc', 0).css({'backgroundColor':config.backgroundColor, 'opacity':1})
                        $('.display_score').text(config.winning_amount[lvl-1])
                        $('[point]').removeClass('active')
                        $('[point="'+lvl+'"]').addClass('active')

                        if((lvl == 3) && (lvl < 6)){sound('', 'stopMusic'); sound('', '2000-10000', 'yes')}
                        if((lvl == 6) && (lvl < 9)){sound('', 'stopMusic'); sound('', '10000-75000', 'yes')}
                        if(lvl == 9){sound('', 'stopMusic'); sound('', '125000', 'yes')}
                        if(lvl == 10){sound('', 'stopMusic'); sound('', '250000', 'yes')}
                        if(lvl == 11){sound('', 'stopMusic'); sound('', '500000', 'yes')}
                        if(lvl == 12){sound('', 'stopMusic'); sound('', '1000000', 'yes')}
                        if(lvl == 13){ return game_win( lvl-1 ) }
                        else
                        {
                            $('.question').text(dat[drawn[lvl]].question)
                            $('[answer="A"]').text(dat[drawn[lvl]].answer_A)
                            $('[answer="B"]').text(dat[drawn[lvl]].answer_B)
                            $('[answer="C"]').text(dat[drawn[lvl]].answer_C)
                            $('[answer="D"]').text(dat[drawn[lvl]].answer_D)
                        }
                    })
                }
                else
                {
                    sound('', 'stopMusic')
                    sound('wrong-answer')
                    $('[answer="'+answer+'"]').css({'backgroundColor':config.red, 'opacity':1})
                    $('[answer="'+dat[drawn[lvl]].correct_answer+'"]').css({'backgroundColor':config.green, 'opacity':1})
                    $(this).animate({opacity: 1}, 1000*config.duration, function()
                    {
                        $('[answer]').attr('blc', 0).css({'backgroundColor':config.backgroundColor, 'opacity':1})
                        game_over( lvl-1 )
                    })

                }
            }

            function game_win( lvl )
            {
                sound('', 'stopMusic')
                sound('', '1000000_win')
                alert_game('Wygrałeś: '+ config.winning_amount[lvl] + ' $', 'win')
                let ss = setTimeout(function()
                {
                    game_reset()
                    $('.alert_content').remove()
                    clearTimeout(ss)
                }, 25*1000)
            }

            function game_over( lvl )
            {
                alert_game('Przegrałeś: '+ config.winning_amount[lvl] + ' $')
                game_reset()
            }

            function game_start()
            {
                $('.start_container').hide('slow')
                $('[answer]').attr('blc', '1')
                $('[lifebuoy]').attr('blc', '1')
                $('.display_score').text(0)
                $('[point]').removeClass('active')
                $('[point="1"]').addClass('active')
                lvl = 1
                drawn = random(config.number_questions, dat.length)

                $('.question').text('Welcome')
                $('[answer="A"]').text('Player')
                $('[answer="B"]').text('to the game')
                $('[answer="C"]').text('Millionaires')
                $('[answer="D"]').text('GOOD LUCK!')

                sound('', 'main-theme')
                let ss
                ss = setTimeout(function(){$('.question').show(3000)}, 1000)
                ss = setTimeout(function(){$('[answer="A"]').show(3000)}, 4000)
                ss = setTimeout(function(){$('[answer="B"]').show(3000)}, 8000)
                ss = setTimeout(function(){$('[answer="C"]').show(3000)}, 12000)
                ss = setTimeout(function(){$('[answer="D"]').show(3000)}, 24000)
                ss = setTimeout(function(){$('.points').css('display', 'grid')}, 16000)
                ss = setTimeout(function(){$('.score').css('display', 'grid')}, 20000)
                ss = setTimeout(function(){$('[lifebuoy]').show(3000)}, 24000)
                ss = setTimeout(function()
                {
                    $('.question').text(dat[drawn[lvl]].question)
                    $('[answer="A"]').text(dat[drawn[lvl]].answer_A)
                    $('[answer="B"]').text(dat[drawn[lvl]].answer_B)
                    $('[answer="C"]').text(dat[drawn[lvl]].answer_C)
                    $('[answer="D"]').text(dat[drawn[lvl]].answer_D)
                    $('[answer]').attr('blc', '0')
                    $('[lifebuoy]').attr('blc', '0')
                    $('.reset').css('visibility', 'visible')
                    $('.debug').css('visibility', 'visible')
                    clearTimeout(ss)
                }, 30000)

                $('.my_audio_music').on('ended', function()
                {
                    $(".my_audio_music").remove()
                    sound('', '100-1000', 'yes')
                })
            }

            function game_reset(button)
            {
                $('.reset').css('visibility', 'hidden')
                $('.debug').css('visibility', 'hidden')
                sound('stopClick')
                sound('', 'stopMusic')
                if(button == 'yes'){$('.start_container').show('slow')} else {setTimeout(function(){ $('.start_container').show('slow') }, 3000)}
                $('.question').hide()
                $('[answer="A"]').hide()
                $('[answer="B"]').hide()
                $('[answer="C"]').hide()
                $('[answer="D"]').hide()
                $('.points').css('display', 'none')
                $('.score').css('display', 'none')
                $('[lifebuoy]').hide()
            }
        }
    })
})
