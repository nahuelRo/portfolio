import { hamburgerNav } from "./js/hamburgerNav.js";
import scrollTopButton from "./js/buttonScroll.js";
import scrollReveal from "./js/scrollReveal.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerNav(".hamburger", ".nav", ".nav ul", ".nav ul a", ".hamburger span");
  scrollTopButton(".button--scroll");
});

ScrollReveal({ reset: true, delay: 200, duration: 400, mobile: false });

const LeftConfig = {distance: '-50px', origin: 'right'};
const rightConfig = {distance: '-50px', origin: 'left'};
const bottomConfig = {distance: '-50px', origin: 'bottom'};
const topConfig = {distance: '-50px', origin: 'bottom', interval: 100};

const cardConfig = {distance: '-300px', origin: 'right',  delay: 500};
const cardConfig2 = {distance: '-300px', origin: 'left',  delay: 500};

ScrollReveal().reveal('.header', bottomConfig);

ScrollReveal().reveal('.text, .about__paragraph', LeftConfig);
ScrollReveal().reveal('.img, .about__image', rightConfig);

ScrollReveal().reveal('.card', cardConfig);
ScrollReveal().reveal('.card:nth-child(3)', cardConfig2);

ScrollReveal().reveal('.grid-skills-card', topConfig);
