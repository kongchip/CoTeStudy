const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = +input;

// // 1. 창문을 input의 값만큼 전부 false로 둔다
// // 2. n번의 배수마다 true는 false로 false는 true로 둔다

// let window = new Array(input).fill(false);

// for (let i = 1; i <= input; i++) {
//   for (let j = 1; j * i <= input; j++) {
//     window[j * i] === true ? (window[j * i] = false) : (window[j * i] = true);
//   }
// }

// console.log(window.filter((e) => e === true).length);

// ------ 메모리 초과 ------
console.log(Math.floor(Math.sqrt(input)));
