const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

function isPrime(num) {
  if (N === 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}

let [M, N] = [input[0], input[1]];
let arr = [];

function isPrime(num) {
  if (N === 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}
