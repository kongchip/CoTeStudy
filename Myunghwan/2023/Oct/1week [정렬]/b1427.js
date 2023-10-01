const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map((el) => +el);

console.log(input.sort((a, b) => b - a).join(''));
