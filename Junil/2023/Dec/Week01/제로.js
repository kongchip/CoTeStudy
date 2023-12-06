let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(n => Number(n));

const K = input.shift();
const answer = [];

for (let i = 0; i < K; i++) {
  if (input[i] === 0) {
    answer.pop();
  } else {
    answer.push(input[i]);
  }
}

let sum = 0;

for (let i = 0; i < answer.length; i++) {
  sum += answer[i];
}

console.log(sum);
