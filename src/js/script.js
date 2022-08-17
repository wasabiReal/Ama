// Slick slider properties
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

$('.compatibility__ios').after('<hr/>');

// Function for showing burger menu button
function burger(){
    if (document.getElementById("burger__nav").style.display == 'none'){
        document.getElementById("burger__nav").style.display = 'block';
    }
    else {
        document.getElementById("burger__nav").style.display = 'none';
    }
}


// Refresh slider when window changing size
$(window).resize(function(){
    $('.slider')[0].slick.refresh();
});


// Validation for email button and thank you message.
$('#email__button').click(function (){
    const email_form = document.getElementById('email_form');
    const email = document.getElementById('email');
    
    isValidEmail = email.checkValidity();

    if ( isValidEmail ) {
        alert("Thank you for registering for the newsletter");
        email_form.submit();
    }
    
});