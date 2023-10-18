let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" ").map(el => +el));

const N = input.shift();
let original = input.shift();
const M = input.shift();
let compare = input.shift();

const checkingSets = new Set(original);

const result = [];

for (let i = 0; i < M; i++) {
  if (checkingSets.has(compare[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
