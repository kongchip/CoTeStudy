const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let lenArr = input.map((el) => el.length);
let maxLen = Math.max(...lenArr);
let result = '';

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;
    else result += input[j][i];
  }
}

console.log(result);
