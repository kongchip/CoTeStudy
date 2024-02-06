const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim();
const N = +input;

let result = [];

const star = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) {
    result.push(' ');
  } else {
    if (num === 1) {
      result.push('*');
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    star(i, j, N);
  }
  result.push('\n');
}

console.log(result.join(''));
