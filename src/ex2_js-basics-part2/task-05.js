function sumPositive(positiveNum) {
  let positive = positiveNum.filter((item) => item > 0);
  return positive.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}
module.exports = sumPositive;
