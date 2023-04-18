//Selectors
const bill = document.querySelector(".form__bill input");
const buttons = document.querySelectorAll(".button");
const people = document.querySelector(".form__people input");
const tipAmount = document.querySelector(".tipAmount span");
const tipTotal = document.querySelector(".tipTotal span");
const btnReset = document.querySelector(".result__button-reset");
//Variable
let billVal;
let peopleVal = 1;
let activeBtn = 0;
//Listeners
bill.addEventListener("keyup", function () {
    return (billVal = this.value);
});
people.addEventListener("keyup", function () {
    const err = document.querySelector("#error");
    const errBorder = document.querySelector(".form__people input");
    if (this.value == "0") {
        err.classList.toggle("zero");
        errBorder.classList.add("zeroBorder");
        return;
    }
    else {
        err.classList.remove("zero");
        errBorder.classList.remove("zeroBorder");
        return (peopleVal = this.value);
    }
});
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.classList.contains("btnCustom")) {
            activeBtn = button.value;
            tipcalc();
        }
        else {
            activeBtn = button.name;
            tipcalc();
        }
    });
});
tipAmount.addEventListener("DOMSubtreeModified", function () {
    btnReset.classList.add("active");
});
//Reset
btnReset.addEventListener("click", function () {
    location.reload();
});
//Calculation
function tipcalc() {
    tipTotal.innerHTML = (((billVal / 100) * activeBtn + parseInt(billVal)) /
        peopleVal).toFixed(2);
    tipAmount.innerHTML = (((billVal / 100) * activeBtn) / peopleVal).toFixed(2);
}
