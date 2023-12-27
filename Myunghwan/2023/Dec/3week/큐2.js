const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
input.shift();
let result = [];

for (let el of input) {
  let str = el.split(' ');
  let command = str[0];

  switch (command) {
    case 'push':
      result.push(str.length > 1 ? parseInt(str[1]) : null);
      break;

    case 'pop':
      if (result.length === 0) {
        console.log(-1);
      } else {
        console.log(result.shift());
      }
      break;

    case 'size':
      console.log(result.length);
      break;

    case 'empty':
      console.log(result.length === 0 ? 1 : 0);
      break;

    case 'front':
      console.log(result.length === 0 ? -1 : result[0]);
      break;

    case 'back':
      console.log(result.length === 0 ? -1 : result[result.length - 1]);
      break;
  }
}

// 시간초과 발생
