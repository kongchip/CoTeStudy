// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// input.shift();

// let xI = input.map((el) => el.split(' ')[0]).sort((a, b) => a - b);
// let yI = input.map((el) => el.split(' ')[1]).sort((a, b) => a - b);

// let result = [];
// for (let i = 0; i <= xI.length - 1; i++) {
//   result.push(xI[i] + ' ' + yI[i]);
// }
// console.log(result.join('\n'));

// x좌표를 오름차순으로 하되, x좌표가 같을경우 y좌표를 를 기준으로 오름차순 해야한다.

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// input.shift();

// input = input.map((el) => el.split(' ').map((el) => +el));

// console.log(
//   input
//     .sort((a, b) => {
//       if (a[0] === b[0]) {
//         if (a[1] < b[1]) return -1;
//       }
//       return a[0] - b[0];
//     })
//     .map((el) => el.join(' '))
//     .join('\n')
// );

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

input = input.map((el) => el.split(' ').map((el) => +el));
console.log(input);
console.log(
  input
    .sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[1] < b[1]) return -1;
      }
      return a[0] - b[0];
    })
    .map((el) => el.join(' '))
    .join('\n')
);
