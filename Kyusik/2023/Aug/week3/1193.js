/*
6
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());

let roomSum = 0;
let floor = 1;
for (let i = 0; input > roomSum; i++) {
  roomSum = roomSum + i;
  floor = i;
}
//console.log(roomSum, floor, prev);
let m = roomSum - input;
if (floor % 2 === 0) {
  console.log(`${floor - m}/${1 + m}`);
} else {
  console.log(`${1 + m}/${floor - m}`);
}
