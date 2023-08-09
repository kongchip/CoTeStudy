/*
AABCDD
afzz
09121
a8EWg6
P5h3kx
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());
let maxLength = Math.max(...input.map((i) => i.length));

let answer = '';

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    answer += input[j][i] || '';
  }
}

console.log(answer);
