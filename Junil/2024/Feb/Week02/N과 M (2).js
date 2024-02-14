let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;
const sequence = [];
const result = [];

function backtrack(start) {
  if (sequence.length === M) {
    result.push(sequence.slice());
    return;
  }

  for (let i = start; i <= N; i++) {
    sequence.push(i);
    backtrack(i + 1);
    sequence.pop();
  }
}

backtrack(1);

console.log(result.map(el => el.join(" ")).join("\n"));
