function solution(sizes) {
  // 2차원 배열을 비교해서 작은 수는 왼쪽, 큰 수는 오른쪽으로 정렬
  // 그 후에 w끼리, h끼리 비교해서 제일 큰수를 찾으면 될까?
  // 2차원 배열의 인덱스 0만 모아서 새로운 배열 만들고, 인덱스 1도 똑같이 진행

  let wArr = [];
  let hArr = [];
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
    for (let j = 0; j < sizes[i].length; j++) {
      wArr.push(sizes[i][0]);
      hArr.push(sizes[i][1]);
    }
  }
  let wMax = Math.max(...wArr);
  let hMax = Math.max(...hArr);
  return wMax * hMax;
}
