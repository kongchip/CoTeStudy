/* 입력
3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [n, m] = input[0].split(' ');

let row = [];
let column = [];

for (let i = 1; i < input.length; i++) {
  let newArr = input[i].split(' ').map((el) => +el);

  if (i <= n) {
    row.push(newArr);
  } else {
    column.push(newArr);
  }
}

// 풀이
function solution(n, m, row, column) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    answer.push([]);

    for (let j = 0; j < m; j++) {
      answer[i].push(row[i][j] + column[i][j]);
    }
  }

  return answer;
}

// 출력
let result = '';
let answer = solution(n, m, row, column);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result += `${answer[i][j]} `;
  }
  result += `\n`;
}

console.log(result);
