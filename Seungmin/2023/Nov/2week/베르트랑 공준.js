const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  let result = ''

  input.pop()

  input.forEach(el => {
    let count = 0

    for(let i = el + 1; i <= 2 * el; i++) {
      if(isPrime(i)) count++
    }

    result += `${count}\n`
  })

  console.log(result)

  // 소수 판별 함수
  function isPrime (n) {
    let sqrt = Math.sqrt(n)

    if(n < 2) return false

    for(let i = 2; i <= sqrt; i++) {
      if(n % i === 0) {
        return false
      }
    }

    return true
  }
}

solution()