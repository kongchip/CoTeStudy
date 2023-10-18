const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => +el));

const N = new Set(input[1]);
const M = input[3];

let result = [];

for (let cards of M) {
  N.has(cards) ? result.push(1) : result.push(0);
}
console.log(result.join(' '));
