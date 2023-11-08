let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let ans = [];
for (let i = 0; i < N; i++) {
  let temp = Number(input[i]);
  while (!isPrime(temp)) {
    temp++;
  }
  ans.push(temp);
}

console.log(ans.join("\n"));
