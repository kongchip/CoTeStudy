const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {  
  let result = []

  input.shift()

  input.forEach(el => {
    let stack = []

    el.split('').forEach(ps => {
      let str = ps

      switch(str) {
        case '(' :
          stack.push('(')
          break

        case ')' :
          let leng = stack.length

          if(leng > 0 && stack[leng - 1] === '(') {
            stack.pop()
            break
          }

          stack.push(')')
      }
    })

    result.push(stack.length > 0 ? 'NO' : 'YES')
  })

  console.log(result.join('\n'))
}

solution()