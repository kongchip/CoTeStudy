let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

function fibonacci(n) {
  // 기본 케이스: n이 0 또는 1인 경우
  if (n <= 1) {
    return n;
  }

  // 재귀 케이스: n-1과 n-2에 대한 피보나치 수를 더함
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(input));
