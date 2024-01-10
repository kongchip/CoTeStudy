const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' '))

const solution = () => {
  let result = 0
  let set = new Set()

  set.add('ChongChong')
  input.shift()

  // 춤 추는 사람을 set에 추가
  // el[0], el[1] 중 하나라도 set에 있다면 set에 추가
  input.forEach(el => {
    if(set.has(el[0]) || set.has(el[1])) {
      set.add(el[0])
      set.add(el[1])
    }
  })

  console.log(set.size)
}

solution()