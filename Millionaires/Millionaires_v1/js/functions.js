const losuj = (function(k, n) {
    if (k > n) alert("Nieprawidłowe dane wejściowe");
    var numbers = new Array(n);
    for (var i = 0; i < n; i++) { numbers[i] = i + 1; }
    for (var i = 0; i < k; i++) {
        var r = Math.floor(Math.random() * n);
        liczba = numbers[r];
        numbers[r] = numbers[n - 1];
        n--;
    }
});

const developer = (function() {
    if (dev == true) {
        console.clear();
        console.log("Numer pytania: " + liczba);
        console.log("Poprawna odpowiedź: " + t[5]);
        console.log("Punkty: " + punkty);
    }
    if (mod == true) {
        if (t[5] == "A") { tt = "0"; }
        if (t[5] == "B") { tt = "1"; }
        if (t[5] == "C") { tt = "2"; }
        if (t[5] == "D") { tt = "3"; }
        answers[tt].style.background = "rgb(30,30,30)";
    }
});

var video = (function(src, append) {
    var v = document.createElement("video");
    if (src != "") { v.src = src; }
    if (append == true) { document.body.appendChild(v); }
    return v;
});

const styles = (function(a) {
    losuj(1, everything);
    t = tablica[liczba - 1];
    used_fiftyfifty = false;
    used_telephonefriend = false;
    used_audience = false;
    developer();
    if (a == "dimming") {
        answerA.style.background = "rgba(0, 0, 0, 0.5)";
        answerB.style.background = "rgba(0, 0, 0, 0.5)";
        answerC.style.background = "rgba(0, 0, 0, 0.5)";
        answerD.style.background = "rgba(0, 0, 0, 0.5)";
        question.innerHTML = t[0];
        answerA.innerHTML = '<span>A: </span>' + t[1];
        answerB.innerHTML = '<span>B: </span>' + t[2];
        answerC.innerHTML = '<span>C: </span>' + t[3];
        answerD.innerHTML = '<span>D: </span>' + t[4];
        answerA.style.visibility = "visible";
        answerB.style.visibility = "visible";
        answerC.style.visibility = "visible";
        answerD.style.visibility = "visible";
    }
    if (a == "classlist") {
        styles("dimming");
        for (var i = 0; i < win; i++) {
            wins[0].classList.add('active');
            wins[i].classList.remove('active');
        };
        gameDiv.style.display = "block";
        punctation.style.display = "block";
        container.style.display = "none";
        used_fifty.style.display = "none";
        used_telephone.style.display = "none";
        used_audience_2.style.display = "none";
        answerA.style.background = "rgba(0, 0, 0, 0.5)";
        answerB.style.background = "rgba(0, 0, 0, 0.5)";
        answerC.style.background = "rgba(0, 0, 0, 0.5)";
        answerD.style.background = "rgba(0, 0, 0, 0.5)";
    }
    if (a == "reset") {
        gameDiv.style.display = "none";
        punctation.style.display = "none";
        used_fifty.style.display = "none";
        used_telephone.style.display = "none";
        used_audience_2.style.display = "none";
        question.innerHTML = "";
        answerA.innerHTML = "";
        answerB.innerHTML = "";
        answerC.innerHTML = "";
        answerD.innerHTML = "";
        answerA.style.visibility = "visible";
        answerB.style.visibility = "visible";
        answerC.style.visibility = "visible";
        answerD.style.visibility = "visible";
        for (var i = 0; i < win; i++) {
            wins[0].classList.add('active');
            wins[i].classList.remove('active');
        };
    }
});

const infoInformation = (function(a) {
    window_info.style.transform = "scale(1,1)";
    window_info.style.transitionDuration = "2000ms";
    if (a == "close") {
        window_info.style.transform = "scale(0,0)";
        information.innerHTML = "";
    }
    if (a == "1") { information.innerHTML = " Masz gwarantowane <span>1 000 zł</span>"; }
    if (a == "2") { information.innerHTML = " Masz gwarantowane <span>40 000 zł</span>"; }
    if (a == "3") { information.innerHTML = "Koniec Gry! <br> Wygrano gwarantowane: <span>1 000 zł</span>"; }
    if (a == "4") { information.innerHTML = "Koniec Gry! <br> Wygrano gwarantowane: <span>40 000 zł</span>"; }
    if (a == "5") { information.innerHTML = "Koniec Gry! <br> Wygrano: <span>0 zł</span>"; }
    if (a == "6") { information.innerHTML = "Koło 50/50 zostało już wykorzystane"; }
    if (a == "7") { information.innerHTML = "Przyjaciel proponuje odpowiedź: <span>" + t[5] + "</span>"; }
    if (a == "8") { information.innerHTML = "Koło telefon do przyjaciela zostało już wykorzystane"; }
    if (a == "9") { information.innerHTML = "Koło publiczność zostało już wykorzystane"; }
    if (a == "10") { information.innerHTML = "Publiczność zdecydowała że poprawna odpowiedź to: <span>" + t[5] + "</span>"; }
    if (a == "11") { information.innerHTML = "Gratulacje!!! <br> Wygrano: <span>1 000 000 zł</span>"; }
});

