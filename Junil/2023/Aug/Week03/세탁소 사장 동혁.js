// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n')

const N = input[0]


let arr = new Array(Number(N))

for(let i = 0 ; i < arr.length; i++){
    arr[i] = new Array(4).fill(0)
}

for(let i = 0 ; i < N ; i++){
    let remain = input[i + 1]

    arr[i][0] = Math.floor(remain / 25)
    remain = remain - arr[i][0] * 25
    
    arr[i][1] = Math.floor(remain / 10)
    remain = remain - arr[i][1] * 10

    arr[i][2] = Math.floor(remain / 5)
    remain = remain - arr[i][2] * 5

    arr[i][3] = Math.floor(remain / 1)

    arr[i][4] = "\n"
}


console.log(arr.join('').replaceAll(',', ' '))