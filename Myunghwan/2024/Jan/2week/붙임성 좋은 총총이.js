const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = +input[0];
let arr = [];
for (let i = 1; i <= N; i++) {
  let person = input[i].split(' ');

  if (person[0] === 'ChongChong') {
    arr.push('ChongChong');
    arr.push(person[1]);
  } else if (person[1] === 'ChongChong') {
    arr.push('ChongChong');
    arr.push(person[0]);
  }

  if (arr.includes(person[0])) {
    arr.push(person[1]);
  } else if (arr.includes(person[1])) {
    arr.push(person[0]);
  }
}
let answer = new Set(arr);
console.log(answer.size);
