const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0].split(' ')[0];
const M = +input[0].split(' ')[1];

input.shift();
let nArr = new Set(input.slice(0, N));
let mArr = input.slice(N);

let result = 0;

for (let arr of mArr) {
  if (nArr.has(arr)) ++result;
}
console.log(result);
