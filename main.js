// Creo un array di cognomi
var listacognomi = ['Rossi', 'Bianchi', 'Celentano', 'Morandi'];
console.log(listacognomi);

// Chiedo il cognome all'utente
var cognomeutente = prompt('Per favore inserisci il tuo cognome');

// trasforma la prima in maiuscolo visto che il mio array ha le iniziali delle stringhe in maiuscolo altrimenti il sort fallisce
var cognomeutente = cognomeutente.charAt(0).toUpperCase() + cognomeutente.slice(1);
console.log(cognomeutente);

// Inserisco il cognome nella lista dei cognomi già presenti
listacognomi.push(cognomeutente);
console.log(listacognomi);

// Ordiniamo la lista dei cognomi
listacognomi.sort();
console.log(listacognomi);

// Troviamo la posizione del cognome fornito dall'utente e la stampiamo
trovato = false;
for (var posizione = 0; (posizione < listacognomi.length) && (!trovato); posizione++) {
    if (listacognomi[posizione] == cognomeutente) {
        trovato = true;
    }
}
console.log("Il cognome dell'utente si trova nella posizione numero " + posizione + " della lista");
