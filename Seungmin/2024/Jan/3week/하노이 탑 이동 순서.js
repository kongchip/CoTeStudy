const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = parseInt(fs.readFileSync(filePath).toString().trim())

const solution = () => {
  let count = 0
  let arr = []

  function hanoi(num, from, other, to) {
    if(!num) return

    hanoi(num - 1, from, to, other)
    arr.push([from, to])
    count++

    hanoi(num - 1, other, from, to)
  } 

  hanoi(input, 1, 2, 3)

  let result = arr.map(el => el.join(' ')).join('\n')

  console.log(`${count}\n${result}`)
}

solution()
