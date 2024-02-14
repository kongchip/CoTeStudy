const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, M] = input;

let arr = Array(M).fill(0);
let visited = Array(N).fill(0);
function backtrack(K) {
  if (K === M) {
    console.log(arr.join(' '));
  } else {
    for (let i = 1; i <= N; i++) {
      if (visited[i - 1] === 0) {
        arr[K] = i;
        visited[i - 1] = 1;
        backtrack(K + 1);
        visited[i - 1] = 0;
      }
    }
  }
}
backtrack(0);
