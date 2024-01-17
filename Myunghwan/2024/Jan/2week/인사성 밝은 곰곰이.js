const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
input.reverse();

let result = [];
let answer = [];
//ENTER를 기분으로 새로운 배열에 추가해준다
for (let i = 0; i < input.length; i++) {
  if (input[i] === 'ENTER') {
    result.push(answer);
    answer = [];
  } else {
    answer.push(input[i]);
  }
}
const result2 = [];
//result에서 각 배열의 중복값을 제거한다.
for (let resultEl of result) {
  const setEl = new Set();

  for (let el of resultEl) {
    setEl.add(el);
  }

  const newResult = [...setEl];
  result2.push(newResult.length);
}

console.log(result2.reduce((acc, cur) => acc + cur, 0));
