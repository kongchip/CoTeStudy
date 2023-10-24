const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = []
  let [N, M] = input.shift().split(' ')
  let listen = new Set(input.splice(0, N))

  input.forEach(el => listen.has(el) && result.push(el))
  
  result.sort()

  console.log(`${result.length}\n${result.join('\n')}`)
}

solution()