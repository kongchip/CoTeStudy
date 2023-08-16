/*
100 99 1000000000
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [A, B, V] = input;

console.log(Math.ceil((V - A) / (A - B) + 1));
