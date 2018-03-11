 var wins = 0;
 var losses = 0;
 var guesses = 10;
 var guessRemain = 10;
 var guessed = [];
 var letterGuess = null;
 var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

 document.getElementById("start").addEventListener("click", function(){
     var newGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
     console.log(newGuess);

     document.getElementById('remain').innerHTML = "Guesses Remaining : " + guessRemain;
     document.getElementById('won').innerHTML = "Wins : " + wins;
     document.getElementById('lost').innerHTML = "Losses : " + losses;
     document.getElementById('arrGuess').innerHTML = "Letters Guessed : " + guessed;

     var newGuessesRemain = function() {
         document.getElementById('remain').innerHTML = "Guesses Remaining: " + guessRemain;
      };
     var updateLetterGuess = function() {
     this.letterGuess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
    };

     var updateGuesses = function() {
       document.getElementById('arrGuess').innerHTML = "Guessed: " + guessed.join(', ');
    };

    var reset = function() {
        guesses = 10;
        guessRemain = 10;
        guessed = [];
        updateLetterGuess();
        updateGuesses();
        newGuessesRemain();
        };

        newGuessesRemain();
        updateLetterGuess();
        

    document.onkeyup = function(event) {
        var userGuess = event.key;
        guessRemain--;
        guessed.push(userGuess);
        updateLetterGuess();
        updateGuesses();
        
        if ((guessRemain > 0) && (userGuess === newGuess)){
            wins++;
            document.querySelector('#won').innerHTML = "Wins: " + wins;
            alert("PSYCHIC!");
            reset();
        } else if(guessRemain === 0){
            losses++;
            document.querySelector('#lost').innerHTML = "Lost: " + losses;
            alert("NOT Psychic! Try Again!"); 
            reset();
        };
    };
});