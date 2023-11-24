let mobileNav = document.querySelector(".mobileNavbarBtn");

let navHeader = document.querySelector(".header");

let menu = document.querySelector(".mobileNavIcon");

let toggleNavbar = () => {
  navHeader.classList.toggle("active");
};

let closeIcon = () => {
  menu.classList.toggle("icon");
};

mobileNav.addEventListener("click", () => toggleNavbar());

mobileNav.addEventListener("click", () => closeIcon());
