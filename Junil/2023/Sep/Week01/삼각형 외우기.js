// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim(' ').split('\n').map((el) => el.split(' ').map(Number))

const [[angle1], [angle2], [angle3]] = input

const sum = angle1 + angle2 + angle3

if (sum !== 180) console.log("Error")

else if (angle1 === 60 && angle2 === 60 && angle3 === 60) console.log("Equilateral")

else if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) console.log("Isosceles")

else console.log('Scalene')