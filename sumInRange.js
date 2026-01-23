let sum = 0;
let sumInRange = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumInRange([1, 2, 3]));