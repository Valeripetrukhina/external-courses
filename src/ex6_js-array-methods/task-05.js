let analogMap = function (arr, callback, thisArg) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArg, arr[i], i, arr));
  }
  return result;
};

module.exports = analogMap;
