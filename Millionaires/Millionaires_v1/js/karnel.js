var t, tt;
var punkty = 1,
    win = 12,
    everything = 28;
var height = screen.availHeight,
    width = screen.availWidth;
//var height = window.innerHeight, width = window.innerWidth;
var used_fiftyfifty = false,
    used_telephonefriend = false,
    used_audience = false,
    blockade = false;
var audio_start = new Audio('music/start.mp3'),
    audio_theme_1 = new Audio('music/theme_1.mp3'),
    audio_theme_2 = new Audio('music/theme_2.mp3'),
    audio_theme_3 = new Audio('music/theme_3.mp3'),
    audio_lose_1 = new Audio('music/lose_1.mp3'),
    audio_lose = new Audio('music/lose.mp3'),
    audio_win1 = new Audio('music/win1.mp3'),
    audio_win = new Audio('music/oklaski.mp3');
var video = new video("video/start.mp4", true);
var buttonStart = document.getElementsByClassName("start"),
    buttonReset = document.getElementsByClassName("reset");
var fiftyfifty = document.getElementsByClassName("fiftyfifty"),
    telephonefriend = document.getElementsByClassName("telephonefriend"),
    audience = document.getElementsByClassName("audience");
var used_fifty = document.getElementById("used_fifty"),
    used_telephone = document.getElementById("used_telephone"),
    used_audience_2 = document.getElementById("used_audience");
var gameDiv = document.getElementById("game"),
    information = document.getElementById("information"),
    window_info = document.getElementById("window_info"),
    punctation = document.getElementById("punctation"),
    vid = document.getElementsByName("video"),
    container = document.getElementById("container");
var question = document.getElementById("question"),
    answerA = document.getElementById("answerA"),
    answerB = document.getElementById("answerB"),
    answerC = document.getElementById("answerC"),
    answerD = document.getElementById("answerD"),
    answers = [document.getElementById("answerA"), document.getElementById("answerB"), document.getElementById("answerC"), document.getElementById("answerD")];
var wins = [document.getElementById("win1"), document.getElementById("win2"), document.getElementById("win3"), document.getElementById("win4"), document.getElementById("win5"), document.getElementById("win6"), document.getElementById("win7"), document.getElementById("win8"), document.getElementById("win9"), document.getElementById("win10"), document.getElementById("win11"), document.getElementById("win12")];
for (var i = 0; i < buttonStart.length; i++) {
    buttonStart[i].onclick = (function() {
        if (punkty = "1") {
            for (var i = 0; i < buttonStart.length; i++) { buttonStart[i].style.visibility = "hidden"; };
            for (var i = 0; i < buttonReset.length; i++) { buttonReset[i].style.visibility = "visible"; };
            styles("classlist");
            music("start");
            setTimeout('music("theme_1")', 14000);
        }
    });
};
for (var i = 0; i < buttonReset.length; i++) {
    buttonReset[i].onclick = (function() {
        for (var i = 0; i < buttonStart.length; i++) { buttonStart[i].style.visibility = "visible"; };
        for (var i = 0; i < buttonReset.length; i++) { buttonReset[i].style.visibility = "hidden"; };
        punkty = 1;
        styles("reset");
        audio_theme_1.stop();
        audio_theme_2.stop();
        audio_theme_3.stop();
    });
};
for (var i = 0; i < fiftyfifty.length; i++) {
    fiftyfifty[i].onclick = (function() {
        if (used_fiftyfifty != true) {
            used_fiftyfifty = true;
            used_fifty.style.display = "block";
            if ("A" == t[5]) {
                answerC.style.visibility = "hidden";
                answerD.style.visibility = "hidden";
            }
            if ("B" == t[5]) {
                answerA.style.visibility = "hidden";
                answerD.style.visibility = "hidden";
            }
            if ("C" == t[5]) {
                answerA.style.visibility = "hidden";
                answerB.style.visibility = "hidden";
            }
            if ("D" == t[5]) {
                answerC.style.visibility = "hidden";
                answerB.style.visibility = "hidden";
            }
        } else {
            infoInformation("6");
            setTimeout('infoInformation("close")', 4000);
        }
    });
};
for (var i = 0; i < telephonefriend.length; i++) {
    telephonefriend[i].onclick = (function() {
        if (used_telephonefriend != true) {
            used_telephonefriend = true;
            used_telephone.style.display = "block";
            infoInformation("7");
            setTimeout('infoInformation("close")', 4000);
        } else {
            infoInformation("8");
            setTimeout('infoInformation("close")', 4000);
        }
    });
};
for (var i = 0; i < audience.length; i++) {
    audience[i].onclick = (function() {
        if (used_audience != true) {
            used_audience = true;
            used_audience_2.style.display = "block";
            infoInformation("10");
            setTimeout('infoInformation("close")', 4000);
        } else {
            infoInformation("9");
            setTimeout('infoInformation("close")', 4000);
        }
    });
};

answerA.onclick = (function() {
    if (blockade == false) {
        blockade = true;
        answerA.style.background = "rgb(255, 153, 0)";
        setTimeout('answer("A")', 2000);
    }
});
answerB.onclick = (function() {
    if (blockade == false) {
        blockade = true;
        answerB.style.background = "rgb(255, 153, 0)";
        setTimeout('answer("B")', 2000);
    }
});
answerC.onclick = (function() {
    if (blockade == false) {
        blockade = true;
        answerC.style.background = "rgb(255, 153, 0)";
        setTimeout('answer("C")', 2000);
    }
});
answerD.onclick = (function() {
    if (blockade == false) {
        blockade = true;
        answerD.style.background = "rgb(255, 153, 0)";
        setTimeout('answer("D")', 2000);
    }
});
video.height = "0px";
video.width = "0px";



//style="visibility: hidden;" oncopy="window.event.returnValue=false;"  onload="window.document.body.style.visibility='visible';" onblur="window.document.all('container').style.visibility='hidden';"  onfocus="window.document.all('container').style.visibility='visible';" onbeforeprint="window.document.body.style.visibility='hidden'; window.alert('Tekst chroniony prawem autorskim. Kopiowanie wymaga uzyskania zgody autora');" onafterprint="window.document.body.style.visibility='visible';" onselect="return false" oncontextmenu="return false" onselectstart="return false" ondragstart="return false" ondrag="return false">