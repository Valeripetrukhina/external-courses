function copyObj(obj) {
  let copy = Object.assign({}, obj);
  console.log(copy);
}
module.exports = copyObj