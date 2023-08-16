// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim(' ').split(' ')

let A = Number(input[0])
let B = Number(input[1])
let V = Number(input[2])

// let days = 0
// let temp = 0

// while(temp < V){
//     temp += A;

//     if (temp >= V) {
//         break;
//     }

//     temp -= B;
//     days++;
// }

// days++


const days = Math.ceil((V - B) / (A - B))

console.log(days)