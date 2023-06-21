function solution(clothes) {
  const hash = {};

  for (let i = 0; i < clothes.length; i++) {
    const type = clothes[i][1];
    hash[type] = (hash[type] || 0) + 1;
  }

  let answer = 1;

  for (let key in hash) {
    answer *= hash[key] + 1;
  }

  return answer - 1;
}
