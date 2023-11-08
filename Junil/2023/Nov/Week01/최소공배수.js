let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" ").map(el => +el));

const T = input.shift();

let answer = [];

function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLCM(a, b) {
  const gcd = findGCD(a, b);
  return (a * b) / gcd;
}

for (let i = 0; i < T; i++) {
  answer.push(findLCM(input[i][0], input[i][1]));
}

console.log(answer.join("\n"));
