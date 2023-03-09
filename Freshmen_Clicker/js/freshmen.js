// kazdy zakup zwieksza cene o pare monet -> newcena = oldcena + {oldcena/4}     Zaokrąglić do całości


$(function()
{
    /** @param debug Variable for displaying errors and information */
    const debug = false;

    //todo: User Account
    const username = 'pioxtex';

    const init = () =>
    {
        debug === true ? console.log('%c Init: ', 'color:rgb(20,255,20)', 'Start successfully') : null;

        //todo: Download DataBase
        $.ajax({
            url: "php/download.php",
            type: "POST",
            data: "username="+username,
            success: function(obj)
            {
                debug === true ? console.log('%c Download: ', 'color:rgb(20,255,20)', obj) : null;

                //todo: JSON to OBJECT
                let data = JSON.parse(obj);

                //todo: Update DataBase
                const update = ( obj ) =>
                {
                    $.ajax({
                        url: "php/update.php",
                        type: "POST",
                        data: "username="+username+"&score="+obj.score+"&autoClicker="+obj.autoClicker+"&clicker="+obj.clicker+"&shop1="+obj.shop1+"&shop2="+obj.shop2+"&shop3="+obj.shop3+"&shop4="+obj.shop4+"&shop5="+obj.shop5+"&shop6="+obj.shop6+"&shop7="+obj.shop7+"&shop8="+obj.shop8+"&shop9="+obj.shop9+"&shop10="+obj.shop10+"&shop11="+obj.shop11+"&shop12="+obj.shop12+"&shop13="+obj.shop13+"&shop14="+obj.shop14+"&shop15="+obj.shop15+"&shop16="+obj.shop16,
                        success: function(msg) { debug === true ? console.log('%c Update: ', 'color:rgb(20,255,20)', msg) : null; }
                    });
                    //todo: Update display games
                    $('.score').text(obj.score); $('.autoClick').text(obj.autoClicker); $('#click_shop1').text(obj.shop1); $('#click_shop2').text(obj.shop2); $('#click_shop3').text(obj.shop3); $('#click_shop4').text(obj.shop4); $('#click_shop5').text(obj.shop5); $('#click_shop6').text(obj.shop6); $('#click_shop7').text(obj.shop7); $('#click_shop8').text(obj.shop8); $('#click_shop9').text(obj.shop9); $('#click_shop10').text(obj.shop10); $('#click_shop11').text(obj.shop11); $('#click_shop12').text(obj.shop12); $('#click_shop13').text(obj.shop13); $('#click_shop14').text(obj.shop14); $('#click_shop15').text(obj.shop15); $('#click_shop16').text(obj.shop16);
                };

                //todo: shop
                const shop = ( id ) =>
                {
                    let item = parseInt( id );
                    const princeTab = [0, 100, 150, 200, 500, 1000, 5000, 10000, 50000, 100000, 200000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000];
                    const valueTab = [0, 1, 2, 3, 6, 10, 15, 25, 50, 150, 200, 300, 500, 700, 1500, 2000, 2500];

                    let prince = princeTab[item],
                    value = valueTab[item];

                    // todo: If the product can be purchased
                    if(data.score >= prince)
                    {
                        // todo: the process of buying an item
                        data.autoClicker = parseInt(data.autoClicker) + value;
                        data.score = parseInt(data.score) - prince;

                        // todo: purchase record
                        switch(item)
                        {
                            case 1: data.shop1++; break;
                            case 2: data.shop2++; break;
                            case 3: data.shop3++; break;
                            case 4: data.shop4++; break;
                            case 5: data.shop5++; break;
                            case 6: data.shop6++; break;
                            case 7: data.shop7++; break;
                            case 8: data.shop8++; break;
                            case 9: data.shop9++; break;
                            case 10: data.shop10++; break;
                            case 11: data.shop11++; break;
                            case 12: data.shop12++; break;
                            case 13: data.shop13++; break;
                            case 14: data.shop14++; break;
                            case 15: data.shop15++; break;
                            case 16: data.shop16++; break;
                        }

                        update(data);
                        debug === true ? console.log('%c Shop:%c Shop successfully ->', 'color:rgb(20,255,20)', 'color:rgb(150, 150, 150)', 'prince:'+prince + ', value:'+value + ', score:'+data.score + ', autoClicker:'+data.autoClicker + ', id:'+item) : null;
                    }
                };

                //todo: clicker
                const clicker = () =>
                {
                    $('.clicker').css('transform', 'scale(1.1)');
                    setTimeout(function(){$('.clicker').css('transform', 'scale(1)');},100);
                    data.score++;
                    data.clicker++;
                    update( data );
                    debug === true ? console.log('%c Clicker: ', 'color:rgb(20,255,20)', 'Clicker successfully') : null;
                };

                //todo: core games
                $( '.item_shop' ).on('click', function(){ shop( $(this).attr('id').substr(-1) ) })
                $( '.clicker' ).on('click', () => clicker() )
                update( data )
                const autoClicker_function = setInterval(() => 
                {
                    update( data );
                    if(data.autoClicker > 0){ data.score = parseInt(data.score) + parseInt(data.autoClicker); }
                }, 5000)
            }
        });
    };
    
    //todo: Start
    $( '.start_games' ).on('click', () => 
    {
        $('.window').hide(); $('[data-name="loader"]').show();
        setTimeout(() => {$('.window').hide(); $('[data-name="game"]').show(); init();}, 3000);
    });

    //todo: Options
    $( '.option_games' ).on('click', () =>
    {
        $('.window').hide(); $('[data-name="loader"]').show();
        setTimeout(() => {$('.window').hide(); $('[data-name="option"]').show()}, 3000);
    });
});
