// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString()


// 지그재그 

// 1, 2, 6, 7, 15, 16, 28, 29

// 분모가 홀수면 N은 짝수 분모가 짝수면 N은 홀수

let X = Number(input)
let n = 1;


while (X > n) {

    X -= n

    n++
}

if (n % 2 === 0) {
    console.log(`${X}/${n - X + 1}`)
    } else {
    console.log(`${n - X + 1}/${X}`)
}


