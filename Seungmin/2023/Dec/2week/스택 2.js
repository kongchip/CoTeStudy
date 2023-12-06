const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' '));

const solution = () => {  
  let result = [], stack = []

  input.shift()

  input.forEach(el => {
    let command = el[0]

    switch(command) {
      case '1' :
        stack.push(el[1])
        break
      case '2' :
        result.push(stack.length > 0 ? stack.pop() : '-1')
        break
      case '3' :
        result.push(stack.length)
        break
      case '4' :
        result.push(stack.length > 0 ? '0' : '1')
        break
      case '5' :
        result.push(stack.length > 0 ? stack[stack.length - 1] : '-1')
        break
    }
  })

  console.log(result.join('\n'))
}

solution()