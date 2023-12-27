let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

input = input.map(el => el.split(" ").map(Number));

const A = input[0];
const B = input[1].map(el => [el]);
const M = input[2];
const C = input[3];

console.log(A, B, M, C);

//                  큐 스택 스택 큐
// C[i] 를 입력받고 B: 1, 2,  3, 4

const answer = [];

for (let i = 0; i < C.length; i++) {
  let num = 0;

  for (let j = 0; j < N; j++) {
    // 큐
    if (A[j] === 0) {
      B[j].push(C[i]);
      num = B[j].shift();
    }

    if (A[j] === 1) {
      B[j].push(num);
      num = B[j].pop();
    }
  }

  answer.push(num);
}

console.log(answer);
