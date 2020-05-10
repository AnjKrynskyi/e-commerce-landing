// https://kenwheeler.github.io/slick/
$(document).ready(function() {
  $(".img__feed").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    prevArrow: $(".btn__prev.btn--style"),
    nextArrow: $(".btn__next.btn--style")
  });
});

// Nav bar
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".link__main");
const lines = document.querySelectorAll(".line");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  burger.classList.toggle("rotate");

  links.forEach(link => {
    link.classList.toggle("fade");
  });

  lines.forEach(line => {
    line.classList.toggle("active");
  });
});
