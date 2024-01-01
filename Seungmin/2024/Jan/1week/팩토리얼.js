const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = parseInt(fs.readFileSync(filePath).toString().trim())

const solution = () => {  
  let result = 1

  while(input >= 1) {
    result = result * input
    
    input--
  }

  console.log(result)
}

solution()