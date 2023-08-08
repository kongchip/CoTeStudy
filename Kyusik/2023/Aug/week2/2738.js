const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
3 4
1 1 1
2 2 2
0 1 0
1 1 1
3 3 3
4 4 4
1 1 1
5 5 100
*/

let NM = input.shift().split(' ');
let N = parseInt(NM[0]);
let M = parseInt(NM[1]);
let A = input.slice(0, N).map((el) => el.split(' ').map((el) => parseInt(el)));
let B = input.slice(N).map((el) => el.split(' ').map((el) => parseInt(el)));
let array = Array.from(Array(N), () => Array(M).fill(0));

// console.log(N, M, A, B, array);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    array[i][j] = A[i][j] + B[i][j];
  }
}

let answer = '';
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answer += array[i][j].toString() + ' ';
  }
  answer += '\n';
}

console.log(answer);
