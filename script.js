//! Reverse Array

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = arr.length - 1; i >= 0; i--) {
//   document.writeln(arr[i]);
// }
//? ============================================================================

//! 2D Array – DS Hourglass Sum
// const arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

// let max = 0;
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 3; j++) {
//     let hourglass =
//       arr[i][j] +
//       arr[i][j + 1] +
//       arr[i][j + 2] +
//       arr[i + 1][j + 1] +
//       arr[i + 2][j] +
//       arr[i + 2][j + 1] +
//       arr[i + 2][j + 2];

//     max = Math.max(max, hourglass);
//   }
// }
// console.log(max);
//? ============================================================================

//! Query-based array manipulation problem
// let n = 2;
// let queries = [
//   [1, 0, 5],
//   [1, 1, 7],
//   [1, 0, 3],
//   [2, 1, 0],
//   [2, 1, 1],
// ];

// let lastAnswer = 0;
// let arr = [[], []];
// let answers = [];

// let calc = (query) => {
//   let type = query[0];
//   let array = query[1];
//   let value = query[2];
//   let index = (array ^ lastAnswer) % n;

//   if (type == 1) {
//     arr[index].push(value);
//   } else if (type == 2) {
//     lastAnswer = arr[index][value];
//     answers.push(lastAnswer);
//   }
// };

// queries.forEach((q) => {
//   calc(q);
// });

// console.log(answers);
//? ============================================================================

// ! Rotation
// let arr = [1, 2, 3, 4, 5, 6];
// let rotated = [];
// let rotation = 5;

// rotation = rotation % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   console.log((i - rotation + arr.length) % arr.length);
//   rotated[i] = arr[(i - rotation + arr.length) % arr.length];
// }
//? ============================================================================

//! Two Sum
// let arr = [3, 4, 5];
// let target = 9;
// let output = [null];
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (found) break;

//     if (arr[i] + arr[j] == target) {
//       output[0] = i;
//       output[1] = j;
//       found = true;
//     }
//   }
//   if (found) break;
// }

// console.log(output);
//? ============================================================================
//! Reverse an Array (In-Place).
// let arr = [1, 2, 3, 4, 5];
// let iteration = arr.length % 2 == 0 ? arr.length / 2 : (arr.length - 1) / 2;
// let target;
// for (let i = 0; i < iteration; i++) {
//   target = arr[i];
//   arr[i] = arr[arr.length - i - 1];
//   arr[arr.length - i -1] = target;
// }
// console.log(arr);
//? ============================================================================
//! Largest Number
let max = 0;
let arr = [1, 54, 32, 11, 53, 232, 11, 32];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
//? ============================================================================
//! Confim Ending
// let checkEnding = (string, letter) => {
//   return string[string.length - 1] == letter ? true : false;
// };

// console.log(checkEnding("testing", "g"));
//! Repeat a String
// let output = "";
// let repeat = (string, iterations) => {
//   for (let i = 0; i < iterations; i++) {
//     output += string;
//   }
//   return output;
// };

// console.log(repeat("***", 2));
//! Finder Keeper
// let arr = [1, 3, 5, 7, 9];
// let find = () => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       return arr[i];
//     }
//   }
//   return "Not Found";
// };

// console.log(find(arr));
//! Where do I Belong
// let arr = [42, 7, 19, 3, 88, 14, 56, 1, 67, 23];

// let target = 15;
// let swap = null;
// let output = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       swap = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = swap;
//     }
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < target) {
//     output = i + 1;
//   }

// }

// console.log(arr);
// console.log(output);
// let check = (first, second) => {
//   for (let i = 0; i < second.length; i++) {
//     let found = false;
//     for (let j = 0; j < first.length; j++) {
//       if (first[j].toLowerCase() == second[i].toLowerCase()) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) return false;
//   }
//   return true;
// };

// console.log(check("ab", "A"));
// console.log(check("ab", "c"));

// let chunkArrayInGroups = (arr, n) => {
//   let output = [];
//   let target = [];
//   let count = 1;
//   for (let i = 0; i < arr.length; i++) {
//     target.push(arr[i]);
//     if (count == n) {
//       output.push(target);
//       target = [];
//       count = 1;
//     } else {
//       count++;
//     }
//   }
//   output.push(target);
//   return output;
// };

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
