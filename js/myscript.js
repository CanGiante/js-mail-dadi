var email = ["mail.test@gmail.com", "mail.test@outlook.com", "mail.test@hotmail.it", "mail.test@libero.it", "mail.test@virgilio.it"];
var emailValida = false;

prompt("Inserisci una email valida")

for (var i = 0; i < email.length; i++) {

  if (email[i] === email.length) {
    emailValida = true;
  }

}


if (emailValida) {

  console.log("Successo!");

} else {

  console.log("Credenziali errate!");
}
