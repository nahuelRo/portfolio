import { hamburgerNav } from "./js/hamburgerNav.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerNav(".hamburger", ".nav", ".nav ul", ".nav ul a", ".hamburger span");
});
