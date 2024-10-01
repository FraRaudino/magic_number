function generateRandomInteger(min=1, max=100) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const n=Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return n
  }

function Sanitize(numero) {
    nSanificate=parseInt(numero.trim());
    return nSanificate
}

let indovinato=false
let n_tentativi=5
const nIndovinare=generateRandomInteger();
while (n_tentativi>0 && !indovinato) {
    let numero=prompt("Inserisci numero: ")
    let num=Sanitize(numero)

    if(isNaN(numero))
    {
        console.log("Valore non valido")
        n_tentativi=n_tentativi-1
    }

    if(numero>nIndovinare)
    {
        console.log("Il numero inserito è troppo grande")
        indovinato=false
        n_tentativi=n_tentativi-1
    }else if(numero<nIndovinare)
    {
        console.log("Il numero inserito è troppo piccolo")
        indovinato=false
        n_tentativi=n_tentativi-1
    }
    else if(numero===nIndovinare)
    {
        console.log("Hai indovinato il numero")
        indovinato=true
    }
}
