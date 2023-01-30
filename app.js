$('.thank-you-section').hide();

$('.button').click(function(){
    let userRating = $(this).text();
    console.log(userRating)
    $(this).css('background-color','hsl(216, 12%, 54%)');
    $(this).css('color','white');
    $(this).siblings().css('background-color','hsla(0,0%,100%,0.1)')
    $(this).siblings().css('color','hsl(217, 12%, 63%)')
    $('.rating').text(userRating);
})

$('.submit-button').click(function(){
    $('.rating-start-section').hide();
    $('.thank-you-section').show();
})



