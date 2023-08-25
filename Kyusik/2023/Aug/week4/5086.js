const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

let resultArr = [];

for (let i = 0; i < input.length - 1; i++) {
  let testCase = input[i].split(' ').map((el) => Number(el));
  if (testCase[0] % testCase[1] === 0) resultArr.push('multiple');
  else if (testCase[1] % testCase[0] === 0) resultArr.push('factor');
  else resultArr.push('neither');
}

console.log(resultArr.join('\n'));
