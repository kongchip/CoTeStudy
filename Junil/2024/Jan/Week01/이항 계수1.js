let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split(" ");

const [N, K] = input.map(Number);

// N! / K!(N-K)!

let n = 1;
let r = 1;
let nr = 1;

for (let i = N; i >= 1; i--) {
  n *= i;
}

for (let i = K; i >= 1; i--) {
  r *= i;
}

for (let i = N - K; i >= 1; i--) {
  nr *= i;
}

console.log(n / (r * nr));

// 재귀로 팩토리얼 구현하면 런타임에러뜸
