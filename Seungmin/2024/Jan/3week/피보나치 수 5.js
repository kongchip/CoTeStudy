const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = parseInt(fs.readFileSync(filePath).toString().trim())

const solution = () => {
  let result = fibonacci(input)

  console.log(result)

  function fibonacci(n) {
    if(n <= 1) return n

    return fibonacci(n-1) + fibonacci(n-2)
  }
}

solution()