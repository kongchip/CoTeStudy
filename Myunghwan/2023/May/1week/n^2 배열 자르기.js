function solution(n, left, right) {
  let answer = [];

  while (left <= right) {
    answer.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }
  return answer;
}
