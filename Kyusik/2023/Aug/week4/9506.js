const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim())
  .map((el) => parseInt(el));

let divisorArr = [];
let resultArr = [];

for (let i = 0; i < input.length - 1; i++) {
  // 약수 구하기
  for (let j = 0; j <= Math.sqrt(input[i]); j++) {
    if (input[i] % j === 0) {
      divisorArr.push(j);
      divisorArr.push(input[i] / j);
    }
  }
  // 중복 제거, 정렬, 자기자신 제거
  let set = new Set(divisorArr);
  divisorArr = Array.from(set);
  divisorArr.sort((a, b) => a - b);
  divisorArr.pop();

  // 완전수 판단
  let sum = divisorArr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  if (sum === input[i]) {
    resultArr.push(`${input[i]} = ${divisorArr.join(' + ')}`);
  } else {
    resultArr.push(`${input[i]} is NOT perfect.`);
  }
  divisorArr = [];
}

console.log(resultArr.join(`\n`));
