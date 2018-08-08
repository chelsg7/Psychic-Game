// Create All Needed Variables
var wins = 0;
var losses = 0;
var guesses = 10;
var guessRemain = 10;
var guessed = [];
var letterGuess = '';
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//creates random
 var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

document.getElementById("start").addEventListener("click", function(){
    var newComp = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(newComp);
    wins = 0;
    losses = 0;
    
    document.getElementById('remain').innerHTML = "Guesses Left Now : " + guessRemain;
    document.getElementById('won').innerHTML = "Current Win Streak : " + wins;
    document.getElementById('lost').innerHTML = "Current Loss Streak : " + losses;
    document.getElementById('arrayGuess').innerHTML = "Letters You Already Guessed : " + guessed;
    
    document.onkeyup = function(event) {
        //Define user key guess function, subtract from remaining and add to array
        var userGuess = event.key;
        guessRemain--;
        guessed.push(userGuess);
        //set new variables equal to functions you need to run at key press
        var newGuess = function() {
            document.getElementById('remain').innerHTML = "Guesses Remaining: " + guessRemain;
        };
        var updateLetterGuess = function() {
            this.letterGuess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
        };
        var updateGuesses = function() {
            document.getElementById('arrayGuess').innerHTML = "Guessed: " + guessed.join(', ');
        };
        // run these functions at key press
        newGuess();
        updateLetterGuess();
        updateGuesses();
        //reset variable needs for game end
        var reset = function() {
            newComp = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            guesses = 10;
            guessRemain = 10;
            guessed = [];
            updateLetterGuess();
            updateGuesses();
            newGuess();
            };
            
            //must be fulfilled to get alerts
            if ((guessRemain > 0) && (userGuess === newComp)){
                wins++;
                document.getElementById('won').innerHTML = "Win Streak : " + wins;
                alert("WOW YOU ARE PSYCHIC!!!  " + userGuess + " was right!! ");
                reset();
            } else if(guessRemain === 0){
                losses++;
                document.getElementById('lost').innerHTML = "Losing Streak " + losses;
                alert("NOT PSYCHIC. " + userGuess + " was wrong, " + newComp + " was the correct answer, TRY AGAIN!"); 
                reset();
            };
        };
    });