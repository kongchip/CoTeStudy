const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

let arr = [];
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
  return arr.push(n);
};
let [M, N] = [input[0], input[1]];
for (let i = M; i <= N; i++) {
  isPrime(i);
}

if (arr.length === 0) {
  console.log(-1);
} else {
  console.log(arr.reduce((acc, cur) => acc + cur));
  console.log(Math.min(...arr));
}
