const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map((el) => +el);
input.shift();

let arr = input
  .filter((el) => {
    if (el.length >= parseInt(M)) return el;
  })
  .sort()
  .sort((a, b) => b.length - a.length);

let map = new Map();
for (let el of arr) {
  if (map.has(el)) map.set(el, map.get(el) + 1);
  else map.set(el, 1);
}

let sortArr = [...map].sort((a, b) => b[1] - a[1]);

let result = [];
for (let el of sortArr) {
  result.push(el[0]);
}

console.log(result.join('\n'));
