const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let k = input[0].split(' ')[1];

console.log(input[1].split(' ').sort((a, b) => b - a)[k - 1]);
