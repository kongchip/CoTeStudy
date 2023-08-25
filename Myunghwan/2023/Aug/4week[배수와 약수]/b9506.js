const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();
let N = input.map((el) => +el);

// N의 인덱스별 약수를 구한다
let divisor = [];

for (let i = 0; i < N.length; i++) {
  let arr = [];
  for (let j = 1; j < N[i]; j++) {
    if (N[i] % j === 0) {
      arr.push(j);
    }
  }
  divisor.push(arr);
}
// console.log(divisor);
// [ [ 1, 2, 3 ], [ 1, 2, 3, 4, 6 ], [ 1, 2, 4, 7, 14 ] ]

// 인덱스별 합과 N이 같은지 비교
// divisor의 각 인덱스 의 합을 구한다
let sumDivisor = [];
for (let i = 0; i < divisor.length; i++) {
  sumDivisor.push(divisor[i].reduce((acc, cur) => acc + cur));
}
// console.log(sumDivisor);
// [ 6, 16, 28 ]

// N의 인덱스와 sumDivisor의 인덱스를 비교후 출력
for (let i = 0; i < N.length; i++) {
  if (sumDivisor[i] === N[i]) {
    console.log(`${N[i]} = ${divisor[i].join(' + ')}`);
  } else console.log(`${N[i]} is NOT perfect.`);
}
