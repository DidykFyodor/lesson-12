//  Carousel

$(document).ready(function () {
  $(".carosel").slick({
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
