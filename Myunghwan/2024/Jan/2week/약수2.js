const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, A] = [
  +input[0],
  input[1]
    .split(' ')
    .map((el) => +el)
    .sort((a, b) => a - b),
];

const firstNum = A[0];
const lastNum = A[A.length - 1];

console.log(firstNum * lastNum);
