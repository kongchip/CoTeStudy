function solution(k, m, score) {
  const appleArr = [];
  let profit = 0;

  // 주어진 사과 배열 오름차순 정렬
  const sortedScore = score.sort((a, b) => a - b);

  // 한 상자에 들어가는 사과 수 대로 잘라서 배열에 넣어줌
  while (sortedScore.length >= m) {
    appleArr.push(sortedScore.splice(-m, m));
  }

  // 각 요소 배열의 최솟값과 한 상자에 들어가는 사과 수를 곱한 뒤, 모두 더해 최종 이익 산출
  for (const el of appleArr) {
    profit += Math.min(...el) * m;
  }
  return profit;
}
