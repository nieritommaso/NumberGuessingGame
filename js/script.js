let numTentativi = 7;
let numRand = Math.floor(Math.random() * 101);
let gioco = document.getElementById("gioco");
let suggerimento = document.getElementById("suggerimento");
const elencoNum = [];
let numInserito;


function istruzioni() {
    let freccia = document.getElementById("freccia");
    freccia.classList.toggle("bi-arrow-right-circle");
    freccia.classList.toggle("bi-arrow-down-circle-fill");


    let istruzioni = document.getElementById("istruzioni");
    istruzioni.classList.toggle("d-none");
}

function gioca() {
    gioco.classList.toggle("d-none");
    console.log(numRand);
    document.getElementById("numTentativi").innerHTML = numTentativi;
    gioco.classList.add("backBianco");
}

function controllo() { //controllo numero inserito
    if (numTentativi >= 1) {
        numInserito = document.getElementById("numScelto").value;
        parseInt(numInserito);
        if (elencoNum.includes(numInserito)) {
            alert("numero già inserito");
        }
        else {
            if (!isNaN(numInserito) && numInserito > 0 && numInserito <= 100 && numInserito != null) {
                tentativo()
                numTentativi--;
                document.getElementById("numTentativi").innerHTML = numTentativi;
                document.getElementById("numInseriti").innerHTML = elencoNum.join(" - ");
                if (numTentativi == 0) {
                    gioco.classList.remove("backBianco");
                    gioco.classList.add("backRosso");
                    document.getElementById("risultato").innerHTML = "YOU LOSE - Il numero era " + num;
                }
            }
        }


    }
}

function tentativo() {
    if (numRand != numInserito) {
        if (numRand > numInserito) {
            suggerimento.innerHTML = "il numero è maggiore di quello inserito";
        }
        else {
            suggerimento.innerHTML = "il numero è minore di quello inserito";
        }
        elencoNum.push(numInserito);
    }
    else {  //Vinto
        suggerimento.innerHTML = "";
        gioco.classList.remove("backBianco");
        gioco.classList.add("backVerde");
        document.getElementById("risultato").innerHTML = "YOU WIN";

    }
}