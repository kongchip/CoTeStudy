const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);

// 연립방정식
// ax + by = c
// dx + ey = f
let [a, b, c, d, e, f] = [input[0], input[1], input[2], input[3], input[4], input[5]];

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x + ' ' + y);
    }
  }
}
