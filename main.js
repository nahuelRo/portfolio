import { hamburgerNav } from "./js/hamburgerNav.js";
import scrollTopButton from "./js/buttonScroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerNav(".hamburger", ".nav", ".nav ul", ".nav ul a", ".hamburger span");
  scrollTopButton(".button--scroll");
});