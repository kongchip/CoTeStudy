const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => +el));
input.shift();

console.log(
  input
    .sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] < b[0]) return -1;
      }
      return a[1] - b[1];
    })
    .map((el) => el.join(' '))
    .join('\n')
);
