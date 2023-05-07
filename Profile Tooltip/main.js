const profileContentElemnet = document.querySelector(".profile__card--content");
const btnElemnet = document.querySelector(".card-btn");

btnElemnet.addEventListener('click', () => {
    profileContentElemnet.classList.toggle('active');
});
                