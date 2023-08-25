/*
6 3
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => Number(el));

let divisorArr = [];

//약수 구하기
for (let i = 1; i <= Math.sqrt(input[0]); i++) {
  if (input[0] % i === 0) {
    divisorArr.push(i);
    divisorArr.push(input[0] / i);
  }
}

// 약수 배열 정렬
divisorArr.sort((a, b) => a - b);

// 중복 제거
const set = new Set(divisorArr);
divisorArr = Array.from(set);

// 답 출력
if (input[1] - 1 >= divisorArr.length) {
  console.log(0);
} else {
  console.log(divisorArr[input[1] - 1]);
}
