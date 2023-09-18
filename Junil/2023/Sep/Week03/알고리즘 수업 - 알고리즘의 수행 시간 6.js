const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim();

// let count = 0

// for (let i = 1 ; i <= Number(input) - 2; i++){
//     for (let j = i + 1 ; j <= Number(input) - 1; j++){
//         for (let k = j + 1 ; k <= Number(input) ; k++){
//             count++
//         }
//     }
// }

// console.log(count)
// console.log(3)

let n = Number(input)

console.log((n * ( n - 1 ) * ( n - 2 )) / 6)
console.log(3)
