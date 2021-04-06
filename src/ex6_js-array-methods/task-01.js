const getBeginIndex = (begin, size) => {
  if (begin < 0) {
    if (size + begin < 0) {
      return 0;
    }

    return size + begin;
  }

  return begin;
};

const getEndIndex = (end, begin, size) => {
  if (end > 0) {
    if (end > size) {
      return size;
    }

    return end;
  }

  if (end > begin) {
    return size + end;
  }

  return end;
};

const analogSlice = (arr, begin = 0, end = arr.length) => {
  const resultArray = [];
  let validBegin = getBeginIndex(begin, arr.length);
  let validEnd = getEndIndex(end, begin, arr.length);

  for (let i = validBegin; i < validEnd; i++) {
    resultArray.push(arr[i]);
  }

  return resultArray;
};

module.exports = analogSlice;
