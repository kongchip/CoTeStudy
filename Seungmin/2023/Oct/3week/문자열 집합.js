const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = 0
  let numArr = input.shift().split(' ').map(Number)
  let groupSet = new Set(input.splice(0, numArr[0]))

  input.forEach(el => groupSet.has(el) && result++)

  console.log(result)
}

solution()