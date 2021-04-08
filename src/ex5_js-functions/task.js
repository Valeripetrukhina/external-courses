const calculator = () => {
  let result = 0;

  return ({
  add: function add(num = 0) {
    result = result + num;

    return add;
  },

  subtract: function subtract(num = 0) {
    result = result - num;

    return subtract;
  },

  divide: function divide(num = 1) {
    result = result / num;

    return divide;
  },

  multiply: function multiply(num = 1) {
    result = result * num;

    return multiply;
  },

  getResult: function getResult() {
   
    return result;
  },

  reset: function reset() {
    result = result * 0;

    return reset;
  },
});
};

module.exports = calculator();