const gameResult = (function(state) {
    styles("reset");
    if (state == "gameover") {
        if ((punkty > "2") || (punkty == "2")) { infoInformation("3"); }
        if ((punkty > "7") || (punkty == "7")) { infoInformation("4"); }
        if (punkty < "2") { infoInformation("5"); }
        for (var i = 0; i < buttonStart.length; i++) { buttonStart[i].style.visibility = "visible"; };
        for (var i = 0; i < buttonReset.length; i++) { buttonReset[i].style.visibility = "hidden"; };
        music("lose");
        setTimeout('infoInformation("close")', 4000);
    }
    if ((state == "win") && (punkty == "12")) {
        if (t[5] == "A") { tt = "0"; }
        if (t[5] == "B") { tt = "1"; }
        if (t[5] == "C") { tt = "2"; }
        if (t[5] == "D") { tt = "3"; }
        answers[tt].style.background = "rgb(0, 255, 0)";
        for (var i = 0; i < buttonStart.length; i++) { buttonStart[i].style.visibility = "visible"; };
        for (var i = 0; i < buttonReset.length; i++) { buttonReset[i].style.visibility = "hidden"; };
        infoInformation("11");
        setTimeout('infoInformation("close")', 4000);
    }
});

const music = (function(n) {
    Audio.prototype.stop = (function() {
        this.pause();
        this.currentTime = 0;
    });
    if (n == "start") {
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
        audio_start.play();
        video.height = height;
        video.width = width;
        video.muted = true;
        video.play();
    }
    if (n == "theme_1") {
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
        container.style.display = "block";
        video.height = "0px";
        video.width = "0px";
        audio_theme_1.volume = 0.2;
        audio_theme_1.loop = true;
        audio_theme_1.play();
    }
    if (n == "theme_2") {
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
        audio_theme_1.stop();
        audio_theme_2.volume = 0.2;
        audio_theme_2.loop = true;
        audio_theme_2.play();
    }
    if (n == "theme_3") {
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
        audio_theme_2.stop();
        audio_theme_3.volume = 0.2;
        audio_theme_3.loop = true;
        audio_theme_3.play();
    }
    if (n == "lose1") {
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
        audio_lose_1.play();
    }
    if (n == "lose") {
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
        audio_lose.play();
    }
    if (n == "win1") { audio_win1.play(); }
    if (n == "win") {
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
        audio_win.play();
    }
});

const answer = (function(odp) {
    blockade = false;
    if (odp == t[5]) {
        if (odp == "A") { answerA.style.background = "rgb(0, 255, 0)"; }
        if (odp == "B") { answerB.style.background = "rgb(0, 255, 0)"; }
        if (odp == "C") { answerC.style.background = "rgb(0, 255, 0)"; }
        if (odp == "D") { answerD.style.background = "rgb(0, 255, 0)"; }
        for (var i = 0; i < win; i++) {
            if (i == punkty) {
                wins[i].classList.add('active');
                wins[i - 1].classList.remove('active');
            }
            if (punkty == "2") {
                infoInformation("1");
                music("theme_2");
                setTimeout('infoInformation("close")', 3000);
            }
            if (punkty == "7") {
                infoInformation("2");
                music("theme_3");
                setTimeout('infoInformation("close")', 3000);
            }
            if ((punkty == "12") && (punkty == win)) {
                music("win");
                setTimeout('gameResult("win")', 1000);
            }
        };
        if (punkty < "12") { punkty++; }
        music("win1");
        setTimeout('styles("dimming")', 2000);
    } else {
        if (punkty < "2") { music("lose1"); }
        if (odp == "A") { answerA.style.background = "rgb(255, 0, 0)"; }
        if (odp == "B") { answerB.style.background = "rgb(255, 0, 0)"; }
        if (odp == "C") { answerC.style.background = "rgb(255, 0, 0)"; }
        if (odp == "D") { answerD.style.background = "rgb(255, 0, 0)"; }
        if (t[5] == "A") { tt = "0"; }
        if (t[5] == "B") { tt = "1"; }
        if (t[5] == "C") { tt = "2"; }
        if (t[5] == "D") { tt = "3"; }
        answers[tt].style.background = "rgb(0, 255, 0)";
        music("lose1");
        setTimeout('gameResult("gameover")', 2000);
    }
});