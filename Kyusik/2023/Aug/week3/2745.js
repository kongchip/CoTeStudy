/*
ZZZZZ 36
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [number, object] = input;

let changedNumber = parseInt(number, object);

console.log(changedNumber);
