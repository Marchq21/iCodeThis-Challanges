const profileContentElemnet = document.querySelector(".banner_modal");
const btnElemnet = document.querySelector(".btn-hidden");
const btnElemne2 = document.querySelector(".banner__link");

btnElemne2.addEventListener('click', () => {
    profileContentElemnet.classList.toggle('active');
});
btnElemnet.addEventListener('click', () => {
    profileContentElemnet.classList.toggle('active');
});
                