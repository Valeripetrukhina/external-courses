function deleteSpace(str) {
  if (str[0] === ' ' && str[str.length - 1] === ' ') {
    return str.substring(1, str.length - 1);
  }
  if (str[0] === ' ') {
    return str.substring(1, str.length);
  }
  if (str[str.length - 1] === ' ') {
    return str.substring(0, str.length - 1);
  }
  return str;
}

module.exports = deleteSpace;