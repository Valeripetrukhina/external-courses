function Hangman(word) {
  this.word = word.split('');
  this.answerArray = [];
  this.errors = 6;
  this.wrongSymbols = [];
 
  for (let i = 0; i < this.word.length; i++) {
    this.answerArray[i] = "_";
  };

  this.getGuessedString = function() {
    this.answerArray = this.answerArray.join(" ");
    console.log(this.answerArray);
    
    return this;
  };

  this.guess = function(letter) {
    for (let j = 0; j < this.word.length; j++) {
      if (this.word[j] === letter) {
        this.answerArray[j] = letter;
        this.answerArray.join(" ");
        console.log(this.answerArray);

        return this;
      } 
    }

    this.errors = this.errors - 1;
    console.log(`wrong letter, errors left ${this.errors} | ${this.wrongSymbols.concat(letter).join(" ")}`);

    return this;
  };

  this.getErrorsLeft = function() {
    console.log(this.errors);
   
    return this;
  };

  this.getWrongSymbols = function() {
    console.log(this.wrongSymbols);
   
    return this;
  };

  this.getStatus = function() {
    console.log(`${this.getGuessedString} | errors left ${this.getWrongSymbols}`);
   
    return this;
  };

  this.startAgain = function(newWord) {
    this.word = newWord.split('');
    this.answerArray = [];
    this.errors = 6;
    this.wrongSymbols = [];

    return this;
  }
};

let hangman = new Hangman();

module.exports = hangman;

