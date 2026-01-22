let chunkArrayInGroups = (arr, n) => {
  let output = [];
  let target = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    target.push(arr[i]);
    if (count == n) {
      output.push(target);
      target = [];
      count = 1;
    } else {
      count++;
    }
  }
  output.push(target);
  return output;
};

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));