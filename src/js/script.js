$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay:true,
        autoplaySpeed: 10000,
        speed: 600,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 300
    });
});
