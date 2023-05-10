const accountBtn = document.querySelector(".account__btn");
const popup = document.querySelector(".account__popup");

accountBtn.addEventListener("click", () => {
    popup.classList.toggle("show");
});
