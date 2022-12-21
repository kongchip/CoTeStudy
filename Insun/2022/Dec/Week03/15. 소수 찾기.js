function solution(n) {
  // 소수이면 true, 소수가 아니면 false인 식으로 작성 후 true의 수 구하기
  let arr = Array(n + 1).fill(true); // index 0이 있으니 n+1로 새 배열 만들기
  arr[0] = false;
  arr[1] = false;
  // 0과 1은 소수가 아님

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter(Boolean).length;
}
