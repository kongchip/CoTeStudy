const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [numA_a, numA_b] = input[0].split(' ').map((el) => +el);
let [numB_a, numB_b] = input[1].split(' ').map((el) => +el);
// 분모의 최소 공배수를 구하고, 그 수만큼 분자의 값을 곱한후 더하기

function gcd(a, b) {
  let r = a % b;
  return b === 0 ? a : gcd(b, r);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

let N = lcm(numA_b, numB_b) / numA_b;
let M = lcm(numA_b, numB_b) / numB_b;
let result = N * numA_a + M * numB_a;
let result2 = lcm(numA_b, numB_b);
// console.log(N * numA_a + M * numB_a + ' ' + lcm(numA_b, numB_b));
let answer = 0;
if (result % result2 === 0) {
  console.log(result / result2 + ' ' + 1);
} else console.log(result + ' ' + result2);
