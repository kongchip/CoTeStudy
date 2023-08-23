// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n')

let M = Number(input[0])
let N = Number(input[1])

let ans = []

function isPrime(number) {
    if (number <= 1) {
      return false
    }
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
}


for (let i = M ; i <= N; i++){
    if(isPrime(i)){
         ans.push(i)
    }
}

if(ans.length === 0) console.log(-1)

else {
    console.log(ans.reduce((a,b) => a + b , 0))
console.log(Math.min(...ans))
}
