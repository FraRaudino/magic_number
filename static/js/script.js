function generateRandomNumber(min=1, max=100){
    let n=Math.random()
    n=n*(max-min)+min
    let Intn=Math.floor(n)
    return Intn
}

function Sanitize(numero) {
    let nSanificate=parseInt(numero.trim());
    if(isNaN(nSanificate)){
        console.log("Valore non valido")
    }
    return nSanificate
}

function magicNumber(event){
    let numero=document.querySelector("#guess").value
    n=Sanitize(numero);

    if(isNaN(n) || n<=0 || n>100)
    {
        console.log("valore non valido")
        Indovinato=false;
    }else if(n>nGenerato)
    {
        console.log("Il numero inserito è troppo grande");
        nTentativi=nTentativi-1;
    }else if(n<nGenerato)
    {
        console.log("Il numero inserito è troppo piccolo");
        nTentativi=nTentativi-1;
    }else if(n===nGenerato)
    {
        console.log("HAI VINTO!!!");
        Indovinato=true;
    }
    if(nTentativi===0 && !Indovinato)
    {
        console.log("Hai esaurito i tentativi!")
        console.log("Il numero era" + nGenerato)
    }

}

let nTentativi=5;
let Indovinato=false;
let nGenerato=generateRandomNumber();
let n;

console.log("BENVENUTO A MAGIC NUMBER");
let btn=document.querySelector("#guessBtn")
    btn.addEventListener("click",magicNumber)