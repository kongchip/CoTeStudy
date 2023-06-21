function solution(n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 2] % 1234567);
  }
  return dp[n] % 1234567;
}
