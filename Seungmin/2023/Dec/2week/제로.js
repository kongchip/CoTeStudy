const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {  
  let result = 0
  let arr = []

  input.shift()

  input.forEach(el => el !== 0 ? arr.push(el) : arr.pop())

  result = arr.reduce((acc, cur) => acc + cur, 0)

  console.log(result)
}

solution()