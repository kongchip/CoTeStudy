const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// x의 갯수와, y의 갯수에서 1개밖에 없는것을 찾는다

let arr = input.map((el) => el.split(' '));
let xArr = [];
let yArr = [];
// 각 좌표의 x와, y를 xArr과 yArr에 넣는다
for (let [x, y] of arr) {
  xArr.push(+x);
  yArr.push(+y);
}
// xArr,과yArr에서 하나만 있는 수를 고른다.
// 배열을 정렬한후, 0번 인덱스와 1번인덱스의 값을 비교 후 같다면 2번인덱스를 다르다면 1번인덱스를 출력
xArr.sort();
yArr.sort();
if (xArr[0] === xArr[1]) {
  xArr = xArr[2];
} else xArr = xArr[0];

if (yArr[0] === yArr[1]) {
  yArr = yArr[2];
} else yArr = yArr[0];
console.log(xArr, yArr);
