const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' ').map(Number))

const solution = () => {  
  let result = []

  input.shift()

  input.forEach(el => {
    let [N, M] = el
    let combination = factorial(M) / (factorial(M - N) * factorial(N))

    result.push(Math.round(combination))
  })

  console.log(result.join('\n'))

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