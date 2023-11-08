const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  let result = 0
  let gap = []

  input.shift()

  // 가로수 간격을 담은 배열
  input.forEach((el, idx) => {
    let nextEl = input[idx+1]
    
    if(nextEl) gap.push(nextEl - el)
  })

  // 간격의 최대공약수
  let gcd
  gap.forEach((el, idx) => {
    if(idx % 2 === 1) return

    gcd = getGcd(el, gcd || gap[idx+1])
  })

  // 각 간격마다 심어야 하는 가로수 누적
  gap.forEach(el => result += (el / gcd) - 1)

  console.log(result)

  // 최대공약수 구하는 함수
  function getGcd(a, b) {
    let remain

    if(a < b) {
      let temp = a

      a = b
      b = temp
    }
  
    while(b) {
      remain = a % b
      a = b
      b = remain
    }
  
    return a
  }
}

solution()