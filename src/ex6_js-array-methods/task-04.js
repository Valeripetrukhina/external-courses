let analogFilter = function (arr, callback, thisArg) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = analogFilter;
