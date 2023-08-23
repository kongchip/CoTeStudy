const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, K] = fs.readFileSync(filePath).toString().split(' ');

let arr = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    arr.push(i);
  }
}
if (arr.length < K) {
  console.log(0);
} else console.log(arr[K - 1]);
