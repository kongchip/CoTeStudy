const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const N = +input;
let M = N - input.length * 9;
let result = 0;

while (true) {
  M++;
  let sum = M;
  for (let i = 0; i < String(M).length; i++) {
    sum += Number(String(M).charAt(i));
  }
  if (sum === N) {
    result = M;
    break;
  }
  if (M >= N) {
    result = 0;
    break;
  }
}
console.log(result);
