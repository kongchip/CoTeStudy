// const input = require("fs").readFileSync("/dev/stdin").toString().trim(' ').split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim(' ').split('\n').map((el) => el.split(' ').map(Number))

let ans = []

const uncount = input.pop()

for (let i = 0 ; i < input.length ; i++){
    const [ a , b , c ] = input[i]

    if (a + b <= c || a + c <= b || b + c <= a) {
        ans.push("Invalid")
    } else if (a === b && b === c) {
        ans.push("Equilateral")
    } else if (a === b || a === c || b === c) {
        ans.push("Isosceles")
    } else {
        ans.push("Scalene")
    }
}

console.log(ans.join('\n'))