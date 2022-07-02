// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");

  if (window.pageYOffset > 100) {
    header.style.transform = "translateY(-100%)";
  }
  if (window.pageYOffset < 100) {
    header.classList.remove("navbar-fixed");
    header.style.transform = "translateY(0)";
  }

  if (window.pageYOffset > 120) {
    header.classList.add("navbar-fixed");
    header.style.transform = "translateY(0)";
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
