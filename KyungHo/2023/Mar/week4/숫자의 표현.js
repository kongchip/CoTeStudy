function solution(n) {
  if (n === 1) {
    return 1;
  }
  let answer = 1;
  let arr = Array.from({ length: Math.ceil(n / 2) }, (v, i) => i + 1);
  let startPoint = 0;
  let secondPoint = startPoint + 1;
  let endPoint = Math.ceil(n / 2);

  let count = arr[startPoint];
  while (secondPoint <= endPoint) {
    if (count === n) {
      answer++;
      count += arr[secondPoint];
      secondPoint++;
    } else if (count > n) {
      count -= arr[startPoint];
      startPoint++;
    } else {
      count += arr[secondPoint];
      secondPoint++;
    }
  }

  return answer;
}
