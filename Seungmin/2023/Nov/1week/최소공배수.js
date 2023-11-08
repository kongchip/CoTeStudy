const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 유클리드 호제법 -> 최대공약수 구하는 알고리즘
// A % B = C
// B % C = D
// 나머지가 0이 될 때까지 반복해서, 0이 된 시점의 피연산자가 최대공약수
// 최소공배수(LCM) = 두 인수의 곱을 최대공약수(GCD)로 나눈 값

const solution = () => {
  let result = ''

  input.shift()

  let arr = input.map(el => el.split(' ').map(Number))

  arr.forEach(el => {
    let a = Math.max(...el)
    let b = Math.min(...el)

    let lcm = (a * b) / gcd(a, b)
  
    result += `${lcm}\n`
  })
  
  console.log(result)

  function gcd(a, b) {
    let remain
  
    while(b) {
      remain = a % b
      a = b
      b = remain
    }
  
    return a
  }
}

solution()