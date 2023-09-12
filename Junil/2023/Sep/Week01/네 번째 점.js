// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim(' ').split('\n').map((el) => el.split(' ').map(Number))


// 받아온 2차원 배열에서 중복되지 않은 값만을 리턴해주면 될 듯
let hiddenX = 0
let hiddenY = 0


for (let i = 0; i < input.length; i++) {
    // 4번째 x값을 찾기
    let isUnique = true
    for (let j = 0; j < input.length; j++) {
        if (i !== j && input[i][0] === input[j][0]) {
            isUnique = false
            break
        }
    }
    if (isUnique) {
        hiddenX = input[i][0]
        break
    }
}

for (let i = 0; i < input.length; i++) {
    // 4번째 y값을 찾기
    let isUnique = true
    for (let j = 0; j < input.length; j++) {
        if (i !== j && input[i][1] === input[j][1]) {
            isUnique = false
            break
        }
    }
    if (isUnique) {
        hiddenY = input[i][1]
        break
    }
}

console.log(hiddenX, hiddenY)