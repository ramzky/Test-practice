function analyzeArray(arr) {
  let average = (arr.reduce((acc, curr) => acc + curr, 0)) / arr.length;
  let min = 0;
  let max = 0;
  let length = arr.length;
  arr.sort((a, b) => a - b);
  min = arr[0];
  max = arr[arr.length-1];

  return {
    average,
    min,
    max,
    length
  }
}

module.exports = analyzeArray;