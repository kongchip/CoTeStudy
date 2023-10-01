const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

input = input.sort((a, b) => a - b);
const avg = input.reduce((acc, cur) => acc + cur) / 5;
console.log(avg);
console.log(input[2]);
