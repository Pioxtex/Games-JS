function audio( type )
{
    console.log(type)
    let theme_1 = new Audio( 'audio/theme_1.mp3' );
    let theme_2 = new Audio( 'audio/theme_2.mp3' );
    let theme_3 = new Audio( 'audio/theme_3.mp3' );
    let theme_4 = new Audio( 'audio/theme_4.mp3' );
    let lose_1 = new Audio( 'audio/lose_1.mp3' );
    let lose = new Audio( 'audio/lose.mp3' );
    let oklaski = new Audio( 'audio/oklaski.mp3' );
    let start = new Audio( 'audio/start.mp3' );
    let win1 = new Audio( 'audio/win1.mp3' );

/*
    type === 'theme_1' ? config( theme_1 ) : null;
    type === 'theme_2' ? config( theme_2 ) : null;
    type === 'theme_3' ? config( theme_3 ) : null;
    type === 'theme_4' ? config( theme_4 ) : null;

    type === 'lose_1' ? lose_1.play() : null;
    type === 'lose' ? lose.play() : null;
    type === 'oklaski' ? oklaski.play() : null;
    type === 'start' ? start.play() : null;
    type === 'win1' ? win1.play() : null;
*/

    Audio.prototype.stop = (function()
    {
        this.pause();
        this.currentTime = 0;
        console.log(this)
    });

    if( type === 'start' )
    {
        theme_1.stop();
        theme_2.stop();
        theme_3.stop();
        theme_4.stop();
        start.play();
    }

    if( type === 'theme_1' )
    {
        theme_1.stop();
        theme_2.stop();
        theme_3.stop();
        theme_4.stop();
        theme_1.volume = 0.2;
        theme_1.loop = true;
        theme_1.play();
    }

    if( type === 'theme_2' )
    {
        theme_1.stop();
        theme_2.stop();
        theme_3.stop();
        theme_4.stop();
        theme_2.volume = 0.2;
        theme_2.loop = true;
        theme_2.play();
    }

}

function Video( src, append )
{
    let v = document.createElement( 'video' );
    src != "" ? v.src = src : null;
    append == true ? document.getElementById('questionText').appendChild(v) : null;
    return v;
}

export { audio, Video };