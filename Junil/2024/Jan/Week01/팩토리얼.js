let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const N = Number(input);

let count = N;

if (N === 0) {
  count = 1;
}

for (let i = N - 1; i > 0; i--) {
  count *= i;
}

console.log(count);
