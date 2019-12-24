
$(function(){
    $( '#accordion' ).accordion();

    /* 1-я кнопка */
    $('.but1').click(function(){
        $('.sq1').animate({'width': '200px'}, 600);
        $('.sq1 p').text('Свернуть');
    });

    $('.sq1').click(function(){
        $(this).animate({'width': '40px'}, 600);
        $('.sq1 p').empty();
    });

/* на данный момент показано 4 метода */

    /* 2-я кнопка */
    $('.sq2').click(function(){
        $(this).hide(600);
    });

    $('.but2').click(function(){
        $('.sq2').show(600);
    });

/* на данный момент показано 6 методов */

    /* 3-я кнопка */
    $('.but3').click(function(){
        $('.sq3').slideUp(600).delay(600).slideDown(600);
    });

/* на данный момент показано 9 методов */

    /* 4-я кнопка */
    $('.but4').click(function(){
        $('.sq4').addClass('green')
    });
    $('.sq4').mouseenter(function(){
        $(this).removeClass('green');
    });
    
/* на данный момент показано 12 методов */

    /* 5-я кнопка */
    $('.but5').click(function(){
        $('.sq5').fadeTo(600, .5)
    });
    $('.sq5').click(function(){
        $('.sq5').fadeTo(600, 1)
    });
    
/* на данный момент показано 13 методов */

     /* поле ввода*/
     $('input').change(function(){
        $('#username').text(', ' + $(this).val())
    });

/* на данный момент показано 16 методов */

});