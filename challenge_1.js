let niz = [];
let dodaj_u_niz = document.getElementById('dodaj_u_niz');
let broj = document.getElementById('add')
let izracunaj = document.getElementById('izracunaj')
let output = document.getElementById('output')
let niz_output = document.getElementById('niz')
let niz_rez = document.getElementById('niz_rez')



let index = 0
let broj_skokova = 0



dodaj_u_niz.addEventListener("click", function(e) {

    e.preventDefault();

    niz.push(parseInt(broj.value))

    index = index + 1;

    niz_output.innerHTML = niz_output.innerHTML + ' ' + broj.value;


})

izracunaj.addEventListener("click", function(e) {

    let zaba = 0;
    let skokovi = 0;

    while (zaba < niz.length) {


        if(zaba < 0) {
            break
        }
        else {
            zaba = zaba + niz[zaba];

            
            skokovi = skokovi + 1;
        }


    }

    console.log(zaba)

    if(zaba > 0) {
        output.innerHTML = `Izasla je sa ` +skokovi + ' skoka';
        output.style.color = 'green';

    }
    else {
        output.innerHTML = `Zaglavila se`;
        output.style.color = 'red';

    }


    console.log(zaba)


    console.log(niz.length)

    console.log(skokovi)


})