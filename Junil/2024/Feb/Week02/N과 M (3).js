let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

function getSequences(N, M) {
  const result = [];

  function dfs(depth, sequence) {
    if (depth === M) {
      result.push(sequence.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      dfs(depth + 1, sequence.concat(i)); // 새로운 수열을 생성하여 재귀 호출
    }
  }

  dfs(0, []);

  console.log(result.join("\n"));
}

getSequences(N, M);
