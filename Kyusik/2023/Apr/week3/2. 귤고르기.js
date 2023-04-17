function solution(k, tangerine) {
  const obj = {};

  //빈도수 세기 패턴
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });
  // 결과 ex) { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2}

  // value 값만 추출 후, 정렬
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
