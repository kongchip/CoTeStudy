const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

// 1층 -> 2
// 2층 -> 4
// 3층 -> 8
// 4층 -> 16
console.log(Math.pow(2, N));
