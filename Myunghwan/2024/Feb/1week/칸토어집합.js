const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

// 1. input의 값을 3**n으로 하여 '-'로 바꾼다
// 2. 1의 값을 3으로 나눈다
// 3. [0]은 '---'이 없도록 계속 반복하여 3등분 한 후 가운데를 ' '로 바꾼다
// 4. [1]은 ' '로 바꾼다.
// 5. [2]도 4번과 같다.

function cantorian(str) {
  if (str.includes('---')) {
    const len = str.length / 3;
    const cantorianArr = [];
    for (let i = 0; i <= str.length - len; i += len) {
      cantorianArr.push(str.slice(i, i + len));
    }
    cantorianArr[0] = cantorian(cantorianArr[0]);
    cantorianArr[1] = cantorianArr[1].replaceAll('-', ' ');
    cantorianArr[2] = cantorian(cantorianArr[2]);
    return cantorianArr.join('');
  }
  return str;
}

const result = input.map((el) => {
  const dash = '-'.repeat(3 ** el);
  return cantorian(dash);
});

console.log(result.join('\n'));
