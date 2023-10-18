const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = ''

  // 시간초과로 배열을 Set객체로 수정
  let setN = new Set(input[1].split(' ').map(Number))
  let arrM = input[3].split(' ').map(Number)

  arrM.forEach(el => setN.has(el) ? result += `${1} ` : result += `${0} `)

  console.log(result.trim())
}

solution()