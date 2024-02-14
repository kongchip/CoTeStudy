const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const solution = () => {
  // N: 범위, M: 원소 개수
  let [N, M] = input
  let seq = Array(M).fill(0)
  let visited = Array(N).fill(false)
  let result = ''

  function dfs(k, start) {
    if(k === M) {
      let arr = []
      for(let i = 0; i < M; i++) {
        arr.push(seq[i])
      }

      return result += `${arr.join(' ')}\n`
    }

    for(let i = start; i <= N; i++) {
      if(!visited[i]) {
        seq[k] = i
        visited[i] = true
        dfs(k+1, i)
        visited[i] = false
      }
    }
  }

  dfs(0, 1)
  console.log(result)
}

solution()