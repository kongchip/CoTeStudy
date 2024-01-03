let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" "));

const T = input.shift();

const answer = [];

for (let i = 0; i < T; i++) {
  const [N, K] = input[i].sort((a, b) => b - a);

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

  answer.push(Math.round(n / (r * nr)));
}

console.log(answer.join("\n"));

// 이항계수 sort만 해줌
