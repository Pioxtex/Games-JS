$(document).ready(function()
{
    let object
    let lvl = 1
    const __Config__ = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        yellow: 'rgba(230, 230, 0, 0.9)',
        green: 'rgba(0, 255, 0, 0.9)',
        red: 'rgba(255, 0, 0, 0.9)',
        duration: 5
    }

    const speakerLifebuoy = {
        1: "Chcesz wykorzystać koło ratunkowe 50:50?<br/>Dobrze, a więc usuwam 2 błędne odpowiedzi.<br/>Czy teraz ułatwiło ci wybranie poprawnej odpowiedzi?",
        2: "No dobrze, a więc dzwonimy do przyjaciela.<br/>Hallo? Hallo? <br/>Słyszysz nas?",
        3: "Uwaga, uwaga droga publiczność!<br/>Potrzebna jest wasza pomoc.<br/>Zagłosujcie jaka jest waszym zdaniem poprawna odpowiedź."
    }

    const speakerWelcome = {
        1: "Witamy w grze Millionaires!<br/>Czy jesteś gotowy, aby wygrać milion dolarów?<br/>Myśl lub ryzykuj, to Twoja gra!<br/>Masz do dyspozycji 3 koła ratunkowe!<br/>Powodzenia, Hubert Urbański!<br /><button class='start'>Start</button>",
        2: "To historyczny moment!<br/>Zawodnik dopiero rozpoczyna swoją milionową podróż.<br/>Wciąż nie wie, co go czeka na drodze.<br/>Czy da z siebie wszystko?<br/> Czy będzie walczył do ostatnich sił?<br/>O tym przekonamy się już za chwilę!",
        3: "Co to była za gra!<br/>Wygrałeś równy 1 Milion!<br/>Jesteś prawdziwym mistrzem wiedzy!<br/>Gratulacje!!!"
    }

    const speakerQuestion = {
        1: "Więc chodźmy!<br/>Oto twoje pierwsze pytanie.<br/>Czy jesteś wstanie na nie poprawnie odpowiedzieć?",
        2: "Pierwsze pytanie było łatwe.<br/>Teraz może coś trudniejszego.<br/>Pamiętaj, że z czasem pytania mogą być trudniejsze.",
        3: "No dobrze.. <br/>To teraz zadam ci takie pytanie z innej beczki.<br/>Czy będziesz znał na nią odpowiedź?",
        4: "Hmm... Dobry gracz!<br/>Czas podwyższyć poziom!<br/>To zobaczymy co tym razem odpowiesz..",
        5: "A co powiesz na takie pytanie? <br/>Wiem wiem, nie poddasz się<br/>Liczę na to, że dasz radę!",
        6: "Okey.. <br/>Teraz dajmy czadu!<br/>Myśle że to pytanie pójdzie jak z płatka<br/>Mam rację?",
        7: "Hej Hej, Bawmy się! <br/>Hej Hej, śmiejmy się.<br/>Bliżej bliżej, wygrany wyłania się.",
        8: "To jest to! Czujesz już zapach zwycięstwa?<br/>To odpowiedaj poprawnie!<br/>A kto wie może i ty również posmakujesz!",
        9: "Zabawa trwa i gra!<br/>Kolejne pytanie dla ciebie mam!",
        10: "A więc! <br/> Bez powrotnie, jeden jedyny raz niech wygra ktoś!",
        11: "W taką podróż chcę wyruszyć.<br/>Podróż po zwycięstwo.<br/>Dajesz dajesz, musisz to wygrać!",
        12: "Po chwili przerwy na ochłonienie z emocji wracamy do gry!<br/>Zaczynamy wyścig do zwycięstwa!",
        13: "To już 13 pytanie!<br/>Czy 13 numer doda ci szczęścia?<br/>Przekonajmy się!",
        14: "To już tak blisko!<br/> Przed ostatnie pytanie do miliona!<br/>A brzmi oto:",
        15: "Nie wierze to już ostatnie pytanie!<br/>Jesteś już tak blisko wygranej!<br/>Czy jesteś gotów być najlepszym graczem?<br/>Jeśli tak to ostatnie pytanie brzmi:"
    }
    const speakerCorrectAnswer = {
        1: "Czy jesteś pewien swojej odpowiedzi?<br/>Tak?<br/>Masz rację!<br/>To jest poprawna odpowiedź!",
        2: "Co za pewność.<br/>To jest prawidłowa odpowiedź!<br/>Czy kolejne pytania będą równie łatwe dla Ciebie?",
        3: "Houston! <br/>To jest to!<br/> Takiej odpowiedzi oczekiwaliśmy!",
        4: "Pff! Błachostka dla ciebie!<br/>Dawaj kolejne pytanie!",
        5: "Za łatwe dla niego...<br/>Mamy coś trudniejszego??",
        6: "No brawo!<br/>Coraz bliżej..<br/>Oby tak dalej!",
        7: "Wsiąść do pociągu poprawnej odpowiedzi.<br/>Myślenie daje efekty<br/>Wygrana tuż tuż!",
        8: "Patrz ile już za tobą i ciągle więcej!<br/>Chcesz kolejne pytanie?",
        9: "To ta chwila<br/>Chwila wygrywa<br/>Viva Las Vegas!<br/>To poprawna odpowiedź!",
        10: "Królu nasz!<br/>Zgłaszamy że ucześnik wybrał dobrą odpowiedź!<br/>Brawa dla niego!",
        11: "To ta chwila tryumfu<br/>Ciesz się tą chwilą radości!<br/>Wygrałeś poprawną odpowiedź!",
        12: "Oj tak!<br/>Tak dalej... <br/>Trzymam kciuki żeby kolejne pytanie również było tak łatwe jak to!",
        13: "Niby numer 13 pechowy.<br/>A tu taka miła niespodzianka!<br/>Tak trzymaj!",
        14: "Tak! <br/>To poprawna odpowiedź<br/> Ty to masz szczęście do wygrywania!",
        15: "Tak! Tak! Tak!<br/> Nie wierze, to Poprawna odpowiedź! "
    }
    const speakerWrongAnswer = {
        1: "Czy jesteś pewien swojej odpowiedzi?<br />Przykro mi.<br />To nie jest poprawna odpowiedź.<br />Ale dobrze, może zagramy jeszcze raz?",
        2: "Ajaj, No niestety.<br/>To nie jest poprawna odpwowiedź. <br/>Czyżby pytanie cię przerosło? ",
        3: "No co za pech! <br/>Tak blisko a tak daleko...<br/>Ale głowa do góry!",
        4: "Houston mamy problem!<br/>Odebraliśmy nie poprawną odpowiedź!<br/>Co z tym robimy?",
        5: "Hallo centrala?<br/>Brak wstępu na wyższy poziom.<br/>Nie tym razem!",
        6: "Czyżby chwilowe zaćmienie?<br/> Przykro mi ale ...<br/>Podałeś nie poprawną odpowiedź",
        7: "Ale to już było i nie wróci więcej... <br/>I choć tyle się zdarzyło<br/>To do przodu wciąż wyrywa głupie serce.",
        8: "Kiedy mówisz, nie tak szybko<br/>Oglądam się za siebie. <br/>Sekundnik cofa się. <br/>Widze<br/>Wybrałeś nie poprawną odpowiedź.",
        9: "Z czterech odpowiedzi...<br/>Aż z tyle możliwości<br/>Z tylu zdarzeń.<br/>Wybrałeś złą odpowiedź :(",
        10: "Ale to już było<br/>Znikło gdzieś za nami<br/>I nie wróci więcej.",
        11: "No nie tym razem.<br/>Chodź się starałeś to niestety nie wyszło.",
        12: "Tym razem się nie udało.<br/>Ale byłeś taki dzielny!",
        13: "To nie jest poprawna odpowiedź. <br/>Czyżby pechowa 13...?",
        14: "Byłeś tak blisko ale niestety nie wyszło <br/> Nie załamuj się, następnym razem będzie lepiej!",
        15: "Ajaj, tak blisko... <br/>No niestety nie mogę zaliczyć tej odpowiedzi<br/>A tak bardzo bym chciał..."
    }

    const adding_question = () => {
        $('.sound').click()
        $('.parent').hide()
        $('.addQuestion').css('display', 'grid')
        $('.close_new_question').on('click', function()
        {
            $('.addQuestion').hide('slow')
            $('.parent').show('slow')
            $('.sound').click()
        })
    }

    const mute = () => {
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

    const debug = () => {
        $('.debug_display').html('<i style="color:rgb(255, 255, 255);">Correct Answer: </i>' + __Questions__(lvl).correct_answer)
        let debugMode = setTimeout(function(){ $('.debug_display').text(''); clearTimeout(debugMode) }, 2000)
    }

    const __Questions__ = (lvl) =>
    {
        let data = JSON.parse(object)
        if(lvl == 1) return data.a0;
        if(lvl == 2) return data.a1;
        if(lvl == 3) return data.a2;
        if(lvl == 4) return data.a3;
        if(lvl == 5) return data.a4;
        if(lvl == 6) return data.a5;
        if(lvl == 7) return data.a6;
        if(lvl == 8) return data.a7;
        if(lvl == 9) return data.a8;
        if(lvl == 10) return data.a9;
        if(lvl == 11) return data.a10;
        if(lvl == 12) return data.a11;
        if(lvl == 13) return data.a12;
        if(lvl == 14) return data.a13;
        if(lvl == 15) return data.a14;
    }

    const __Music__ = (click, music, loop) => {
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

    $.ajax({
        type: "POST",
        url: "questions.php?api=PioxtexOS",
        format: "json",
        success: obj => object = obj
    })

    const startGame = () => {
        lvl = 1

        /* Hide button Start */
        $('.start').hide()
        $('.resetGames').hide()
        $('.question').hide()
        $('.answer_A').hide()
        $('.answer_B').hide()
        $('.answer_C').hide()
        $('.answer_D').hide()

        /* Background button */
        $('[answer]').css({'backgroundColor':__Config__.backgroundColor, 'opacity':1})

        /* point active */
        $('[point]').removeClass('active').addClass('noActive')
        $('[point="'+lvl+'"]').removeClass('noActive').addClass('active')

        /* blockade double click */
        $('[answer]').attr('blc', '0')
        $('[lifebuoy]').attr('blc', '0')
        
        /* Question */
        $('.question').text(__Questions__(lvl).question)

        /* Answer */
        $('.answer_A').text(__Questions__(lvl).answer_A)
        $('.answer_B').text(__Questions__(lvl).answer_B)
        $('.answer_C').text(__Questions__(lvl).answer_C)
        $('.answer_D').text(__Questions__(lvl).answer_D)

        /* Music welcome*/
        __Music__('', 'main-theme')

        /* Speaker */
        $('.speaker').html(speakerWelcome[2])

        $('.my_audio_music').on('ended', function()
        {
            $(".my_audio_music").remove()

            /* show questions */
            $('.question').show()
            $('.answer_A').show()
            $('.answer_B').show()
            $('.answer_C').show()
            $('.answer_D').show()
            $('[lifebuoy]').show()

            /* Speaker */
            $('.speaker').html(speakerQuestion[lvl])

            /* music lvl 1 */
            __Music__('', '100-1000', 'yes')
        })
    }

    const checking_answers = answer => {
        if(__Questions__(lvl).correct_answer === answer)
        {
            /* Correct Answer */
            __Music__('correct-answer')
            $('.speaker').html(speakerCorrectAnswer[lvl])

            /* next level */
            lvl++
            
            $('[answer="'+answer+'"]').css({'backgroundColor':__Config__.green, 'opacity':1})

            setTimeout(()=>
            {
                /* Answer */
                $('[answer]').attr('blc', 0).css({'backgroundColor':__Config__.backgroundColor, 'opacity':1})
                
                /* Point */
                $('[point]').removeClass('active')
                $('[point]').addClass('noActive')
                $('[point="'+lvl+'"]').removeClass('noActive')
                $('[point="'+lvl+'"]').addClass('active')

                /* Next music lvl */
                if(lvl == 3){__Music__('', 'stopMusic'); __Music__('', '2000-10000', 'yes')}
                if(lvl == 5){__Music__('', 'stopMusic'); __Music__('', '10000-75000', 'yes')}
                if(lvl == 7){__Music__('', 'stopMusic'); __Music__('', '125000', 'yes')}
                if(lvl == 9){__Music__('', 'stopMusic'); __Music__('', '250000', 'yes')}
                if(lvl == 11){__Music__('', 'stopMusic'); __Music__('', '500000', 'yes')}
                if(lvl == 13){__Music__('', 'stopMusic'); __Music__('', '1000000', 'yes')}
                if(lvl == 16){ return winGame( lvl-1 ) }
                else
                {
                    /* next speaker */
                    $('.speaker').html(speakerQuestion[lvl])

                    /* next Question */
                    $('.question').text(__Questions__(lvl).question)
                    $('[answer="A"]').text(__Questions__(lvl).answer_A)
                    $('[answer="B"]').text(__Questions__(lvl).answer_B)
                    $('[answer="C"]').text(__Questions__(lvl).answer_C)
                    $('[answer="D"]').text(__Questions__(lvl).answer_D)
                }
            }, 1000*__Config__.duration)
        } 
        else 
        {
            /* Wrong Answer */
            __Music__('', 'stopMusic')
            __Music__('wrong-answer')
            $('.speaker').html(speakerWrongAnswer[lvl])
            $('.resetGames').show()

            /* Block click */
            $('[answer]').attr('blc', '1')
            $('[lifebuoy]').attr('blc', '1')

            /* correct answer show */
            $('[answer="'+answer+'"]').css({'backgroundColor':__Config__.red, 'opacity':1})
            $('[answer="'+__Questions__(lvl).correct_answer+'"]').css({'backgroundColor':__Config__.green, 'opacity':1})
            
            /* start game */
            $(".start").on('click', startGame)
        }
    }

    const checking_lifebuoy = lifebuoy =>
    {
        if(lifebuoy == 1)
        {
            __Music__('50-50')
            $('.speaker').html(speakerLifebuoy[1])
            $('[lifebuoy="1"]').hide()
            if(__Questions__(lvl).correct_answer == 'A'){$('[answer="C"]').hide(); $('[answer="D"]').hide()}
            if(__Questions__(lvl).correct_answer == 'B'){$('[answer="A"]').hide(); $('[answer="C"]').hide()}
            if(__Questions__(lvl).correct_answer == 'C'){$('[answer="D"]').hide(); $('[answer="B"]').hide()}
            if(__Questions__(lvl).correct_answer == 'D'){$('[answer="A"]').hide(); $('[answer="B"]').hide()}
        }
        if(lifebuoy == 2)
        {
            __Music__('phone')
            $('.speaker').html(speakerLifebuoy[2])
            $('[lifebuoy="2"]').hide()
            let ss = setTimeout(function()
            {
                __Music__('phone-end')
                $('.speaker').html("Tak tak, słyszę.<br/>Mi się wydaje że poprawna odpowiedź to: "+__Questions__(lvl).correct_answer)
                clearTimeout(ss)
            }, 5000)
        }
        if(lifebuoy == 3){
            __Music__('ask')
            $('.speaker').html(speakerLifebuoy[3])
            $('[lifebuoy="3"]').hide()
            let ss = setTimeout(function()
            {
                __Music__('phone-end')
                $('.speaker').html("Większość publiczności zdecydowała że <br/>poprawna odpowiedź to: "+__Questions__(lvl).correct_answer)
                clearTimeout(ss)
            }, 5000)
        }
    }

    const winGame = lvl => {
        __Music__('', 'stopMusic')
        __Music__('', '1000000_win')
        $('.speaker').html(speakerWelcome[3])
        $('.question').hide()
        $('[answer]').hide()
        $('[lifebuoy]').hide()
        let ss = setTimeout(() => {$('.resetGames').show(); clearTimeout(ss)}, 1000 * __Config__.duration)
    }

    /* button start game */
    $(".start").on('click', startGame)

    /* settings button */
    $('.debug').on('click', debug)
    $('.sound').on('click', mute)
    $('.reset').on('click', () => location.reload())
    $('.adding_question').on('click', adding_question)

    /* Hover Answer */
    $('[answer]').hover(
        function(){ if($(this).attr('blc') === '0'){$(this).css('backgroundColor', __Config__.yellow)} },
        function(){ if($(this).attr('blc') === '0'){$(this).css('backgroundColor', __Config__.backgroundColor)} }
    )

    /* Button Answer */
    $('[answer]').on('click', function()
    {
        if($(this).attr('blc') === '0')
        {
            __Music__('final-answer')
            $('[answer]').attr('blc', '1')
            $(this).animate({opacity: 0.5}, 1000*__Config__.duration, function(){ checking_answers( $(this).attr('answer'))})
            $(this).css('backgroundColor', __Config__.yellow)
        }
    })

    /* Button Lifebuoy */
    $('[lifebuoy]').on('click', function()
    {
        if($(this).attr('blc') === '0')
        {
            $(this).attr('blc', '1')
            checking_lifebuoy($(this).attr('lifebuoy'))
        }
    })
})
