$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay:false,
        autoplaySpeed: 4000,
        speed: 800,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 300
    });
});

$('li.nav-item').hover(
    function(){ $(this).addClass('nav__active') },
    function(){ $(this).removeClass('nav__active') }
);

$('.compatibility__ios').after('<hr/>');

function burger(){
    if (document.getElementById("burger__nav").style.display == 'none'){
        document.getElementById("burger__nav").style.display = 'block';
    }
    else {
        document.getElementById("burger__nav").style.display = 'none';
    }
}