const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, M] = input;

let arr = Array(M).fill(0);
function backtrack(num, K) {
  if (K === M) {
    console.log(arr.join(' '));
  } else {
    for (let i = num; i <= N; i++) {
      arr[K] = i;
      backtrack(i + 1, K + 1);
    }
  }
}
backtrack(1, 0);
