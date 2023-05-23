const email = [
    'michele@ma',
    'luigi@ma',
    'andre@ma',
];

let mailUtente = 'micdhele@ma';
let emailFound = false;

for( i= 0; i< email.length;i ++ ){
    if(mailUtente === email[i]){
        emailFound = true;
    }
}
if( emailFound) {
    console.log('trovata');
} else{
    console.log('non trovata');
}
const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;
console.log(giocatore, computer);
if(giocatore > computer){
    console.log('giocaore vince');
}else if(compure > giocatore){
    console.log('computer vince');
}else{
    console.log('pari');
}