function solution(k, dungeons) {
  // 최소 피로도 : 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
  // 소모 피로도 : 던전을 탐험한 후 소모되는 피로도

  let answer = [];
  let visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
}
