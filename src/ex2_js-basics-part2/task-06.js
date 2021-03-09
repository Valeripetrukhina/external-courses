function prime(num) {
  if (num <= 1 || num >= 1000) {
    return "data is not correct";
  } else if (num === 2) {
    return num + " - prime number";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return num + " - composite number";
    }
    return num + " - prime number";
  }
  return true;
}
module.exports = prime;
