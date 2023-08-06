/*    입력
3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80
*/
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
