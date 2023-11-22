const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

input.pop();
// n보다크고 2n보다 작거나 같은 수중 소수의 갯수를 구한다.

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < input.length; i++) {
  let count = 0;
  let N = input[i] + 1;
  let maxN = input[i] * 2;

  for (let j = N; j <= maxN; j++) {
    if (isPrime(j)) count++;
  }
  console.log(count);
}
