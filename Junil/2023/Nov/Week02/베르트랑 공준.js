let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.pop();

let ans = [];

function sieveOfEratosthenes(M, N) {
  let count = 0;
  const isPrime = Array(N + 1).fill(true);

  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = M; i <= N; i++) {
    if (isPrime[i]) {
      count++;
    }
  }
  ans.push(count);
}

input.map(n => sieveOfEratosthenes(n + 1, n * 2)); // n 보다 크고

console.log(ans.join("\n"));
