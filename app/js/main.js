// $(function () {



$(function () {
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
    });
});



$(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});






