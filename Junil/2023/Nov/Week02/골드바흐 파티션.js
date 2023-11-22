let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

// 크기가 n인 소수 배열 생성
function sieveOfEratosthenes(limit) {
  const primes = new Array(limit + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

function goldbachPartitionsCount(n, primes) {
  let count = 0;

  // 두 소수중 하나는 무조건 0.5n 이상일 수 없음 ( 4 + 6, 3 + 7 , 2 + 8 )
  for (let i = 2; i <= n / 2; i++) {
    if (primes[i] && primes[n - i]) {
      count++;
    }
  }

  return count;
}

input.map(n => console.log(goldbachPartitionsCount(n, sieveOfEratosthenes(n))));
