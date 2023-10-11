const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim().split("\n").map((el) => Number(el))


const avg = input.reduce((acc,cur) => acc + cur, 0) / input.length
const middle = input.sort()[(input.length - 1) / 2]

console.log(avg + '\n' + middle)