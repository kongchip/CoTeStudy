const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim()

// 분해합 216 = 생성자 198 + 생 1 + 성 9 + 자 8

const sum = Number(input)

let ans = 0


for (let i = 0 ; i <= sum ; i++){
    const 생성자 = i.toString().split('').map((el) => Number(el)).reduce((acc, cur) => acc + cur, 0)

    if(i + 생성자 === sum){
        ans = i

        break

    }

}

if(ans){console.log(ans)}  
else console.log(0)