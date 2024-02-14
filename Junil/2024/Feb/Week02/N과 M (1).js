let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 백트래킹: 완전탐색하며 틀린 노드를 처냄

// 1부터 N까지의 수열에서 M개를 고름

const [N, M] = input;

function getSequences(N, M) {
  const visited = Array(N + 1).fill(false);
  const sequence = []; // 수열

  function dfs(depth) {
    if (depth === M) {
      // M 만큼 도달하면
      console.log(sequence.join(" ")); // 수열을 로그찍고 dfs 종료
      return;
    }

    for (let i = 1; i <= N; i++) {
      // depth가 M에 도달하지 못했다면
      if (!visited[i]) {
        visited[i] = true;
        sequence.push(i); // depth의 visited 값을 갱신하고, 수열에 추가
        dfs(depth + 1); // 다음 숫자로 넘어감
        sequence.pop(); // 해당 노드의 모든 재귀함수의 호출이 끝나면 해당 depth(0)를 다른 후보군에서 쓸 수 있도록 이전에 추가한 수를 제거함
        visited[i] = false;
      }
    }
  }

  dfs(0);
}

getSequences(N, M);
