const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  let result = input.filter((_, idx) => idx !== 0).sort((a, b) => a - b)

  console.log(result.map(String).join('\n'))
}

solution()