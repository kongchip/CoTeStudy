function solution(n) {
    let dp = new Array(n + 1)

    dp[1] = 1
    dp[2] = 2

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    return dp[n]
}

// function solution(n) {
//   if (n === 1) {
//     return 1
//   } else if (n === 2) {
//     return 2
//   } else return solution(n-1) + solution(n-2)
// }


//포기 ㅠㅠ