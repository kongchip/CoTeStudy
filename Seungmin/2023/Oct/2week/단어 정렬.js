const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = ''

  input.shift()

  // 중복 제거
  let newArr = [...new Set(input)]

  // 사전순으로 정렬 후 단어길이로 다시 정렬
  newArr.sort().sort((a, b) => a.length - b.length)

  newArr.forEach(el => result += `${el}\n`)
  
  console.log(result)
}

solution()