function prime(number) {
  if (number === 2) {
    return `Число ${number} - простое число`;
  } if (number <= 1 || number > 1000) {
    return "Данные неверны";
  }
  for (let i = 2; i <= number / 2; i++) {
    if (!(number % i)) {
      return `Число ${number} - составное число`;
    }
  }
  return `Число ${number} - простое число`;
}
module.exports = prime;
