//SELECTORS
const forms = document.forms;
const btn = document.querySelector(".action__btn");
const resultYear = document.querySelector(".result__year-number");
const resultMonth = document.querySelector(".result__month-number");
const resultDay = document.querySelector(".result__day-number");

//VARIABLE
const date = new Date();
const miesiac = new Date(1999, 11, 24);

//LISTENERY

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

Array.from(forms).forEach((element) => {
  element.addEventListener("keyup", function (e) {
    console.log(e.value);
  });
});

//TESTY

console.log(miesiac instanceof Date && !isNaN(date.valueOf()));
console.log(miesiac);

/* 
-eventy na inputy keyup 
    -jak będzie litera to błąd o formacie
        -w day tylko liczby od 1 do 31
        -w miesiac tylko liczby od 1 do 12
        -w rok tylko liczby od 0 do biezacego roku
-event na btn na klika
    -prevent default
    -jeśli któryś błąd jest na ekranie - nie submituj
    -na submicie tworzenie nowej daty z przesłanych danych minus jeden w inputach
        -sprawdzanie, czy dzien podany nadal jest taki sam (data nie przeszła na kolejny miesiac) jesli nie blad przy dniu
    -z MDN sposób na milisekundy pomiędzy 2 datami
    -nowa data z milisekund na lata, miesiace i dni
*/
