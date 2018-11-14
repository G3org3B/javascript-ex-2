
// CHIEDI ALL'UTENTE LA SUA EMAIL CONTROLLA CHE SIA NELLA LISTA DI CHI PU0'ACCEDERE E STAMPA UN MESSAGGIO APPROPIATO //

//CREAZIONE ARRAY

var email_registrate = ["bello@gmail.it", "brutto@gmail.it", "biondo@gmail.it", "moro@gmail.it"];
console.log(email_registrate);
// RICHIESTA EMAIL ALL'UTENTE

var email_utente = prompt("Inserire Email Utente");
console.log(email_utente);

// Valore di base

var login = false;

// CONTROLLARE CHE L'EMAIL SIA NELL'ARRAY

for (var i = 0; i < email_registrate.length; i++) {
  var mail_login = email_registrate[i];

//Email_utente corretta STAMPARE ACCESSO CONSENTITO

if (email_utente == mail_login){
  login = true;
 }
}
if (login){

  login = true;
  document.writeln('ACCESSO CONSENTITO');

}

else {

    login = false;
    document.writeln('ACCESSO NON CONSENTITO');
}

//Email_utente non Registrata

// else if

// STAMPARE MESSAGGIO ACCESSO NEGATO
