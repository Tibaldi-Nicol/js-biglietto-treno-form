//come prima cosa creo il ragionamento o comunque il sistema per applicare gli sconti in base alle eta
//costo biglietto treno 0.21€ al km
//sconto 20% per i minorenni
//sconto 40% per gli over 65
//maggiorenni nessuno sconto

//creo le variabili e chiedo all'utente di inserire i dati

// Chiediamo all'utente i chilometri da percorrere
//dichiaro la variabile chilometri e chiedo all'utente di inserire i chilometri da percorrere
const chilometri = prompt("Inserisci il numero di chilometri:");

// Chiediamo all'utente l'età del passeggero
//dichiaro la variabile eta e chiedo all'utente di inserire l'età del passeggero
const eta = prompt("inserisci leta del passeggero:");

// Calcoliamo il prezzo base: 0.21 € per km
//dichiaro la variabile prezzoBase e calcolo il prezzo base del biglietto
//moltiplico i km che mi ha inserito lutente per 0.21 il prezzo del biglietto
const prezzoBase = chilometri * 0.21;

// Definiamo una variabile per il prezzo finale
//dichiaro la variabile prezzoFinale
let prezzoFinale;

//sconti in base aòleta uso un if per fare gli sconti in base all'età

if(eta<18){
    //sconto del 20% per i minorenni
    //calcolo lo sconto del 20% per i minorenni
    prezzoFinale = prezzoBase - (prezzoBase * 0.2); 
}
else if(eta>=65){
    //sconto del 40% per gli over 65
    //calcolo lo sconto del 40% per gli over 65
    prezzoFinale = prezzoBase - (prezzoBase * 0.4);
}
else{
    //nessuno sconto per le altre età
    //se non rientra in nessuna delle due condizioni precedenti non ci sono sconti
    prezzoFinale = prezzoBase;
}

//come ho calcolato gli sconti e il prezzo finale? in pratica ho calcolato il prezzo finale in base all'età
//se l'età è minore di 18 anni applico uno sconto del 20% al prezzo base    
//se l'età è maggiore o uguale a 65 anni applico uno sconto del 40% al prezzo base
//se l'età è compresa tra 18 e 65 anni non applico nessuno sconto
