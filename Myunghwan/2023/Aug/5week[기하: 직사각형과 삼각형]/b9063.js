const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let N = input.map((el) => el.split(' ').map((el) => +el));
let xArr = [];
let yArr = [];

for (let i = 0; i < N.length; i++) {
  xArr.push(N[i][0]);
  yArr.push(N[i][1]);
}
console.log((Math.max(...xArr) - Math.min(...xArr)) * (Math.max(...yArr) - Math.min(...yArr)));
