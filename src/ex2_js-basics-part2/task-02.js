function elementArr(arr) {
  if (Array.isArray(arr)) {
    let element = arr.forEach(function (item) {
      console.log(item);
    });
  } console.log(arr.length);
  return;
}
module.exports = elementArr;
