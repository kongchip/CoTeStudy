/*
5
*/

/*
4
9
25
81

2
3
5
9
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let dot = 2;
for (let i = 0; i < input[0]; i++) {
  dot += Math.pow(2, i);
}
console.log(Math.pow(dot, 2));
