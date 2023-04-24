function solution(arr1, arr2) {
  const row1 = arr1.length; // arr1의 행 길이
  const col1 = arr1[0].length; // arr1의 열 길이
  const col2 = arr2[0].length; // arr2의 열 길이

  // 결과를 저장할 2차원 배열 초기화
  const result = [];

  for (let i = 0; i < row1; i++) {
    result[i] = [];
    for (let j = 0; j < col2; j++) {
      result[i][j] = 0;
      for (let k = 0; k < col1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
