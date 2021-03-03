// Chiedere all’utente il cognome

var cognomi = ["bianchi", "rossi", "duzioni", "balsano", "verdi", "gastani frinzi"];

var utente = prompt("Inserisci il tuo cognome");

var user = utente.toLowerCase();

// Inserirlo in un array con altri cognomi

console.log(user);
cognomi.push(user);

// Stampa la lista ordinata alfabeticamente

cognomi.sort();
console.log(cognomi);

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var posizione;

for (var i = 0; i < cognomi.length; i++) {

  if (user == cognomi[i]) {
    posizione = i + 1;
    document.getElementById("risultato").innerHTML = "La posizione di " + utente + " all'interno dell'Array è la numero " + posizione;
  }

}
