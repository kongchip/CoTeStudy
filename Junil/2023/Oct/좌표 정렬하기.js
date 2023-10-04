const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim().split("\n").map((el) => el.split(' ').map(Number))

const N = input.shift()

// sort로 X 좌표값이 다를 때

console.log(input.sort((a,b) => {
    if(a[0] !== b[0]){
        return a[0] - b[0]
    } else {
        return a[1] - b[1]
    }
}).map((el) => el.join(' ')).join('\n'))