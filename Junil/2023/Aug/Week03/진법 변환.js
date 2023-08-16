// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ')

const N = input[0]
const B = input[1]

console.log(parseInt(N,B))