//Lista email autorizzate
var emailAutorizzate = ["mail.test@gmail.com", "mail.test@outlook.com", "mail.test@hotmail.it", "mail.test@libero.it", "mail.test@virgilio.it"];

//Variabile di appoggio
var emailUtenteValida = false;

//Chiedo all'utente di inserire unae mail autorizzata
var emailUtente = prompt("Inserisci una mail valida");

//Controllo che l' email inserita sia nella lista delle email autorizzate
for (var i = 0; i < emailAutorizzate.length; i++) {

  if (emailAutorizzate[i] === emailUtente) {

    emailUtenteValida = true;

  }

}

//Stampo l'esito del controllo
if (emailUtenteValida === true) {

  console.log("Successo!");

} else {

  console.log("Credenziali errate!");

}
