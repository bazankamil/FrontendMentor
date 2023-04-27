//SELECTORS//

const buttons = document.querySelector(".rating__buttons");
const submit = document.querySelector(".submit");
let score = document.querySelector(".score");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");

//FUNCTION//

submit.addEventListener("click", function (e) {
  rating.style.display = "none";
  thanks.style.display = "flex";
});

buttons.addEventListener("click", function (e) {
  if (e.target.className == "buttons__score") {
    score.innerHTML = e.target.innerHTML + " ";
  }
});
