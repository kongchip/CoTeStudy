const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let count = input[0].split(' ').map(Number)[1]
  let score = input[1].split(' ').map(Number).sort((a, b) => b - a)

  console.log(score[count - 1])
}

solution()