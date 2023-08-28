const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);

let arr = [input[0], input[1], input[2] - input[0], input[3] - input[1]];

console.log(Math.min(...arr));
