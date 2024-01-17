let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const numbers = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

// 산술평균
const mean = Math.round(numbers.reduce((sum, num) => sum + num, 0) / N);

// 중앙값
const median = numbers[Math.floor(N / 2)];

// 최빈값
const freqMap = new Map();
numbers.forEach(num => {
  freqMap.set(num, (freqMap.get(num) || 0) + 1);
});

let maxFreq = 0;
let mode = [];
freqMap.forEach((freq, num) => {
  if (freq > maxFreq) {
    maxFreq = freq;
    mode = [num];
  } else if (freq === maxFreq) {
    mode.push(num);
  }
});

// 최빈값 중 두 번째로 작은 값
mode.sort((a, b) => a - b);
const secondMode = mode.length > 1 ? mode[1] : mode[0];

// 범위
const range = numbers[N - 1] - numbers[0];

// 결과 출력
console.log(mean < 0 ? -Math.abs(mean) : Math.abs(mean));
console.log(median);
console.log(secondMode);
console.log(range);
