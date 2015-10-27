$(document).ready(function() {
    new WOW().init();
});


/*Scrol TO*/

$('a.anchorLink').click(function() {
    var elementClicked = $(this).attr("href");
    var destination = $(elementClicked).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination - 70
    }, 500);
    return false;
});
