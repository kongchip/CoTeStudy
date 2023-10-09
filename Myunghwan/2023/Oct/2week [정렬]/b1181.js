const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

// 1. 중복 제거
let inputFilter = input.filter((v, i) => input.indexOf(v) === i);

// 2. 길이가 짧은것부터 정렬
// 2-1. localeCompare매서드를 사용해서 사전순으로 정렬
console.log(inputFilter.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'));
