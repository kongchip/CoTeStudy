const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim().split("\n")


input.shift()

console.log(input.sort((a,b) => a - b).map((el) => el += '\n').join(""))


