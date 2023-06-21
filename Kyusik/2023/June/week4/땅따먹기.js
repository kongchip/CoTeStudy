/*
dp를 활용해 풀어야 한다.
1행은 그대로.
1 2 3 5
2행은 1행에서 자기 열을 제외한 최댓값으로.
-> 1행의 최댓값이면서, 자기 열이 아니여야함.
만약 자기열일 경우, 그 수를 제외한 다른 최댓값을 찾아 더해주기.
10 11 12 11
3행은 2행에서 자기 열을 제외한 최댓값으로.
16 15 14 12
--> 16이 최댓값
*/
function solution(land) {
  let answer = 0;

  // 최댓값 구하는 함수
  function max(arr1, arr2, arr3) {
    return Math.max(Math.max(arr1, arr2), arr3);
  }

  // for문을 돌면서 2번째 행부터 1번째 행의 자기 열을 제외한 수 중 최댓값을 더해서 저장하기.
  for (let i = 1; i < land.length; i++) {
    land[i][0] += max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += max(land[i - 1][1], land[i - 1][3], land[i - 1][0]);
    land[i][3] += max(land[i - 1][1], land[i - 1][2], land[i - 1][0]);
  }

  answer = Math.max(...land[land.length - 1]);

  return answer;
}
