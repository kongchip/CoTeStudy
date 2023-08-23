const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// console.log(Number(input[0][0]));
// 1.번째 숫자가 두번째 숫자의 약수 -> factor
// 2. 첫번째 숫자가 두번째 숫자의 배수 -> multiple
// 3. 첫번재 숫자가 두번째 숫자의 약수와 배수 모두 아니다. -> neither
input.pop();

for (let i = 0; i < input.length; i++) {
  if (input[i][1] % input[i][0] === 0) {
    console.log('factor');
  } else if (input[i][0] % input[i][1] === 0) {
    console.log('multiple');
  } else console.log('neither');
}
