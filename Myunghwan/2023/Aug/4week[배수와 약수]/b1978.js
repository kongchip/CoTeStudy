const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 소수찾는 코드
const isPrime = function (n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

let N = input[1].split(' ').map((el) => +el);
console.log(N.filter((el) => isPrime(el)).length);
