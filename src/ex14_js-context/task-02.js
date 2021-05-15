let hangman = new Hangman();

function Hangman(word) {
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  let remainingLetters = word.length;
  let errors = 6;

  this.getGuessedString = function () {
    this.answerArray.join(" ");
  };

  this.guess = function (letter) {
    while (remainingLetters > 0 && errors > 0) {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === letter) {
          answerArray[j] = letter;
          remainingLetters--;
        } else {
          errors = this.errors - 1;
          console.log("wrong letter, errors left ${errors} | ${letter}");
        }
      }
    }
  };

  this.getErrorsLeft = function () {};

  this.getWrongSymbols = function () {};
}
