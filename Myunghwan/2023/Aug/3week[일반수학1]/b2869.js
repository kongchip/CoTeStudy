console.time('duration_time');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

// A : 올라갈 수 있는 거리
// B : 미끄러지는 거리
// V : 나무의 높이
const [A, B, V] = input.map((el) => +el);

// // 올라가는데 걸리는 날짜
// let day = 0;
// // 현재 달팽이가 올라간 거리
// let climb = 0;

// // climb + A 가 V보다 작을경우 climb에 A를 더한다
// // 단, 처음엔 하루는 무조건 올라가야하고, 올라갔을경우 내려오는거리는 빼면 안된다.
// // climb + A 가 V보다 크거나 작을경우 멈춘다.
// // climb + A 가 V보다 작을경우 climb + A의 값에서 - B
// while (climb <= V) {
//   day++;
//   climb += A;

//   if (climb >= V) break;
//   else {
//     climb -= B;
//   }
// }
// console.log(day);

// console.timeEnd('duration_time');
// --시간초과--

// 올라가는데 걸리는 날짜 = 나무의 높이 - 미끄러지는 거리/ 올라갈 수 있는 거리 - 미끄러지는 거리
// 소수점으로 떨어질 수 있으므로 반올림
console.log(Math.ceil((V - B) / (A - B)));
