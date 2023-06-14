function solution(n, t, m, p) {
  const max = (t - 1) * m + p;
  // t까지 나타내기위한 최대 길이.
  // ex) m = 2, p = 1일 경우, 4번째까지 말하기 위해선 7개의 문자열이 필요
  let str = '';
  let number = 0;
  while (str.length < max) {
    str += (number++).toString(n);
    // number = 0 ~ x, 문자열길이까지 늘려가며 구함.
    // number.toString(n), number를 n진법으로 변환하여 string으로 나타내는 함수.
  }
  // str = '011011100'이 저장되어 있는 상태(숫자 0 ~ 4)

  return (
    str
      .split('')
      .filter((v, i) => i <= max && i % m === p - 1)
      // x번째 숫자까지 들어가있기때문에 원하는 길이까지만 p번째 문자열을 filter.
      .join('')
      .toUpperCase()
  );
}
