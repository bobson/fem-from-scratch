const hamburgerButton = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector(".primary-navigation");

hamburgerButton.addEventListener("click", () => {
  const navOpened = hamburgerButton.getAttribute("aria-expanded");

  if (navOpened === "false") {
    hamburgerButton.setAttribute("aria-expanded", "true");
  } else {
    hamburgerButton.setAttribute("aria-expanded", "false");
  }
  console.log(navOpened);
});
