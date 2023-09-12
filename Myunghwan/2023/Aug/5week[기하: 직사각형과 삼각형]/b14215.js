const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el)
  .sort((a, b) => a - b);
let result = 0;
// 1 + 2 -> 3 | 1 + 2 + 2
// 가장 작은 두 수의 합이 가장 큰 수보다 클경우 가장 가장 작은 두 수의합 + 가장작은 두 수의합 - 1
// 아닐경우 3수의 합 더한다
if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log((a + b) * 2 - 1);
}
