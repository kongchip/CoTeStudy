const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input[0].split(' ').map((el) => +el));
let [a1, a0] = input[0].split(' ').map((el) => +el);
let c = +input[1];
let n0 = +input[2];

console.log(+(a0 <= (c - a1) * n0 && c >= a1));
