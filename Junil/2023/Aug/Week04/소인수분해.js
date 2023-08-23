// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString()

function primeFactors(n) {
    const factors = []
    
    // 2로 나누어 떨어지는 동안 계속 2를 추가하고 나눕니다.
    while (n % 2 === 0) {
      factors.push(2)
      n = n / 2
      factors.push('\n')
    }
    
    // 3부터 제곱근까지의 홀수로 나누어 떨어지는 동안 계속 나눕니다.
    for (let i = 3; i * i <= n; i += 2) {
      while (n % i === 0) {
        factors.push(i)
        n = n / i
        factors.push('\n')
      }

    }
    
    // 남은 수가 소수인 경우
    if (n > 2) {
      factors.push(n)
      factors.push('\n')
    }
    
    return factors
}


console.log(primeFactors(Number(input)).join(''))