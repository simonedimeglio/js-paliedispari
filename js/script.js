// ESERCIZIO 1 - PALINDROMA

// creo la funzione per invertire l'ordine delle lettere componenti la parola inserita
function palindromReverseCheck(word){
    var reversedWord = ''; // inizializzo la parola inversa
  
    var x = word.length -1; // -1 per il conteggio corretto della posizione delle lettere
  
    while (x >= 0) { // finchè non arrivo alla fine della parola
      reversedWord += word[x]; // ricrea la parola partendo dall'ultima lettera fino ad arrivare alla prima
      x--; // scorro le lettere (inversamente - per questo decremento)
    }
  
    // salvo la parola invertita
    return reversedWord;
  }

// chiedo la parola all'utente
var userWord = prompt('Inserisci una parola');

// applico la funzione alla parola appena inserita
var reversedWord = palindromReverseCheck(userWord);

// preparo l'output
var palindromOutput = document.getElementById('palindrom');

// verifico se la parola inserita è uguale alla parola invertita e stampo il risultato
if(userWord === reversedWord){
    palindromOutput.innerHTML = 'La parola è palindroma: ' + userWord + ' al contrario è proprio ' + reversedWord + '!';
  } else {
    palindromOutput.innerHTML = 'La parola NON è palindroma: ' + userWord + ' al contrario diventa ' + reversedWord + '!';
}

// ------------------------------------------------------

// ESERCIZIO 2 - PARI E DISPARI

// chiedo all'utente la sentenza: PARI O DISPARI?
var userSentence = prompt('pari o dispari ?');

// puntualizzo subito se la scelta è pari. 
if (userSentence === 'pari') {
    var pari = true;
} else if (userSentence === 'dispari'){
    var pari = false;
} else {
    alert('Non hai scritto "pari" o "dispari", non puoi giocare');
}

// chiedo all'utente un numero da 1 a 5
var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// verifico subito se il numero inserito è tra 1 e 5 
if (userNumber > 5) {
    alert('Non puoi inserire numeri maggiori di 5');
} else { 
    if (userNumber < 1) {
        alert('Non puoi inserire numeri inferiori a 1');
    }
}

// funzione per il numero random da 1 a 5 (computer)
function computerNumber (){
    var computer = Math.floor(Math.random() * 5) + 1;
    return computer;
}

// sommo il numero dell'utente al numero random generato dalla funzione
var sum = userNumber + computerNumber();

// salvo il risultato del computer
var realComputerNumber = sum - userNumber;

// funzione per il check del pari o dispari 
function check(num){
    if ((num % 2) === 0) {
        var checked = true;
    } else {
        var checked = false;
    }

    return checked;
}

// preparo gli output
var userChoiceOutput = document.getElementById('user-choice'); // scelte da prompt
var trueFalseOutput = document.getElementById('winner'); // vincitore

// verifica e stampa
if ((check(sum)) && (pari)) {
    userChoiceOutput.innerHTML = 'Il numero che hai dichiarato è ' + userNumber + '.' + '<br>' + 'Il numero generato dal computer è ' + realComputerNumber + ': la loro somma è ' + sum + ' e tu hai scelto ' + userSentence + '...';
    trueFalseOutput.innerHTML = "Che fortuna, hai vinto!";
} else {
    userChoiceOutput.innerHTML = 'Il numero che hai dichiarato è ' + userNumber + '.' + '<br>' + 'Il numero generato dal computer è ' + realComputerNumber + ': la loro somma è ' + sum + ' e tu hai scelto ' + userSentence + '...';
    trueFalseOutput.innerHTML = "Mi spiace, hai perso!";
}





