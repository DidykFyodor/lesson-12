//  Carousel

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: false,
  });
});

// Burger

let burger = document.querySelector("#header__burger");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};

// counter

$('.counter').each(function () {
  $(this).prop('counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});