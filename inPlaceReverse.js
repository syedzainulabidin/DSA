let arr = [1, 2, 3, 4, 5];
let iteration = arr.length % 2 == 0 ? arr.length / 2 : (arr.length - 1) / 2;
let target;
for (let i = 0; i < iteration; i++) {
  target = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = target;
}
console.log(arr);
