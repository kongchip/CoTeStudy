const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

// input.shift();
// // 심어진 가로수의 간격
// let interval = [];

// for (let i = 0; i < input.length - 1; i++) {
//   interval.push(input[i + 1] - input[i]);
// }

// function gcd(a, b) {
//   let r = a % b;
//   return b === 0 ? a : gcd(b, r);
// }

// // 가로수 간격의의 공통된 최대공약수
// let intervalGcd = 0;
// for (let i = 0; i < interval.length; i++) {
//   intervalGcd = gcd(interval[0], interval[i]);
// }

// // 가로수 사이에 추가되는 나무의 갯수 구하기
// let result = 0;
// for (let i = 0; i < interval.length; i++) {
//   if (interval[i] !== intervalGcd) {
//     result += interval[i] / intervalGcd - 1;
//   }
// }

// console.log(result);
// ------------ 틀림 ---------
const N = input.shift();
const trees = input.sort((a, b) => a - b);
let max = 0;
let interval = [];
let answer = 0;
for (let i = 0; i < trees.length - 1; i++) {
  const dist = trees[i + 1] - trees[i];
  interval.push(dist);
}

function gcd(a, b) {
  let temp;
  while (b != 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

let GCD = gcd(interval[0], interval[1]);

for (let i = 2; i < interval.length; i++) {
  GCD = gcd(GCD, interval[i]);
}

interval.forEach((v) => {
  if (v > GCD) answer += v / GCD - 1;
});

console.log(answer);
