function searchInPrototype(property, myObj) {
  return Object.getPrototypeOf(myObj)[property];
}
module.exports = searchInPrototype;
