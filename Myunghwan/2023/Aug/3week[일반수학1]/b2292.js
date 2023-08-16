const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

// 1, 2~7, 8~19, 20~37, 38~61 ....
// 갯수 : 1, 6, 12, 18, 24
// 갯수증가: +5, +6, + 6 + 6
// 즉 벌집의 갯수가 6씩 증가할때마다 1번씩 이동해야한다

let N = Number(input);
let [room, range] = [1, 1];

while (room < N) {
  room += 6 * range;
  range++;
}
console.log(range);
