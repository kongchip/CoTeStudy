function solution(s) {
  // s[i]와 s[i+1]을 비교후 두개가 일치하면 제거
  // -> 새로운 배열(arr)을만든후 비교해가며 일치할때마다 arr의 요소를 제거 (pop 사용)
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] === s[i]) {
      arr.pop();
    } else arr.push(s[i]);
  }
  return !arr.length ? 1 : 0;
}
