let arr = [42, 7, 19, 3, 88, 14, 56, 1, 67, 23];

let target = 15;
let swap = null;
let output = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      swap = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = swap;
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < target) {
    output = i + 1;
  }
}

console.log(arr);
console.log(output);
