const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = ''
  let mapObj = new Map()

  input[1].split(' ').forEach(el => {
    mapObj.has(el) ? mapObj.set(el, mapObj.get(el) + 1) : mapObj.set(el, 1)
  })

  input[3].split(' ').forEach(el => result += ` ${mapObj.get(el) || 0}`)

  console.log(result.trim())
}

solution()