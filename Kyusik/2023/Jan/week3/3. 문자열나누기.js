function solution(s) {
  let answer = 0;
  let str = s.slice();
  let i = 1;
  let firstWord = 1;
  let others = 0;

  while (str.length) {
    // 첫번째 문자와 i번째 문자 비교해서 각각 카운트
    if (str[0] === str[i]) {
      firstWord++;
    } else {
      others++;
    }

    // 첫번째 문자의 카운트와 다른 문자의 카운트가 같다면 answer에 ++ 해주고, 거기까지의 문자열을 잘라냄.
    if (firstWord === others) {
      answer++;
      str = str.slice(i + 1);
      i = 0;
    } else {
      // 첫번째 문자의 카운트와 다른 문자의 카운트가 같지않다면 다음문자로 진행하기위해 i++
      i++;
    }
  }

  return answer;
}
