const btns = document.getElementsByClassName("btn");
for (const btn of btns) {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
}