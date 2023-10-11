const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim().split("\n").map((el) => el.split(' ').map(Number))

console.log(input[1].sort((a,b) => b - a)[input[0][1] - 1])