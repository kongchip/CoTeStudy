let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const gap = [];
for (let i = 1; i < input.length; i++) {
  // 가로수 간격
  gap.push(input[i] - input[i - 1]);
}

let gcd = gap[0];
for (let i = 1; i < gap.length; i++) {
  // 간격들의 최대공약수
  gcd = findGCD(gcd, gap[i]);
}

let minTrees = 0;
for (let i = 1; i < input.length; i++) {
  // 최소 나무 수
  minTrees += (input[i] - input[i - 1]) / gcd - 1;
}

console.log(minTrees);
