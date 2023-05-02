const d = document;

export const hamburgerNav = (
  $hamburger,
  $nav,
  $navUl,
  $navUla,
  $hamburgerSpan
) => {
  const hamburger = d.querySelector($hamburger);
  const nav = d.querySelector($nav);

  d.addEventListener("click", (e) => {
    if (e.target.matches($hamburger) || e.target.matches($hamburgerSpan)) {
      nav.classList.toggle("active");
      hamburger.classList.toggle("is-active");
    }

    if (e.target.matches($navUl) || e.target.matches($navUla)) {
      nav.classList.remove("active");
      hamburger.classList.remove("is-active");
    }
  });
};
