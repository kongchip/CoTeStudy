const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim()


const N = Number(input)

// 5bags
let sugar5kg = Math.floor(N / 5)
let sugar3kg = 0

// 3kg
let leftover = N - sugar5kg * 5


// while(leftover > 0){
//     sugar3kg++
//     leftover -= 3
// }

// if(leftover === 0){
//     console.log(sugar3kg + sugar5kg)
// } else console.log(-1)

while (sugar5kg >= 0){
    if(leftover % 3 === 0){
        sugar3kg = leftover / 3
        
        console.log(sugar3kg + sugar5kg)
        break
    }

    sugar5kg--
    leftover += 5
}

if (sugar5kg < 0){
    console.log(-1)
}