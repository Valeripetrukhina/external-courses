function comparisonInArr(data) {
  return data.reduce(function (previousValue, currentValue, index, array) {
    if (index === 0) {
      return true;
    }
    return previousValue && currentValue == array[index - 1];
  });
}
module.exports = comparisonInArr;
