function elementArr(arr) {
  if (Array.isArray(arr)) {
    let element = arr.forEach(function (item) {
      console.log(item + " ,total number of elements " + arr.length);
    });
  }
  return;
}
module.exports = elementArr;
