//L'utente lancia il dado
var lancioUtente = Math.floor( Math.random() * 6 ) + 1;
alert (lancioUtente + "!");

//Il computer lancia il dado
var lancioIa = Math.floor( Math.random() * 6 ) + 1;
alert (lancioIa + "!");

//Confronto i lanci
if (lancioUtente > lancioIa) {

  //comunico all'utente che ha vinto
  alert("Hai vinto!");
} else if (lancioUtente < lancioIa) {

  //comunico all'utente che ha perso
  alert("Hai perso...Riprova!");

  //se l'utente non ha vinto ma nemmeno ha perso...comunico che ha pareggiato!
} else {
  alert("Pareggio!");
}
