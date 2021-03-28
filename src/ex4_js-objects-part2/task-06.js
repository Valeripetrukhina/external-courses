function capitalLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (item) {
      return item[0].toUpperCase() + item.substring(1);
    })
    .join(' ');
}

module.exports = capitalLetters;