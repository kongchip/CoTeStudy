function solution(k, tangerine) {
  const obj = {};

  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });
  const value = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;

  for (let el of value) {
    answer++;
    sum += el;

    if (sum >= k) break;
  }

  return answer;
}
