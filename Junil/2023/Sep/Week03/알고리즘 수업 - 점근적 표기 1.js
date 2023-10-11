const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim().split('\n').map((el) => el.split(' ').map(Number))


let a1 = input[0][0]
let a0 = input[0][1]
let c = input[1][0]
let n = input[2][0]

if( a1 * n + a0 <= c * n) console.log( 1 )

else console.log( 0 )

// let a1 = input[0][0]
// let a0 = input[0][1]
// let c = input[1][0]
// let n = input[2][0]



// function fn(a1, a0, n){
//     return a1 * n + a0
// }

// function getAnswer(a1,a0,c,n){
//     for (let i = n; ; i++) {
//         if (fn(a1, a0, i) > c * i) {
//             return 0; // O(n) 정의를 만족하지 않음
//         }
//         if (i > 1000) {
//             return 1; // n이 너무 크면 종료 (정답으로 간주)
//         }
//     }
// }

// const result = getAnswer(a1, a0, c, n);
// console.log(result);
