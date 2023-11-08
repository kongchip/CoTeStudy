const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

const A = input.map((el) => +el.split(' ')[0]);
const B = input.map((el) => +el.split(' ')[1]);
// const newArr = input.map((el) => el.split(' '))

// 유클리드 호제법을 사용하여 최대 공약수를 구한다
function gcd(a, b) {
  let r = a % b;
  return b === 0 ? a : gcd(b, r);
}

// 유클리드 호제법 함수로 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let i = 0; i < input.length; i++) {
  console.log(lcm(A[i], B[i]));
}
