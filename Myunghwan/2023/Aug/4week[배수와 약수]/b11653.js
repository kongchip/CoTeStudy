const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let N = +input;

let arr = [];
for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N = N / i;
    arr.push(i);
  }
}
console.log(arr.join('\n'));
