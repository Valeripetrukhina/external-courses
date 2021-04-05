let analogReduce = function (arr, callback, initialValue) {
  let i = 0;
  let length = arr.length;
  let previousValue = initialValue ? initialValue : arr[0];
  let result = previousValue;

  if (previousValue === arr[0]) {
    i = 1;
  }
  for (i; i < length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
};

module.exports = analogReduce;
