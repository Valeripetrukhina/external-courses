let analogSlice = function (arr, begin = 0, end = arr.length) {
  let result = [];
  let positiveBegin = begin < 0 ? arr.length + begin : begin;
  let positiveEnd = end < 0 ? arr.length + end : end;

  if (Math.abs(begin) >= arr.length) {
    positiveBegin = 0;
    for (i = positiveBegin; i < positiveEnd; i++) {
      result.push(arr[i]);
    }
  }

  if (Math.abs(end) >= arr.length) {
    positiveEnd = arr.length;
    for (i = positiveBegin; i < positiveEnd; i++) {
      result.push(arr[i]);
    }
  } else {
    for (i = positiveBegin; i < positiveEnd; i++) {
      result.push(arr[i]);
    }
  }

  return result;
};

module.exports = analogSlice;
