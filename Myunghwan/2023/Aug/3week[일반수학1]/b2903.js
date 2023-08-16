const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let N = Number(input);

result = 2;
while (N > 0) {
  result = result + (result - 1);
  N -= 1;
}
console.log(result * result);
