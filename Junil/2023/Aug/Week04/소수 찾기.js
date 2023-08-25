// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n')

const N = input[0]
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

console.log(input[1].split(' ').filter((el) => isPrime(el)).length)