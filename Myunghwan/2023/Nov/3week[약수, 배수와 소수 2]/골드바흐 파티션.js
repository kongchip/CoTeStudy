const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);
input.shift();

let maxNum = Math.max(...input);
let check = new Array(maxNum + 1).fill(false);
for (let i = 2; i <= maxNum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      check[j] = true;
    }
  }
}
let result = [];

input.map((x) => {
  let tmp = 0;
  let y = Math.ceil(x / 2);
  if (x === 4) tmp = 1;
  else {
    for (let i = 3; i <= y; i += 2) {
      if (!check[i] && !check[x - i] && x - i != 1) {
        tmp++;
      }
    }
  }
  result.push(tmp);
});

console.log(result.join('\n'));
