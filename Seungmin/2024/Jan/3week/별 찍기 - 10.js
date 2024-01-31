const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = parseInt(fs.readFileSync(filePath).toString().trim())

const solution = () => {
  let arr = Array(input)

  for(let i = 0; i < arr.length; i++) {
    arr[i] = Array(input).fill('*')
  }

  function punching(num, x, y) {
    if(num === 1) return

    let center = num / 3

    if(center < 3) center = 1

    let start = center - center
    let last = center + center

    for(let i = center; i < last; i++) {
      for(let j = center; j < last; j++) {
        arr[i + x][j + y] = ' '
      }
    }

    punching(center, start + x, start + y)
    punching(center, start + x, center + y)
    punching(center, start + x, last + y)
    punching(center, center + x, start + y)
    punching(center, center + x, last + y)
    punching(center, last + x, start + y)
    punching(center, last + x, center + y)
    punching(center, last + x, last + y)
  }

  punching(input, 0, 0)

  let result = arr.reduce((answer, row) => answer += row.join('') + '\n', '')

  console.log(result)
}

solution()