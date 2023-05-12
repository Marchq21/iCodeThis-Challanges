const btnShow = document.querySelector(".btn-show");
const btnClose = document.querySelector(".btn-close");
const logoutLink = document.querySelector(".billing__menu--logout");
const billingMenu = document.querySelector(".billing__menu--links");
const hamburgerMenu = document.querySelector(".hamburger-menu");

btnShow.addEventListener("click", () => {
  billingMenu.classList.add("active");
  hamburgerMenu.classList.add("active");
  logoutLink.classList.add("show");
});

btnClose.addEventListener("click", () => {
  billingMenu.classList.remove("active");
  hamburgerMenu.classList.remove("active");
  logoutLink.classList.remove("show");
});
