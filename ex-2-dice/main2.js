
// GIOCO DEI DADI , CHI FA' DI PIU' VINCE


//IMPOSTARE LE VARIABILI
var tiro_player1;
var tiro_player2;

//IMPOSTARE DUE RANDOM OGNUNO PER UNO TIRO DIVERSO

var tiro_player1 = Math.floor(Math.random() * 7);
console.log(Math.floor(Math.random() * 7));
document.writeln(tiro_player1);

var tiro_player2 = Math.floor(Math.random() * 7);
console.log(Math.floor(Math.random() * 7));
document.writeln(tiro_player2);

var riprova_tiro = tiro_player1 == tiro_player2;

// CONFRONTO TRA I DUE TIRI

// PARITA'
if (riprova_tiro) {

  document.writeln("riprovare il tiro");
}
// VINCITA'
if (tiro_player1 > tiro_player2) {
console.log();
  document.writeln("il player1 ha vinto");
}
// SCONFITTA
else {

  document.writeln("il player2 ha vinto");
}
