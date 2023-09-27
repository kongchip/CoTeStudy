const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());

const solution = () => {
  let count = 1, num = 666

  while (input !== count) {
    num++

    if (num.toString().includes('666')) {
      count++
    }
  }

  console.log(num)
}

solution()