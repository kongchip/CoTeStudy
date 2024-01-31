const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

const solution = () => {
  function cantore(str) {
    if(str.includes('---')) {
      let len = str.length / 3
      let arr = []

      for(let i = 0; i <= str.length - len; i += len) {
        arr.push(str.substr(i, len))
      }

      arr[0] = cantore(arr[0])
      arr[1] = arr[1].replaceAll('-', ' ')
      arr[2] = cantore(arr[2])

      return arr.join('')
    }

    return str
  }

  let result = input.map(el => {
    let line = '-'.repeat(3**el)

    return cantore(line)
  })
  
  console.log(result.join('\n'))
}

solution()