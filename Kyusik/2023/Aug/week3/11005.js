/*
60466175 36
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

let [decimal, object] = input;

let changedNumber = decimal.toString(object);

console.log(changedNumber.toUpperCase());
