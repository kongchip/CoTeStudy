const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((el) => +el);
input.shift();
const noListen = new Set(input.slice(0, N));
const noSee = new Set(input.slice(N));

let result = [];

noListen.forEach((item) => {
  if (noSee.has(item)) result.push(item);
});

console.log(result.length + '\n' + result.sort().join('\n'));
