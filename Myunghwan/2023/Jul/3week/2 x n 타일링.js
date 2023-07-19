function solution(n) {
  // n = 1 -> 1
  // n = 2 -> 2
  // n = 3 -> 3
  // n = 4 -> 5
  // n = 5 -> 8
  // n = 6 -> 13
  // n = 7 -> 21
  // 1, 2, 3, 5, 8, 13, 21 ...
  // 피보나치
  if (n <= 1) {
    return 1;
  } else {
    return (solution(n - 1) + solution(n - 2)) % 1000000007;
  }
}
// 런타임 에러(1)

// 다이나믹 프로그래밍
// 0 1 1 2 3 5 ...

function solution(n) {
  let newArr = [1, 1];

  let fib = (n) => {
    if (newArr[n] !== undefined) {
      return newArr[n];
    }
    newArr[n] = (fib(n - 1) + fib(n - 2)) % 1000000007;
    return newArr[n];
  };

  return fib(n);
}
// 런타임 에러(2)

function solution(n) {
  let dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
}
