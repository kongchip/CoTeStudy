const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());

const disassemble = () => {
  let result;

  for (let i = 1; i < input; i++) {
    let sum = i;

    for (let j = 0; j<i.toString().length; j++) {
      sum += parseInt(i.toString()[j]);
    }

    if (sum === input) {
      result = i;
      break;
    }
  }

  console.log(result || 0);
}

disassemble()