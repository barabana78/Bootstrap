'use strict';
$(document).ready(function(){
    $('.mySlider').slick({
        dots: false,
        slide: 'div',
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.row-prev',
        nextArrow: '.row-next',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
// ПЛАВНЫЙ СКРОЛЛ
    $("#menu, #mobileMenu, #scroll").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
//забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    })
});