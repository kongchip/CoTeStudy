const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim()

const solution = () => {
  let setObj = new Set()

  for(let i = 0; i < input.length; i++) {
    for(let j = i+1; j <= input.length; j++) {
      let str = input.substring(i, j)

      setObj.add(str)
    }
  }
  
  console.log(setObj.size)
}

solution()