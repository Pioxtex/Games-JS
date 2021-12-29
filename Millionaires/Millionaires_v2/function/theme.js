function background( link, color )
{
    console.log(link,color)
    let a;
    color === 'wait' ? a = 'rgb(255, 180, 0)' : null;
    color === 'default' ? a = 'linear-gradient(217deg, rgba(0,80,200,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(20,120,205,.7), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(110,0,255,.8), rgba(0,0,255,0) 70.71%' : null;
    color === 'green' ? a = 'rgb(0, 180, 0)' : null;
    color === 'red' ? a = 'rgb(180, 0, 0)' : null;
    if(color === 'default') $( '.millionaires_answers' ).css('background', a);
    $( link ).css('background', a);
}

function point( level )
{
    $( '.millionaires_point' ).removeClass( 'active' );
    $( '.millionaires_point[level="' + level + '"]' ).addClass( 'active' );
}

function score_set( scr )
{
    $( '.millionaires_score > #score' ).text( scr );
}

export { background, point, score_set };