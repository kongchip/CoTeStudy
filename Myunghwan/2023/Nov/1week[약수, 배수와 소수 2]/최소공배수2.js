const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [A, B] = input.map((el) => +el);
// B * N = A  | A = B*?
// 두 수의 최소 공배수를 구해라

// 유클리드 호제법으로 최대공약수를 구한후 최소 공배수 구하기
function gcd(a, b) {
  let r = a % b;
  return b === 0 ? a : gcd(b, r);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(A, B));
