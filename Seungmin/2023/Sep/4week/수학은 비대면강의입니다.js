const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  let x, y;

  // a = 0 이면서 d != 0
  if (input[0] === 0 && input[3] !== 0) {
    y = input[2] / input[1]
    x = (input[5] - (input[4] * y)) / input[3]
  }
  // 조건이 더 있어야 될 것 같았지만 통과되서 당황...
  else {
    // y = af - cd / ae - bd
    y = ((input[0] * input[5]) - (input[2] * input[3])) / ((input[0] * input[4]) - (input[1] * input[3]))
    
    // x = (c - by) / a
    x = (input[2] - (input[1] * y)) / input[0]
  }

  console.log(`${x} ${y}`);
}

solution()