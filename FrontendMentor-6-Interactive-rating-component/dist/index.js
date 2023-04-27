//SELECTORS//

const buttons = document.querySelectorAll(".buttons__score");
const submit = document.querySelector(".submit");
let score = document.querySelector(".score");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");

//FUNCTION//

submit.addEventListener("click", function (e) {
  rating.style.display = "none";
  thanks.style.display = "flex";
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    score.innerHTML = buttons[i].innerHTML + " ";
  });
}
