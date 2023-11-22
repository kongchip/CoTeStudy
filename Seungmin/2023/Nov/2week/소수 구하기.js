const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  let result = ''
  let [M, N] = input

  for(let i = M; i <= N; i++) {
    if(isPrime(i)) result += `${i}\n`
  }

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