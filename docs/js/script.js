function burger(){"none"==document.getElementById("burger__nav").style.display?document.getElementById("burger__nav").style.display="block":document.getElementById("burger__nav").style.display="none"}$(document).ready((function(){$(".slider").slick({arrows:!1,dots:!0,autoplay:!1,autoplaySpeed:4e3,speed:800,infinite:!0,cssEase:"ease-in-out",touchThreshold:300})})),$(".compatibility__ios").after("<hr/>"),$(window).resize((function(){$(".slider")[0].slick.refresh()})),$("#email__button").click((function(){const e=document.getElementById("email_form"),t=document.getElementById("email");isValidEmail=t.checkValidity(),isValidEmail&&(alert("Thank you for registering for the newsletter"),e.submit())}));