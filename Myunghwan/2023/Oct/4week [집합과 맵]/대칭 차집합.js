const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let aArr = input[1].split(' ').map((el) => +el);
let bArr = input[2].split(' ').map((el) => +el);

let aSet = new Set(aArr);
let bSet = new Set(bArr);

// A - B
let aResult = [];
aSet.forEach((item) => {
  if (bSet.has(item) === false) aResult.push(item);
});

// B - A

let bResult = [];
bSet.forEach((item) => {
  if (aSet.has(item) === false) bResult.push(item);
});
console.log(aResult.length + bResult.length);
