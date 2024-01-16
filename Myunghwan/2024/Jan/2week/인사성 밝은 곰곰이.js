// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// input.shift();
// input.reverse();

// let result = [];
// let answer = [];
// let list = new Set();
// //ENTER를 기분으로 새로운 배열에 추가해준다

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === 'ENTER') {
//     result.push(answer);
//     answer = [];
//   } else {
//     answer.push(input[i]);
//   }
// }

// // console.log(result);
// // result에 있는 배열에 중복값을 제거 해야함
// // for (let i = 0; i < result.length; i++) {
// //   for (let el of result[i]) {
// //     list.add(el);
// //   }
// // }
// for (let resultEl of result) {
//   for (let el of resultEl) {
//     list.add(el);
//   }
// }
// const total = [...list];

// const asd = total.length;
// console.log(asd);
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
