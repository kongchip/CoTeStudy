const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.map((el) => +el);

let result = [];

while (true) {
  for (let i = 0; i < N.length; i++) {}
}
console.log(N);
