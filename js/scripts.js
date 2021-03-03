// Chiedere all’utente il cognome

var cognomi = ["bianchi", "rossi", "duzioni", "balsano", "verdi", "gastani frinzi"];

var utente = prompt("Inserisci il tuo cognome");

// Inserirlo in un array con altri cognomi

cognomi.push(utente);

// Stampa la lista ordinata alfabeticamente

cognomi.sort();
console.log(cognomi);

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

for (var i = 0; i < cognomi.length; i++) {

  if (utente == cognomi[i]) {
    var posizione = i + 1;
    console.log("La posizione di " + utente + " all'interno dell'Array è la numero " + posizione);
  }

}
