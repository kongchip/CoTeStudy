const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim()


console.log(input.split("").map((el) => Number(el)).sort((a,b) => b-a).join(""))

