// 시간 초과
// let input = require("fs")
//   .readFileSync(
//     process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
//   )
//   .toString()
//   .trim()
//   .split("\n");

// const [N, M] = input[0].split(" ");
// input.shift();

// const set1 = new Set();
// let count = 0;

// for (let i = 0; i < N; i++) {
//   set1.add(input[i]);
// }

// for (let j = N; j < N + M; j++) {
//   if (set1.has(input[j])) {
//     count++;
//   }
// }

// console.log(count);

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");

input.shift();

const set1 = new Set(input.slice(0, N));
let count = 0;

for (let i = 0; i < M; i++) {
  if (set1.has(input.slice(N)[i])) {
    count++;
  }
}

console.log(count);
