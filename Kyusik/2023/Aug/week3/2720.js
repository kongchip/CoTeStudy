/*
3
124
25
194
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let T = input.shift();
let [quater, dime, nickel, penny, remain] = [0, 0, 0, 0, 0];

for (let i = 0; i < T; i++) {
  quater = Math.floor(input[i] / 25);
  remain = input[i] % 25;
  dime = Math.floor(remain / 10);
  remain = remain % 10;
  nickel = Math.floor(remain / 5);
  remain = remain % 5;
  penny = Math.floor(remain / 1);
  remain = 0;
  console.log(quater, dime, nickel, penny);
}
