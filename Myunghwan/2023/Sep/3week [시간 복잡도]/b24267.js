const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = BigInt(input);
let hap = 0n;
let getNum = num - 2n;
for (let i = 1n; i <= num - 1n; i++) {
  hap += getNum * i;
  getNum -= 1n;
}
console.log(`${hap}`);
console.log(3);
