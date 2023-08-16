// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString()

// 1 ~ 7 까지 2번 6
// 8 ~ 19 까지 3번 12
// 20 ~ 37 까지 4번 18

let num = 1
let i = 1
while(num < Number(input)){
    num += 6 * i
    i++
}


console.log(i)