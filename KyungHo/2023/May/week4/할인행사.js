function solution(want, number, discount) {
  let answer = 0;
  let user = {};

  for (let i = 0; i < want.length; i++) {
    user[want[i]] = number[i];
  }
  let copyObj = { ...user };
  let start = 0;
  let last = 10;
  while (last <= discount.length) {
    discount.slice(start, last).map((v) => {
      if (copyObj[v]) copyObj[v] -= 1;
    });
    Object.values(copyObj).reduce((a, b) => a + b) === 0 && answer++;
    copyObj = { ...user };
    start++;
    last++;
  }
  return answer;
}
