const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, M] = input;
let answer = '';
let arr = Array(M).fill(0);
function backtrack(K, num) {
  if (K === M) {
    answer += `${arr.join(' ')}\n`;
    return;
  }
  for (let i = num; i <= N; i++) {
    arr[K] = i;
    backtrack(K + 1, i);
  }
}
backtrack(0, 1);
console.log(answer);
