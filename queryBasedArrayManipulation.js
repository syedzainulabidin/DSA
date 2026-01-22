let n = 2;
let queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

let lastAnswer = 0;
let arr = [[], []];
let answers = [];

let calc = (query) => {
  let type = query[0];
  let array = query[1];
  let value = query[2];
  let index = (array ^ lastAnswer) % n;

  if (type == 1) {
    arr[index].push(value);
  } else if (type == 2) {
    lastAnswer = arr[index][value];
    answers.push(lastAnswer);
  }
};

queries.forEach((q) => {
  calc(q);
});

console.log(answers);