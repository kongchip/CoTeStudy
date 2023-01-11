function solution(s) {
  // 앞에 순서를 체크하기 위한 객체 선언
  const charObj = {};
  const answer = [];

  // for문 맨 밑에 charObj에 순서를 넣는 것부터 보시면 이해가 잘 될 겁니다.
  for (let i = 0; i < s.length; i++) {
    // charObj를 확인합니다.
    if (charObj[s[i]] === undefined) {
      // charObj에 현재 들어온 문자가 없다면 -1을 푸쉬합니다.
      answer.push(-1);
    } else {
      // 만약 들어온 문자가 존재한다면 앞에 같은 글자가 있는 것이고 들어온 인덱스에서
      // charObj에 저장한 가장 가까운 같은 글자 순서를 뺸 값을 answer에 푸쉬해줍니다.
      answer.push(i - charObj[s[i]]);
    }

    // charObj에 현재 들어온 문자와 순서를 저장합니다.
    // ex) charObj = {}
    //     charObj = {"b": 0};
    charObj[s[i]] = i;
  }

  return answer;
}
