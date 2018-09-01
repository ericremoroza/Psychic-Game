
//array of guesses
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables label how many wins, losses, guesses left, and selection history
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userHistory = [];

//create variables relevant to places in HTML 
var directions = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingGuesses = document.getElementById("guesses-left");
var userGuesses = document.getElementById("user-guesses");
var img = document.createElement("img");
img.src = "assets/images/gameover.png";
var src = document.getElementById("game-over");
document.onkeyup = function(event) {
    //indicates pressed key
    var userInput = event.key;

    //chooses an element from compChoices array
    var compAnswer = compChoices[Math.floor(Math.random() * compChoices.length)];

    //choices same as compChoices in terms of arrays
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (choices.indexOf(userInput) > -1) {
        if (userInput === compAnswer) {
            wins++;
            guessesLeft = 9;
            userHistory = [];
        }
        if (userInput != compAnswer) {
            losses++;
            guessesLeft --;
            userHistory.push(userInput);
        }
        if (guessesLeft === 0) {
            document.getElementById("game-over").innerHTML = "<img src='assets/images/gameover.png'/>";
        }
       
        directions.textContent = "Good Luck";
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        remainingGuesses.textContent = "Guesses Left: " + guessesLeft;
        userGuesses.textContent = "Your Guesses so far: " + userHistory.join(", ");


    };
}