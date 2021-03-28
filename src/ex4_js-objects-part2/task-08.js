function lowerCamelCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (item, index) {
      if (index === 0) {
        return item.toLowerCase();
      }
      return item[0].toUpperCase() + item.substring(1);
    })
    .join('');
}

module.exports = lowerCamelCase;