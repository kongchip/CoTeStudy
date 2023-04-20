function solution(n) {
  const dp = [0, 1, 2]; // 초기값 설정

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}
