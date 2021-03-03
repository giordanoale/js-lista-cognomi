// Chiedere all’utente il cognome

var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi", "Gastani Frinzi"];

var utente = prompt("Inserisci il tuo cognome");

// Inserirlo in un array con altri cognomi:

cognomi.push(utente);

// Stampa la lista ordinata alfabeticamente

cognomi.sort();
console.log(cognomi);

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
