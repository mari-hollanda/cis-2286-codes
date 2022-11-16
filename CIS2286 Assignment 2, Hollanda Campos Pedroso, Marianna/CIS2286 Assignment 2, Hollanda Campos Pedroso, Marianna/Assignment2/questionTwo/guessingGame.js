/*
* Author Name: Marianna Hollanda
* Date: 2021-02-02
* Purpose: Store the Guessing Game functions
*/

/* Function to Guessing a Number */
var numGuesser = function () {
    var randomNumber = Math.floor(Math.random() * 30) + 1;
    var guesses = 3;
    var guess;
    var promptText = 'Make a Guess!';

    while (guesses > 0) {
        do {
            guess = prompt(promptText);
            if (Number.isNaN(Number(guess))) promptText = "Invalid, guess again.";
        } while (Number.isNaN(Number(guess)));

        if (guess == randomNumber) return true;
        else if (guess < randomNumber) promptText = "A bit higher!";
        else promptText = "A bit lower!";
        guesses--;
    }
    return false;
}

var conf = false;
do {
    if (numGuesser() == true) {
        alert("You Won!");
        conf = false;
    } else {
        conf = confirm("You lost, would you like to play again?");
        if (!conf) alert("Thanks for playing.");
    }
} while (conf);