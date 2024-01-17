const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => +el);

input.shift();
let arr = input;
// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값(반올림)
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이

let mean = Math.round(input.reduce((acc, cur) => acc + cur, 0) / input.length);
if (mean === -0) {
  mean = 0;
}
const median = input.sort((a, b) => a - b);
const range = median[median.length - 1] - median[0];

function mode() {
  const map = new Map();
  for (let i in input) {
    if (!map.has(input[i])) {
      map.set(input[i], 1);
    } else {
      map.set(input[i], map.get(input[i]) + 1);
    }
  }
  let maxValue = 0;
  let arr = [];
  map.forEach((ele, key) => {
    if (maxValue < ele) {
      maxValue = ele;
      arr = [];
      arr.push(key);
    } else if (maxValue === map.get(key)) {
      arr.push(key);
    }
  });
  return arr.length !== 1 ? arr[1] : arr[0];
}

console.log(mean);
console.log(median[Math.floor(input.length / 2)]);
console.log(mode());
console.log(range);
