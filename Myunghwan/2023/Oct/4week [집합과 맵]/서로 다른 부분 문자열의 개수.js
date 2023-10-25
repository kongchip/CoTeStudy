const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const inputSet = new Set();

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j + i <= input.length; j++) {
    inputSet.add(input.substring(j, j + i));
  }
}
console.log(inputSet.size);
