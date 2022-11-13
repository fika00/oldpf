// forma, iznos racuna za struju, datum placanja,
// klikom na submit izracunava se da li je korisnik
// platio racun do 5. u mjesecu, ako jeste ima popust 10%
// ako nije cijeli ce iznost platiti
let sum = document.getElementById("sum");
let datum = document.getElementById("date");
let output = document.getElementById("output");
let submit = document.getElementById("submit");
let iks = document.getElementById("iks");

output.style.visibility = 'hidden';

submit.addEventListener("click", function(e) {

    e.preventDefault();

    let datenow = new Date(date.value);

    if (sum.value == "" || sum.value < 0) {
        output.innerHTML = `Molimo Vas unesite iznos računa.`;
        output.style.visibility = 'visible';
        output.style.color = 'red';
    } else if (datenow.value == "") {
        output.innerHTML = `Unesite datum.`;
        output.style.visibility = 'visible';
        output.style.color = 'red';
    } else {
        if (datenow.getDate() <= 5) {
            output.innerHTML = `Cijena: ${(sum.value * 0.9).toFixed(2)} €`;
            output.style.visibility = 'visible';
            output.style.color = 'black';
        } else {
            output.innerHTML = `Cijena: ${sum.value} €`;
            output.style.visibility = 'visible';
            output.style.color = 'black';
        }

    }
});

// document.getElementById("datum").addEventListener("change", function() {
//     let input = this.value;
//     let dateEntered = new Date(input);
// });

// console.log(datum);

// function izracunajIznos() {
//     if (datum < 10) {

//     } else {
//         output.innerHTML = `Cijena: ${iznos.value}`;
//     }
// }