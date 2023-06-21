function solution(n) {
  if (n === 2) {
    return 1;
  }

  let fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 1] % 1234567) + (fibo[i - 2] % 1234567);
  }

  return fibo[n] % 1234567;
}
