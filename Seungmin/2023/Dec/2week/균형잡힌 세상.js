const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {  
  let result = []

  input.shift()

  input.forEach(el => {
    let stack1 = [], stack2 = []

    el.split('').forEach(ps => {
      let str = ps

      switch(str) {
        case '(' :
          stack1.push('(')
          break

        case ')' :
          if(stack1.length > 0 && stack1[stack1.length - 1] === '(') {
            stack1.pop()
            break
          }

          stack1.push(')')
          break

        case '[' :
          stack2.push('[')
          break

        case ']' :
          if(stack2.length > 0 && stack2[stack2.length - 1] === '[') {
            stack2.pop()
            break
          }

          stack2.push(']')
          break
      }
    })

    result.push(stack1.length === 0 && stack2.length === 0 ? 'yes' : 'no')
  })

  console.log(result.join('\n'))
}

solution()