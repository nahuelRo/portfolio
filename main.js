import { hamburgerNav } from "./js/hamburgerNav.js";

const d = document;

d.addEventListener("click", (e) => {
  hamburgerNav(".hamburger", ".nav");
})
