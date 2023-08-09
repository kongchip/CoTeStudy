// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/2563.txt').toString().split('\n')


const [paperCount, ...paperDetail] = input

console.log(paperCount, paperDetail)