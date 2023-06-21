function solution(want, number, discount) {
  let answer = 0;
  const isMatch = (discount) => {
    const wantMap = new Map();
    discount.forEach((d) => wantMap.set(d, (wantMap.get(d) || 0) + 1));
    for (let i = 0; i < want.length; i++) {
      // 총개수가 10개로 정해져있기 때문에 값이 크더라도 탈락시킵니다
      if (wantMap.get(want[i]) !== number[i]) return false;
    }
    return true;
  };
  for (let idx = 0; idx <= discount.length - 10; idx++) {
    const d = discount.slice(idx, idx + 10);
    if (isMatch(d)) answer++;
  }
  return answer;
}
