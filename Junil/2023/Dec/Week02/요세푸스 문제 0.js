let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

// 1,2,3,4,5,6,7 => 3,6,2,5,1,4

function josephusPermutation(N, K) {
  const result = [];
  const queue = [];

  // 초기에 1부터 N까지의 숫자를 큐에 넣음
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    // K-1번째까지의 숫자는 큐의 뒤로 이동
    for (let i = 0; i < K - 1; i++) {
      const front = queue.shift();
      queue.push(front);
    }

    // K번째 숫자를 결과에 추가하고 큐에서 제거
    const removed = queue.shift();
    result.push(removed);
  }

  return `<${result.join(", ")}>`;
}

console.log(josephusPermutation(N, K));
