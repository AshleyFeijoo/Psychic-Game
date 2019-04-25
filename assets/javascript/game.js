

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var totalWins = 0;
var totalLosses = 0;
var guessesLeft = [10];
var guessedLetter = [];
var newGuess = [];

var winsHtml = document.getElementById("total-wins");
var lossesHtml = document.getElementById("total-losses");
var guessesLeftHtml = document.getElementById("guesses-left");
var guessedLetters = document.getElementById("guessed-letters");


//Program will begin by picking a random alphabetical letter
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);



guessesLeftHtml.innerHTML = guessesLeft;


document.onkeypress = function(event){
    
    var playerGuess = event.key;
    var playerGuess =event.key.toLowerCase();
    
//if user input and random chosen letter are equal, the program will run this block where the user wins

if (!alphabet.includes(playerGuess)){
    return;
}

    if (playerGuess === randomLetter){
        totalWins ++; //increase wins +1
        newGuess = []; //create new empty array for letters
        winsHtml.innerHTML = totalWins; //puts the total wins at 1
        guessesLeft = [10]; //resets the guesses left to 
        guessesLeftHtml.innerHTML = guessesLeft; //changes the guessesLEft 
        guessedLetters.textContent = guessedLetter;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(randomLetter);
        return;
    } 
    else {
    if (newGuess.includes(playerGuess)){} //if the player guess is equal to a different guess, do nothing
    else {
    guessesLeft = guessesLeft - 1; //if player guess is not equal to a letter, remove a guess left
    newGuess.push(playerGuess);
    guessesLeftHtml.innerHTML = guessesLeft;
    guessedLetters.innerHTML = newGuess.join(' ');
    // console.log(newGuess);
        }  
    }if (guessesLeft == 0){
        totalLosses ++;
        lossesHtml.innerHTML = totalLosses;
        newGuess = []; //create new empty array for letters
        winsHtml.innerHTML = totalWins; //puts the total wins at 1
        guessesLeft = [10]; //resets the guesses left to 
        guessesLeftHtml.innerHTML = guessesLeft;
        guessedLetters.innerHTML = guessedLetter;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(randomLetter);
    }
}