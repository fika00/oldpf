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