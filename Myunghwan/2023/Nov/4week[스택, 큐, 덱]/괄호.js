const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

let result = [];

for (let i = 0; i < input.length; i++) {
  let stack = 0;

  for (let el of input[i]) {
    if (el === '(') {
      stack += 1;
    } else {
      stack -= 1;
      if (stack < 0) {
        break;
      }
    }
  }
  result.push(stack === 0 ? 'YES' : 'NO');
}
console.log(result.join('\n'));
