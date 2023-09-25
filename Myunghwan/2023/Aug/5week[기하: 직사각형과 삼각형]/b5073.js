// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// input.pop();
// let N = input.map((el) =>
//   el
//     .split(' ')
//     .map((el) => +el)
//     .sort()
// );

// for (let n of N) {
//   if (n[0] + n[1] <= n[2]) {
//     console.log('Invalid');
//   } else {
//     if (n[0] === n[1] && n[1] === n[2]) {
//       console.log('Equilateral');
//     } else if (n[0] === n[1] || n[0] === n[2] || n[1] === n[2]) {
//       console.log('Isosceles');
//     } else console.log('Scalene');
//   }
// }

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop(); // 0 0 0 값 제거
const result = [];
for (let el of input) {
  const N = el.split(' ').map(Number);
  N.sort((a, b) => a - b);
  if (N[0] + N[1] <= N[2]) {
    result.push('Invalid');
    continue;
  }
  const set = new Set(N); // 같은 값은 하나만 저장되는 집합의 성질 이용
  if (set.size === 1) {
    result.push('Equilateral');
  } else if (set.size === 2) {
    result.push('Isosceles');
  } else {
    result.push('Scalene');
  }
}
console.log(result.join('\n'));
