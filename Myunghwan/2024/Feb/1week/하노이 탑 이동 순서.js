const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const N = +input;

// 1. 한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다.
// 2. 쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 한다.

const answer = [];
let count = 0;

function hanoi(n, from, other, to) {
  if (n === 0) {
    return;
  } else {
    hanoi(n - 1, from, to, other);
    answer.push([from, to]);
    count++;
    hanoi(n - 1, other, from, to);
  }
}

hanoi(N, '1', '2', '3');
console.log(count);
console.log(answer.map((i) => i.join(' ')).join('\n'));
