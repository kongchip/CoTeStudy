function solution(n) {
    // dfs 문제인듯 결국 모든 경우의 수를 계산해야 함 => 검색결과 피보나치 문제였음...
    // n = 1 => return 경우의 수 1개
    // n = 2 => return 경우의 수 2개 (이전 경우의 수 + 1)
    // n = 3 => return 경우의 수 3개 (이전 경우의 수 + 1)
    // n = 4 => return 경우의 수 5개 (이전 경우의 수 + 2)
    // n = 5 => return 경우의 수 8개 (이전 경우의 수 + 3) +5 +8 . . .
    // . . .
    return fibonacci(n)  
}

const fibonacci = (n) => {
    const dp = new Array(n+1).fill(0);

    dp[0] = 1  
    dp[1] = 1
  
  for(let i = 2; i <= n; i++) {
    dp[i] = (dp[i-2] + dp[i-1]) % 1000000007;
  }
  
  return dp[n];
}