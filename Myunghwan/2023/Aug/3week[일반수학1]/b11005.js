const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [num, binary] = fs.readFileSync(filePath).toString().split(' ');

num = Number(num);
binary = Number(binary);

console.log(num.toString(binary).toUpperCase());
