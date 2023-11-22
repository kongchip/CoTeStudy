let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split(" ");

const [M, N] = input;

function sieveOfEratosthenes(M, N) {
  // 배열 초기화
  const isPrime = Array(N + 1).fill(true);

  // 0과 1은 소수가 아님
  isPrime[0] = isPrime[1] = false;

  // 에라토스테네스의 체 알고리즘
  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 결과 출력
  for (let i = M; i <= N; i++) {
    if (isPrime[i]) {
      console.log(i);
    }
  }
}

sieveOfEratosthenes(+M, +N);
