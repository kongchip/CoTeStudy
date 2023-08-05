const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let newArr = [];
// 입력받은 값을 2차원 배열로 정제
for (let i = 0; i < input.length; i++) {
  newArr.push(input[i].split(' ').map((el) => +el));
}

// newArr을 순회하면서 가장 큰 수를 찾기 -> 행의 값
let maxNum = Math.max(...newArr[0]);
let [row, column] = [0, 0];
for (let i = 0; i < newArr.length; i++) {
  if (maxNum < Math.max(...newArr[i])) {
    maxNum = Math.max(...newArr[i]);
    row = i;
  }
}
// 열의 값
column = newArr[row].indexOf(maxNum);
console.log(maxNum);
console.log(row + 1, column + 1);
