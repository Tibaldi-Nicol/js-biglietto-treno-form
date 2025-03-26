function calcolaBiglietto(){
    const nome = document.getElementById("name").value;
    const chilometri = document.getElementById("chilometri").value;
    const eta = document.getElementById("eta").value;

    // Calcoliamo il prezzo base: 0.21 € per km
    const prezzoBase = chilometri * 0.21;

    // Definiamo una variabile per il prezzo finale
    let prezzoFinale;
    let tipoSconto = "Nessuno";

    //sconti in base all'età
    if(eta < 18){
        //sconto del 20% per i minorenni
        prezzoFinale = prezzoBase - (prezzoBase * 0.2);
        tipoSconto = "20% (Minorenne)";
    } else if(eta >= 65){
        //sconto del 40% per gli over 65
        prezzoFinale = prezzoBase - (prezzoBase * 0.4);
        tipoSconto = "40% (Over 65)";
    } else{
        //nessuno sconto per le altre età
        prezzoFinale = prezzoBase;
    }

    // Mostro il riepilogo
    const dettagliBiglietto = document.getElementById("dettagli-biglietto");
    dettagliBiglietto.innerHTML = `
        <strong>Nome:</strong> ${nome || 'Non specificato'}<br>
        <strong>Chilometri:</strong> ${chilometri} km<br>
        <strong>Prezzo Base:</strong> €${prezzoBase.toFixed(2)}<br>
        <strong>Sconto:</strong> ${tipoSconto}<br>
        <strong>Prezzo Finale:</strong> €${prezzoFinale.toFixed(2)}
    `;

    // Rendo visibile il riepilogo
    document.getElementById("riepilogo").style.display = 'block';

    // Messaggio di saluto
    alert("Buon viaggio!");
}

function annulla() {
    // Resetto tutti gli input
    document.getElementById("name").value = '';
    document.getElementById("chilometri").value = '';
    document.getElementById("eta").value = '';

    // Nascondo il riepilogo
    document.getElementById("riepilogo").style.display = 'none';
}



