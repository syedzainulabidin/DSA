let arr = [3, 4, 5];
let target = 9;
let output = [null];
let found = false;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (found) break;

    if (arr[i] + arr[j] == target) {
      output[0] = i;
      output[1] = j;
      found = true;
    }
  }
  if (found) break;
}

console.log(output);
