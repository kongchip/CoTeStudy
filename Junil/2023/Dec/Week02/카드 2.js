let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

// 1 - 10
// drop 1 / 2,3,4,5,6,7,8,9,10
// back 2 / 3,4,5,6,7,8,9,10,2
// drop 3 / 4,5,6,7,8,9,10,2
// back 4 / 5,6,7,8,9,10,2,4
// drop 5 / 6,7,8,9,10,2,4
// back 6 / 7,8,9,10,2,4,6
// drop 7 / 8,9,10,2,4,6
// back 8 / 9,10,2,4,6,8
// drop 9 / 10,2,4,6,8
// back 10 / 2,4,6,8,10
// drop 2 / 4,6,8,10
// back 4 / 6,8,10,4
// drop 6 / 8,10,4
// back 8 / 10,4,8
// drop 10 / 4,8
// back 4 / 8,4
// drop 8 / 4
// 4 is the winner

// 규칙: N을 넘지않는 가장 큰 2의 제곱
function findWinner(N) {
  let powerOfTwo = 1;

  // 2의 제곱수를 찾음
  while (powerOfTwo * 2 <= N) {
    powerOfTwo *= 2;
  }

  // N이 2의 제곱수보다 크면 계산하고, 작으면 N이 정답
  if (N > powerOfTwo) {
    return (N - powerOfTwo) * 2;
  } else {
    return N;
  }
}

console.log(findWinner(N));
