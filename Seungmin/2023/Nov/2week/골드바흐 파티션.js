const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  input.shift()

  let result = ''
  
  //에라토스테네스의 체
  let maxnum = Math.max(...input)
  let check = Array(maxnum + 1).fill(false)

  for (let i = 2; i <= maxnum; i++) {
    if (!check[i]) {
      for (let j = i * i; j <= maxnum; j += i) {
        check[j] = true
      }
    }
  }

  input.forEach(el => {
    let count = 0

    for(let i = 2; i <= el / 2; i++) {
      if(!check[i] && !check[el - i]) count++
    }

    result += `${count}\n`
  })

  console.log(result)
}

solution()