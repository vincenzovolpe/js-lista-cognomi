// Creo un array di cognomi
var listacognomi = ['Rossi', 'Bianchi', 'Celentano', 'Morandi'];
// Stampo la lista cognomi attuale
alert('Questa è la lista dei cognomi attuale: ' + listacognomi);
console.log(listacognomi);

// Chiedo il cognome all'utente controllando che inserisce una stringa
do {
    var cognomeutente = prompt('Per favore inserisci il tuo cognome');
    // Controllo se l'utente ha inserito una stringa
    if (!isNaN(cognomeutente)) {
        // imposto una variabile per ricordare la decisione dell'utente
        var risposta = confirm('Attenzione non hai inserito una stringa, vuoi riprovare?');
    } else {
        risposta = false;
        // trasforma il  primo carattere del cognome inserito in maiuscolo visto che il mio array di cognomi creato ha le iniziali delle stringhe in maiuscolo altrimenti il sort fallisce
        var cognomeutente = cognomeutente.charAt(0).toUpperCase() + cognomeutente.slice(1);
        console.log(cognomeutente);

        // Inserisco il cognome nella lista dei cognomi già presenti
        listacognomi.push(cognomeutente);
        // Stampo la nuova lista cognomi
        alert('Questa è la nuova lista dei cognomi attuale: ' + listacognomi);
        console.log(listacognomi);

        // Ordiniamo la lista dei cognomi
        listacognomi.sort();
        // Stampo la nuova lista cognomi ordinata
        alert('Questa è la nuova lista ordinata dei cognomi attuale: ' + listacognomi);
        console.log(listacognomi);

        // Troviamo la posizione del cognome fornito dall'utente nell'array ordinato alfabeticmente e la stampiamo
        trovato = false;
        for (var posizione = 0; (posizione < listacognomi.length) && (!trovato); posizione++) {
            if (listacognomi[posizione] == cognomeutente) {
                alert("Il cognome dell'utente dopo l'ordinamento si trova nella posizione numero " + (posizione + 1) + " della lista")
                console.log("Il cognome dell'utente si trova nella posizione numero " + (posizione + 1) + " della lista");
                trovato = true;
            }
        }
    }
} while (risposta);

alert('Sei uscito correttamente dal programma, arrivederci!')
