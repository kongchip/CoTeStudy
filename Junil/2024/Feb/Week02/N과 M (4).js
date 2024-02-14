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
  const sequence = [];

  function dfs(depth, start) {
    if (depth === M) {
      console.log(sequence.join(" "));
      return;
    }

    for (let i = start; i <= N; i++) {
      sequence.push(i);
      dfs(depth + 1, i);
      sequence.pop();
    }
  }

  dfs(0, 1);
}

getSequences(N, M);
