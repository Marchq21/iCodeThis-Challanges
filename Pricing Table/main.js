const switchBtns = document.querySelectorAll(".switch-btn");
const price = document.querySelectorAll(".pricing__container--plan__price");
const billedType = document.querySelectorAll(".pricing__container--plan__name");
for (const btn of switchBtns) {
  btn.addEventListener("change", function () {
    if (btn.checked) {
      const planType = btn.getAttribute("id");
      if (planType.toLocaleLowerCase() === "monthly") {
        price[0].innerText = "$12.99 / month";
        price[1].innerText = "$29.99 / month";
        billedType[0].innerText = "Billed Monthly";
        billedType[1].innerText = "Billed Monthly";
      } else {
        price[0].innerText = "$8.99 / month";
        price[1].innerText = "$21.99 / month";
        billedType[0].innerText = "Billed yearly";
        billedType[1].innerText = "Billed yearly";
      }
    }
  });
}
