function countSymbols(str) {
  let symbols = str.split('');
  let result = symbols.reduce(function (count, key) {
    if (!count[key]) {
      count[key] = 1;
    } else {
      count[key] = count[key] + 1;
    }
    return count;
  }, {});
  for (let sym in result) {
    console.log(`Символ: ${sym}, повторения ${result[sym]}`);
  }
}

module.exports = countSymbols;
