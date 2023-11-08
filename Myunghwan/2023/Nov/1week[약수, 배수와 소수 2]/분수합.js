const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [numA, denA] = input[0].split(' ').map((el) => +el);
let [numB, denB] = input[1].split(' ').map((el) => +el);
// 분모의 최소 공배수를 구하고, 그 수만큼 분자의 값을 곱한후 더하기

function gcd(a, b) {
  let r = a % b;
  return b === 0 ? a : gcd(b, r);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 각 분모의 최소 공배수
let a = lcm(denA, denB);

// 각 분모에 맞는 분자가 증가한 값의 합
let b = (a / denA) * numA + (a / denB) * numB;

// 기약분수
let maxNum = 1;
for (let i = 1; i <= a; i++) {
  if (a % i === 0 && b & (i === 0)) {
    maxNum = i;
  }
}
console.log(b / maxNum, a / maxNum);
