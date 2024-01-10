const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const solution = () => {
  let result = 0
  let set = new Set()
  
  input.shift()

  input.forEach((el, idx) => {
    if(el === 'ENTER') {
      result = result + set.size
      set.clear()
    } else {
      set.add(el)
    }

    if(idx === input.length - 1) {
      result = result + set.size
    }

  })

  console.log(result)
}

solution()