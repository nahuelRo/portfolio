const d = document;


export const hamburgerNav = ($hamburger, $nav) => {
  const hamburger = d.querySelector($hamburger);
  const nav = d.querySelector($nav)

  nav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
}