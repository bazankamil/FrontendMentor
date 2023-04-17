//SELECTORS
/*
const btn5 = document.querySelector("#btn5");
const btn10 = document.querySelector("#btn10");
const btn15 = document.querySelector("#btn15");
const btn25 = document.querySelector("#btn25");
const btn50 = document.querySelector("#btn50");
const btnCustom = document.querySelector("#btnCustom");
*/
const bill = document.querySelector("#bill");
const buttons = document.querySelectorAll(".button");
const people = document.querySelector("#people");
const tipAmount = document.querySelector("#tipAmount");
const tipTotal = document.querySelector("#tipTotal");
const btnReset = document.querySelector("#btnReset");

//Variable

let billVal = 0;
let peopleVal = 1;
let activeBtn = 0;

//Listeners

bill.addEventListener("keyup", function () {
  return (billVal = this.value);
});

people.addEventListener("keyup", function () {
  const err = document.querySelector("#error");
  if (this.value === "0") {
    err.classList.toggle("zero");
    return;
  } else {
    err.classList.remove("zero");
    return (peopleVal = this.value);
  }
});

buttons.forEach(function (button) {
  button.addEventListener('click',function() {
    if (button.classList.contains('btnCustom')) {
      activeBtn = button.value;
      test()
      test2()
    }else {
      activeBtn = button.name
      test()
      test2()
    }
    } 
});

//Reset

btnReset.addEventListener("click", function () {
  location.reload();
});

//Test

function test {
  tipTotal.innerHTML = (((billVal / 100) * activeBtn) + parseInt(billVal)) / peopleVal;
}
function test2 {
  tipAmount.innerHTML = ((billVal / 100) * activeBtn) /peopleVal;
}

/* 
TODO
#1
Listener aktualizujący wartość buttona -przy każdym naciśnięciu jednego z 6 buttonów- aktualizacja obliczeń
Listener do każdej funkcji tam gdzie teraz jest test
#2
Sprawdzać czy inputy to liczby: dodać RegExr? Albo dodać error jak wartość inputu nie będzie liczbą- pobawić się z typami inputów- obliczaj tylko kiedy wpisane są liczby
#3
Obliczenia: 
tip = (bill/100*btn) /people
total= bill + (bill/100*btn) /people
przetestować obliczenia, czy działają
#4
Refactoring:
reset- guzik zmienia kolor i można zresetować tylko kiedy wartości tipAmount i tipTotal są wypełnione - kiedy obie wartości różne od zera wtedy aktywuj klasę
kiedy reset ma klasę- można nacisnąć i wtedy odświeża stronę
error powinien dawać inputowi czerwony border - klasa na input aktywowana tak samo jak err
error powinien wyskakiwać przy 00 000 itd. ? - zamiast "strict" może starczy "=="? testować
#5
querySelectorAll na buttony i wyciąganie wartości z nodeList/array
usunąć id z buttonów
usunąć pojedyncze selektory
ograniczyć po przecinku do 2 - wynik wstrzykiwany parsować do 2 po przecinku
*/
