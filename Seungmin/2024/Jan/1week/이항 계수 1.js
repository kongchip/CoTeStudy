const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const solution = () => {  
  let [N, K] = input
  let result = factorial(N) / (factorial(N - K) * factorial(K))

  console.log(result)

  function factorial(n) {
    let answer = 1

    while(n > 1) {
      answer = answer * n

      n--
    }

    return answer
  }
}

solution()