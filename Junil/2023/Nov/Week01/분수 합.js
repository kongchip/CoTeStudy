let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" ").map(el => +el));

function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const 분모최소공배수 =
  (input[0][1] * input[1][1]) / findGCD(input[0][1], input[1][1]);

const 분자1 = input[0][0] * (분모최소공배수 / input[0][1]);
const 분자2 = input[1][0] * (분모최소공배수 / input[1][1]);

const 기약분자 = (분자1 + 분자2) / findGCD(분자1 + 분자2, 분모최소공배수);
const 기약분모 = 분모최소공배수 / findGCD(분자1 + 분자2, 분모최소공배수);

console.log(기약분자, 기약분모);
