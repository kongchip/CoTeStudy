const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = parseInt(fs.readFileSync(filePath).toString().trim())

const solution = () => {
  let result = factorial(input)

  console.log(result)

  function factorial(n) {
    if(n <= 1) return 1

    return n * factorial(n-1)
  }
}

solution()