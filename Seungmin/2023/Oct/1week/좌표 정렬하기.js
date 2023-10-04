const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = ''

  input.filter((_, idx) => idx !== 0).map(el => el.split(' ').map(Number)).sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  }).forEach(coord => result += `${coord[0]} ${coord[1]}\n`)
  
  console.log(result)
}

solution()