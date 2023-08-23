const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input[1].split(' ').map((el) => +el);
let result = 0;
for (let n of N) {
  if (n > 1 && n % 2 !== 0) result++;
}
console.log(result);
