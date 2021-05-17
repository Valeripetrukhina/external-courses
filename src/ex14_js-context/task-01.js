function Calculator() {
  this.result = 0;

  this.add = function(num = 0) {
    this.result = this.result + num;
     
    return this;
  };

  this.subtract = function(num = 0) {
    this.result = this.result - num;
    
    return this;
  };

  this.divide = function(num = 1) {
    this.result = this.result / num;
    
    return this;
  };

  this.multiply = function(num = 1) {
    this.result = this.result * num;
    
    return this;
  };

  this.getResult = function() {
    return this.result;
  };

  this.reset = function() {
    this.result = 0;
    
    return this
  };

  this.setState = function(num = 0) {
    this.result = num;
    
    return this;
  };

  this.fetchData = function(callback) {
    setTimeout(() => {
      callback(500);
      this.result = 500;
    }, 300);

    return this
  }
}

let calculator = new Calculator();

module.exports = calculator;
