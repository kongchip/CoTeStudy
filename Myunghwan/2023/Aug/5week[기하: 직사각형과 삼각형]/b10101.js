const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

// 세 각의 크기가 모두 60이면, Equilateral
// 세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
// 세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
// 세 각의 합이 180이 아닌 경우에는 Error

if (input[0] === input[1] && input[1] === input[2]) {
  console.log('Equilateral');
} else if (input[0] + input[1] + input[2] === 180) {
  if (input[0] === input[1] || input[1] === input[2] || input[0] === input[2]) {
    console.log('Isosceles');
  } else console.log('Scalene');
} else console.log('Error');
