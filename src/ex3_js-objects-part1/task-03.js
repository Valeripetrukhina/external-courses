function strObj(str, obj) {
  if (obj.hasOwnProperty(str) === true) {
    return true;
  }
  return false;
}
module.exports = strObj