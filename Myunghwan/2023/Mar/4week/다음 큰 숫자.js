function solution(n) {
  // 1. n보다 큰 자연수

  // 2. n의 다음 큰 숫자와 n은 2진수로 변환했을때 1의 갯수가 같다
  // 2-2 toString(2)를 사용

  // 3. n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수다.

  let oneNum = n.toString(2).split('1').length;

  while (true) {
    n++;
    if (oneNum === n.toString(2).split('1').length) {
      return n;
    }
  }
}
