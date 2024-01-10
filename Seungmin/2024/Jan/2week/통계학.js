const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

const solution = () => {
  let result = []
  let length = input.shift()

  input.sort((a, b) => a - b)

  // 평균
  let avg = input.reduce((acc, cur) => acc + cur) / length
  result.push(Math.round(avg))

  // 중앙값
  let median = input[Math.floor(length / 2)]
  result.push(median)

  // 최빈값
  /** * key: 숫자
   * * value: 빈도 */
  let map = new Map()
  let modeArr = []
  
  input.forEach(el => {
    if(map.has(el)) {
      map.set(el, map.get(el) + 1)
    } else {
      map.set(el, 1)
    }
  })

  let most = Math.max(...map.values())
  map.forEach((val, key) => {
    if(val === most) modeArr.push(key)
  })

  modeArr.sort((a, b) => a - b)
  result.push(modeArr.length === 1 ? modeArr[0] : modeArr[1])

  // 범위
  let range = input[length - 1] - input[0]
  result.push(range)

  console.log(result.join('\n'))
}

solution()