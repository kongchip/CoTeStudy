const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim();


// console.log(Math.pow(input, 3))
// console.log(3)

let num = BigInt(Number(input));

console.log(`${num * num * num}`)
console.log(3)