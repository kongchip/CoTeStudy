const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

console.log(input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]).join('\n'));
