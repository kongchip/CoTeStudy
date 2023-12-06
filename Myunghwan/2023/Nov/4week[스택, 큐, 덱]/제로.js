const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);
input.shift();
// console.log(input);
let stack = [];
for (let el of input) {
  if (el !== 0) {
    stack.push(el);
  } else {
    stack.pop();
  }
}

console.log(stack.length === 0 ? 0 : stack.reduce((a, b) => a + b, 0));
