const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  let avg = input.reduce((acc, cur) => acc + cur) / input.length
  let center = input.sort((a, b) => a - b)[2]

  console.log(`${avg}\n${center}`)
}

solution()