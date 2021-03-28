function countSymbols(str) {
  const symbols = str.split("");
  const result = {};
  symbols.forEach(function (key, index) {
    let count = result[symbols[index]] ? result[symbols[index]] : 0;
    result[symbols[index]] = count + 1;
  });

  for (let sym in result) {
    console.log(`Символ: ${sym}, повторения ${result[sym]}`);
  }
}

module.exports = countSymbols;
