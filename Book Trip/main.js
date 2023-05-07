const modalContentElemnt = document.querySelector(".booking__show-img");
const btnShowImg = document.querySelector(".booking__place--img__view");
const btnHideImg = document.querySelector(".btn-hide");

btnShowImg.addEventListener("click", () => {
  modalContentElemnt.classList.toggle("active");
});
btnHideImg.addEventListener("click", () => {
  modalContentElemnt.classList.toggle("active");
});
