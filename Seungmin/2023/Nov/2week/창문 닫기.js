const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());

const solution = () => {
  let result = 0

  for(let i = 1; i * i <= input; i++) {
    result++
  }

  console.log(result)
}

solution()