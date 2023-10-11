const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = ''

  input.shift()

  // 2차 배열화
  let arr = input.map(el => el.split(' '))

  // 나이로만 정렬하면 가입한 순서는 그대로 유지
  arr.sort((a, b) => Number(a[0]) - Number(b[0]))
  
  // 다시 1차 배열로 돌리고 result에 붙이기
  arr.map(el => el.join(' ')).forEach(item => result += `${item}\n`)

  console.log(result)
}

solution()