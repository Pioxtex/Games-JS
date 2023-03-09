$(function() {

    /** @param debug Variable for displaying errors and information */
    const debug = (type, message) => {
        let color = 'color:rgb(20, 255, 20)'
        console.log('%c '+type, color, message)
    }

    //todo: User Account
    const username = 'pioxtex'

    const init = () => {
        debug('Init', 'Start successfully')

        //todo: Download DataBase
        $.ajax({
            url: "php/download.php",
            type: "POST",
            data: "username=" + username,
            success: function(obj) {
                debug('Download', obj)

                //todo: JSON to OBJECT
                let data = JSON.parse(obj)

                //todo: Update DataBase
                const update = obj => {
                    $.ajax({
                        url: "php/update.php",
                        type: "POST",
                        data: "username="+username+"&score="+obj.score+"&autoClicker="+obj.autoClicker+"&clicker="+obj.clicker+"&shop1="+obj.shop1+"&shop2="+obj.shop2+"&shop3="+obj.shop3+"&shop4="+obj.shop4+"&shop5="+obj.shop5+"&shop6="+obj.shop6+"&shop7="+obj.shop7+"&shop8="+obj.shop8+"&shop9="+obj.shop9+"&shop10="+obj.shop10+"&shop11="+obj.shop11+"&shop12="+obj.shop12+"&shop13="+obj.shop13+"&shop14="+obj.shop14+"&shop15="+obj.shop15+"&shop16="+obj.shop16,
                        success: msg => debug('Update', msg)
                    })

                    //todo: Update display games
                    $('.score').text(obj.score)
                    $('.autoClick').text(obj.autoClicker)
                    $('#click_shop1').text(obj.shop1)
                    $('#click_shop2').text(obj.shop2)
                    $('#click_shop3').text(obj.shop3)
                    $('#click_shop4').text(obj.shop4)
                    $('#click_shop5').text(obj.shop5)
                    $('#click_shop6').text(obj.shop6)
                    $('#click_shop7').text(obj.shop7)
                    $('#click_shop8').text(obj.shop8)
                    $('#click_shop9').text(obj.shop9)
                    $('#click_shop10').text(obj.shop10)
                    $('#click_shop11').text(obj.shop11)
                    $('#click_shop12').text(obj.shop12)
                    $('#click_shop13').text(obj.shop13)
                    $('#click_shop14').text(obj.shop14)
                    $('#click_shop15').text(obj.shop15)
                    $('#click_shop16').text(obj.shop16)
                }

                //todo: shop
                const shop = id => {
                    let item = parseInt(id)

                    
                }
            }
        })
    }
})