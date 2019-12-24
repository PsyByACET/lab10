$(function(){
    $( '#accordion' ).accordion();
    $('.but1').click(function(){
        $('.sq1').animate({'width': '200px'}, 600);
        $('.sq1 p').text('Свернуть');
    });
    $('.sq1').click(function(){
        $(this).animate({'width': '40px'}, 600);
        $('.sq1 p').empty();
    });

});