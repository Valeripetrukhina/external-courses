function parityValues(values) {
  let evenNum = 0;
  let oddNum = 0;
  let zeroNum = 0;
  let numbers = values.filter((item) => typeof item === 'number' && Number.isNaN(item));

  numbers.forEach((item) => {
    if (item > 0 && item % 2 === 0) {
      return (evenNum += 1);
    }
    if (item > 0 && item % 2 !== 0) {
      return (oddNum += 1);
    }
    if (item === 0) {
      return (zeroNum += 1);
    } 
    return item;
  });
  return [evenNum, oddNum, zeroNum];
}

module.exports = parityValues;
