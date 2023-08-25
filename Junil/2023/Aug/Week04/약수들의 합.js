// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n')

function isPerfect(number){
    let totalDivisor = 1
    for (let i = 2; i * i <= number; i++){
        if (number % i === 0) {
            if (i !== number / i) { // 같은 수를 중복해서 더하지 않기 위해 확인
                totalDivisor += i
            }
            totalDivisor += number / i
        }
    }
    return totalDivisor === number
}

function getDivisors(number) {
    const divisors = []

    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        divisors.push(i)
      }
    }
  
    return divisors
}


for (let i = 0 ; i < input.length - 1; i++){
    if(isPerfect(Number(input[i]))){
        const divisors = getDivisors(Number(input[i]))
        console.log(`${input[i]} = ${divisors.join(' + ')}`)
    } else {
        console.log(`${input[i]} is NOT perfect.`)
    }
}

