let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const sumFactors = input.shift();

const [factors] = input.map(el => el.split(" "));

factors.sort((a, b) => b - a);

console.log(factors[0] * factors[factors.length - 1]);
