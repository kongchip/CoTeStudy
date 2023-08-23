const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = input[1].split(' ').map((el) => +el);
let result = 0;
let arr = [];
for (let i = 0; i < N.length; i++) {
  if (N[i] > 1) {
    arr.push(N[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    result += 1;
  }
}
console.log(result);
