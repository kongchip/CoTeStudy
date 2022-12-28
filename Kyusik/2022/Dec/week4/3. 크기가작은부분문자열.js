function solution(t, p) {
  let resultArr = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    const slicedStr = t.slice(i, i + p.length);
    if (slicedStr <= p) {
      resultArr.push(slicedStr);
    }
  }
  return resultArr.length;
}
