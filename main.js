// Creo un array di cognomi
var listacognomi = ['Rossi', 'Bianchi', 'Celentano', 'Morandi'];
console.log(listacognomi);

// Chiedo ilcognome all'utente
var cognomeutente = prompt('Per favore inserisci il tuo cognome');
console.log(cognomeutente);

// Inserisco il cognome nella lista dei cognomi già presenti
listacognomi.push(cognomeutente);
console.log(listacognomi);

// Ordiniamo la lista dei cognomi
listacognomi.sort();
console.log(listacognomi);

// Troviamo la posizione del cognome fornito dall'utente e la stampiamo
trovato = false
for (i= 0; (i < listacognomi.length) && (!trovato); i++) {
    if (listacognomi[i] == cognomeutente) {
        var posizione = i + 1;
        trovato = true;
    }
}
console.log("Il cognome dell'utente si trova nella posizione numero " + posizione + " della lista");
