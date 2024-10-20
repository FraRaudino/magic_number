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
        elem1.innerHTML=`Non hai inserito nessun numero!`;
        elem2.innerHTML=`Inserisci un numero valido`;
    }else if(n>nGenerato)
    {
        console.log("Il numero inserito è troppo grande");
        nTentativi=nTentativi-1;
        elem1.innerHTML=`Il numero <strong>${n}</strong> è troppo grande`;
        elem2.innerHTML=`Hai ancora a disposizione <strong>${nTentativi}</strong> tentativi`
    }else if(n<nGenerato)
    {
        console.log("Il numero inserito è troppo piccolo");
        nTentativi=nTentativi-1;
        elem1.innerHTML=`Il numero <strong>${n}</strong> è troppo piccolo`;
        elem2.innerHTML=`Hai ancora a disposizione <strong>${nTentativi}</strong> tentativi`
    }else if(n===nGenerato)
    {
        console.log("HAI VINTO!!!");
        Indovinato=true;
        elem1.innerHTML=`Bravo, hai vinto!!`;
        elem2.innerHTML=`Hai usato <strong>${nTentativi}</strong> tentativi`
    }
    if(nTentativi===0 && !Indovinato)
    {
        elem1.innerHTML=`Mi dispiace hai esaurito i tentativi!!`;
        elem2.innerHTML=`Il numero era <strong>${nGenerato}</strong>`
    }

}

let nTentativi=5;
let Indovinato=false;
let nGenerato=generateRandomNumber();
let n;
let elem1=document.querySelector("#text2")
let elem2=document.querySelector("#text3")

console.log("BENVENUTO A MAGIC NUMBER");
let btn=document.querySelector("#guessBtn")
    btn.addEventListener("click",magicNumber)