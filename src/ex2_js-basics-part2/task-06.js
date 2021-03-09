function prime(num) {
  if (num <= 1 || num >= 1000) {
    return "Данные неверны";
  } else if (num === 2) {
    return `Число ${num} - простое число`;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `Число ${num} - составное число`;
    }
    return `Число ${num} - простое число`;
  }
  return true;
}
module.exports = prime;
