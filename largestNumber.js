let max = 0;
let arr = [1, 54, 32, 11, 53, 232, 11, 32];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
