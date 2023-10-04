const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const solution = () => {
  let result = input.map(Number).sort((a, b) => b - a).join('')

  console.log(result)
}

solution()