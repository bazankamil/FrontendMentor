//SELECTORS
const bill = document.querySelector("#bill");
const btn5 = document.querySelector("#btn5");
const btn10 = document.querySelector("#btn10");
const btn15 = document.querySelector("#btn15");
const btn25 = document.querySelector("#btn25");
const btn50 = document.querySelector("#btn50");
const btnCustom = document.querySelector("#btnCustom");
const people = document.querySelector("#people");
const tipAmount = document.querySelector("#tipAmount");
const tipTotal = document.querySelector("#tipTotal");
const btnReset = document.querySelector("#btnReset");

//ZMIENNE ???

let billVal = 0;
let peopleVal = 1;

//LISTENERY

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

//RESET

btnReset.addEventListener("click", function () {
  location.reload();
});

/* 
TODO
#1
Ogarnąć jak wykrywać zaznaczony guzik (za każdym razem gdy któryś wciśnięty albo wypełniony będzie "custom" wtedy aktualizować zmienną?)
#2
Przetestować inputy: funkcja, która je doda i wyświetli w innym miejscu (poprzez innerHTML)
Sprawdzać czy inputy to liczby: dodać RegExr? Albo dodać error jak wartość inputu nie będzie liczbą
#3
Obliczenia: 
tip = (bill/100*btn) /people
total= bill + (bill/100*btn) /people
#4
Refactoring:
querySelectorAll na buttony i wyciąganie wartości z nodeList/array
reset- guzik zmienia kolor i można zresetować tylko kiedy wartości tipAmount i tipTotal są wypełnione
error powinien dawać inputowi czerwony border
error powinien wyskakiwać przy 00 000 itd.
*/
