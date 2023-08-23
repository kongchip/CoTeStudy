// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ')

let N = Number(input[0])
let K = Number(input[1])



const divisors = []

for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      divisors.push(i)
    }
  }


if (K <= divisors.length) {
    console.log(divisors[K - 1])
  } else {
    console.log(0)
  }


