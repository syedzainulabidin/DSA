
let destroyer = (arr, ...number) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let n = 0; n < number.length; n++) {
      if (arr[i] == number[n]) {
        arr.splice(i, i + 1);
      }
    }
  }
  return arr;
};

console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan",
  ),
);