const menuBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".header__nav--links");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navBar.classList.toggle("active");
});
