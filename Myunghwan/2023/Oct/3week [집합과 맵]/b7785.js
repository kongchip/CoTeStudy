const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
/*
const arr = input.map((el) => el.split(' '));

// enter와 leave를 기준으로 분류
let enterArr = [];
let leaveArr = [];
arr.filter((el) => {
  if (el[1] === 'enter') enterArr.push(el[0]);
  else leaveArr.push(el[0]);
});

// 떠난 사람 기준으로 enterArr에 없다면 그사람을 result에 추가
let result = [];
let set = new Set(leaveArr);
for (let el of enterArr) {
  if (!set.has(el)) {
    result.push(el);
  }
}
console.log(result.sort((a, b) => b - a).join('\n'));
---------실패--------
*/

let people = new Set();

for (let i = 0; i < input.length; i++) {
  const [name, state] = input[i].split(' ');
  if (state === 'enter') {
    people.add(name);
  }
  if (state === 'leave') {
    people.delete(name);
  }
}
let result = [...people].sort();
result.reverse();
console.log(result.join('\n'));
