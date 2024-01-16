const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const solution = () => {
  let result, voca
  /** * key: 단어
   * * value: 단어가 나온 횟수
   */
  let map = new Map()
  let [N, M] = input.shift().split(' ').map(Number)

  // 1.사전순 정렬 -> 2.단어 길이로 내림차순 정렬
  input.sort().sort((a, b) => b.length - a.length)

  input.forEach(el => {
    // 단어 길이 안되면 처음부터 map에 포함하지 않음
    if(el.length < M) return

    if(map.has(el)) {
      map.set(el, map.get(el) + 1)
    } else {
      map.set(el, 1)
    }
  })

  // map객체를 2차원 배열화
  voca = [...map]

  // 3.자주 나오는 단어 내림차순 정렬
  voca.sort((a, b) => b[1] - a[1])

  result = voca.map(el => el[0])

  console.log(result.join('\n'))
}

solution()