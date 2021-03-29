function Calculator() {
  this.result = 0;

  this.add = (num) => {
    if (!num) {
      this.result = this.result + 0;
    } else {
      this.result = this.result + num;
    }

    return this.add;
  };
  this.subtract = (num) => {
    if (!num) {
      this.result = this.result + 0;
    } else {
      this.result = this.result - num;
    }

    return this.subtract;
  };
  this.divide = (num) => {
    if (!num) {
      this.result = this.result + 0;
    } else if (this.result !== 0) {
      this.result = this.result / num;
    } else {
      this.result = this.result + num;
    }

    return this.divide;
  };
  this.multiply = (num) => {
    if (!num) {
      this.result = this.result + 0;
    } else if (this.result !== 0) {
      this.result = this.result * num;
    } else {
      this.result = this.result + num;
    }

    return this.multiply;
  };
  this.getResult = (num) => {
    if (!num) {
      this.result = this.result;
    }
    return this.result;
  };
  this.reset = (num) => {
    this.result = this.result * 0;

    return this.reset;
  };
}

let calculator = new Calculator();

module.exports = calculator;
