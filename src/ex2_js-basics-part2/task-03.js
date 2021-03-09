function parityValues(values) {
  let numbers = values.filter((item) => typeof item === "number");
  let evenNum = numbers.filter((item) => item > 0 && item % 2 === 0);
  let oddNum = numbers.filter((item) => item > 0 && item % 2 !== 0);
  let zeroNum = numbers.filter((item) => item === 0);
  return [evenNum.length, oddNum.length, zeroNum.length];
}

module.exports = parityValues;