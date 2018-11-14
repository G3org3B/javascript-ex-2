
// GIOCO DEI DADI , CHI FA' DI PIU' VINCE


//IMPOSTARE LE VARIABILI
var tiro_player1;

var tiro_player2;

//IMPOSTARE DUE RANDOM OGNUNO PER UNO TIRO DIVERSO

var tiro_player1 = Math.floor(Math.random() * 7);
//console.log(Math.floor(Math.random() * 7));
document.getElementById('player1').innerHTML = tiro_player1;

var tiro_player2 = Math.floor(Math.random() * 7);
//console.log(Math.floor(Math.random() * 7));
document.getElementById('player2').innerHTML = tiro_player2;

var riprova_tiro = tiro_player1 == tiro_player2;

// CONFRONTO TRA I DUE TIRI

// PARITA'
if (riprova_tiro) {

  document.getElementById('Score').innerHTML ="Riprovare il Tiro";
}
// VINCITA'
if (tiro_player1 > tiro_player2) {
console.log();
  document.getElementById('Score').innerHTML ="Il PLAYER 1 HA VINTO";
}
// SCONFITTA
else {

  document.getElementById('Score').innerHTML ="Il PLAYER 2 HA VINTO";
}
