// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require('fs').readFileSync(__dirname+'/2566.txt').toString().split('\n').map((el) => el.split(' ').map(Number))


let maxNum = 0
let col = 0

for (let i = 0 ; i < input.length; i++){
    if(maxNum < Math.max(...input[i])) {
        maxNum = Math.max(...input[i])
        col = i       
    }
}


let row = input[col].findIndex((el) => el === maxNum)



console.log(maxNum+"\n", col + 1 , row + 1)

