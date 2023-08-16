const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim(); //.split(" ");

let curRoomNum = 1;
let result = 1;
for (i = 1; input > curRoomNum; i++) {
  curRoomNum = curRoomNum + 6 * i;
  result = i + 1;
}
console.log(result);
