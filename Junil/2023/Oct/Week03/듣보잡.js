let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");

const arrA = input.slice(0, N);
const arrB = input.slice(N);

const setA = new Set(arrA);
const filter = arrB.filter(el => setA.has(el));

console.log(filter.length);
console.log(filter.sort().join("\n"));
