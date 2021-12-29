/**
 * @name Millionaires
 * @author Pioxtex
 * @version 3.2.4
 */

/** @param debug Variable for displaying errors and information */
const debug = true;

const MILLIONAIRES = 
{
    download: function()
    {
        $.ajax({
            url: 'php/download.php',
            type: 'POST',
            data: "n=" + $('#textarea')[0].childNodes.length,
            format: 'json',
            success: function( obj ) {
                if( obj.length > 1 ){ chatJS.display( '', JSON.parse( obj ) ); }
                if( obj ){ chatJS.display( JSON.parse( obj ) ); }
                debug === true ? console.log('%c Download: ', 'color:rgb(20,255,20)', obj) : null;
            },
            error: function() {
                alertify.error( 'Error: Download Message - no connect DB' );
            }
        });
    }
}

$(document).ready(function(){
    $('.start').on('click', function(){})
})