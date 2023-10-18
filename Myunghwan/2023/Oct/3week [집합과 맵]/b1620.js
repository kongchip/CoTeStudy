const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0].split(' ')[0];
const M = +input[0].split(' ')[1];
// 포켓몬 배열을 만들고, new Map을 이용하여 각 포켓몬에 번호를 부여
const arr = input.slice(1, N + 1);
const poketmon = new Map(arr.map((v, i) => [v, i + 1]));
const quiz = input.slice(N + 1);
let result = [];

// quiz배열에서 문자열과 숫자를 구분하여 result에 push
quiz.forEach((v) => {
  if (Number.isNaN(+v)) result.push(poketmon.get(v));
  else result.push(arr[+v - 1]);
});
console.log(result.join('\n'));
