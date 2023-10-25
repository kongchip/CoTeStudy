let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" ").map(el => +el));

const [N, M] = input.shift();

const arrA = input.shift();
const arrB = input.shift();
const setA = new Set(arrA);
const setB = new Set(arrB);
const filterA = arrB.filter(el => !setA.has(el));
const filterB = arrA.filter(el => !setB.has(el));

console.log(filterA.length + filterB.length);
