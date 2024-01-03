let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const N = Number(input);

let count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    count++;
  }
}

console.log(count - N);
