function solution(n) {
  let result = 0;

  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum = sum + j;
      if (sum === n) {
        result++;
        break;
      } else if (sum > n) break;
    }
  }
  return result + 1;
}
