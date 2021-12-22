// L’utente indica un livello di difficoltà in base al quale viene generata
// una griglia di gioco quadrata, in cui ogni cella contiene un numero tra
// quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della
//difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella
//lista dei numeri generati - abbiamo calpestato una bomba - la cella si 
//colora di rosso e la partita termina, altrimenti la cella cliccata si colora
// di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge 
//il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè
//il numero di volte che l’utente ha cliccato su una cella che non era una b.



let scelta = document.getElementById('scelta'); //creo variabile per poterla richiamare
let bottone = document.getElementById('play'); //creo variabile per poterla richiamare


bottone.addEventListener('click', function(){ 
    let livello = document.getElementById('scelta').value;
    let bloccoQuadrati = document.getElementById('blocco-quadrati');
    bloccoQuadrati.innerHTML='';
    if(livello == "easy"){
        for(let i=1; i<=100; i++){
            bloccoQuadrati.innerHTML += '<div class="cella box">'+ i +'</div>';
    }
    }else if (livello == "medium"){
        for(let k=1; k<=81; k++){
            bloccoQuadrati.innerHTML += '<div class="cella box_2">'+ k +'</div>';
    }
    }else if(livello == "hard"){
        for(let j=1; j<=49; j++){
            bloccoQuadrati.innerHTML += '<div class="cella box_3">'+ j +'</div>';
        }
    }

    let cella = document.getElementsByClassName('cella');//aggiungo colore al click
        for(let index=0; index<cella.length; index++){
            cella[index].addEventListener("click", function(){
                messaggio = this.innerHTML
                this.classList.add("azzurro")
            })
        }
});


// Creo funzione per generare bombe
let bombeTot = 16;

function creaBombe(){
    let bombeGenerate = [];
    while(bombeGenerate.length < bombeTot){
        let nuovaBomba = (Math.floor(Math.random()* 100 + 1));
    if(!valoreArr(bombeGenerate,nuovaBomba)){
        bombeGenerate.push(nuovaBomba);           
    }            
}   
console.log(bombeGenerate);
    return bombeGenerate;
}

//controllo le doppie nell'array
function valoreArr(arrayValore,valore){
    for(let i=0; i<arrayValore.length;i++){
        if(arrayValore==valore){
            return true;
        }
    }
    return false;
}

