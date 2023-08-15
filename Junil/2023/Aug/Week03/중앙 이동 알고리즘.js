// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString()

const N = Number(input)

let numberBefore = 2

for(let i = 0 ; i < N ; i++){
    numberBefore = numberBefore + Math.pow(2, i)
   
}



console.log(Math.pow(numberBefore , 2))