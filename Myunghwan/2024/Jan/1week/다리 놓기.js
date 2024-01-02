const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 규칙
// dp[1][1] = 1, dp[2][1] = 0, dp[3][1] = 0
// dp[1][2] = 2, dp[2][2] = 1, dp[3][2] = 0
// dp[1][3] = 3, dp[2][3] = 3, dp[3][3] = 1
// dp[1][4] = 4, dp[2][4] = 6, dp[3][4] = 4
// dp[1][5] = 5, dp[2][5] = 10, dp[3][5] = 10
//  --------
// dp[3][5] = dp[2][4] + dp[2][3] + dp[2][2] + dp[2][1]
// dp[2][5] = dp[1][4] + dp[1][3] + dp[1][2] + dp[1][1]

// dp[N][M] = dp[N-1][M-1] + dp[N-1][M-2] ... + dp[N-1][1]
let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].split(' '));
}

soultion(inputArr);
function soultion(inputArr) {
  let answer = [];
  inputArr.map((el) => {
    const n = +el[0];
    const m = +el[1];
    const memo = Array.from(Array(30), () => Array(30).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        if (j === i) {
          memo[i][j] = 1;
        } else if (i === 1) {
          memo[i][j] = j;
        } else {
          let temp = 0;
          for (let k = 1; k < j; k++) {
            temp += memo[i - 1][k];
          }
          memo[i][j] = temp;
        }
      }
    }
    answer.push(memo[n][m]);
  });
  console.log(answer.join('\n'));
}
