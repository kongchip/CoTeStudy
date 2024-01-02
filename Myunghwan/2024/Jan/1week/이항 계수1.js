const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);

const [N, K] = input;
// 이항계수 공식 n! / k!(n-k)!

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));

// let parent = 1;
// let child = 1;

// for (let i = 0; i < K; i++) {
//   parent *= N - i;
//   child *= K - i;
// }

// console.log(parent / child);
