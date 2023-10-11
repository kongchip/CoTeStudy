const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim().split("\n").map((el) => el.split(' ').map(Number))

const N = input[0][0]
const M = input[0][1]

// N + x + x <= M


let ans = 0

for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            const sum = input[1][i] + input[1][j] + input[1][k];
            
            // M과의 차이가 현재까지 계산된 가장 작은 차이보다 작으면 업데이트
            if (sum <= M && M - sum < M - ans) {
                ans = sum;
            }
        }
    }
}

console.log(ans)