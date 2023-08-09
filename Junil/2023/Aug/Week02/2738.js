// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require('fs').readFileSync(__dirname+'/2738.txt').toString().split('\n')

const N = input[0].split(' ')[0]
const M = input[0].split(' ')[1]

// curr + ( curr + N )
let ans = ""


for (let i = 1 ; i <= N ; i++){
    let startEls = input[i].split(' ')
    let plusEls = input[i + Number(N)].split(' ')

    for (let j = 0 ; j < M ; j++){
        ans += (Number(startEls[j]) + Number(plusEls[j])) + " "  
    }
    ans += "\n"
}

console.log(ans)