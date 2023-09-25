function solution(msg) {
  // 미리 알파벳을 선언한다.
  const words = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let before = '';
  const answer = [];

  // 들어온 msg를 하나씩 체크한다.
  for (let i = 0; i < msg.length; i++) {
    // before 변수에 msg를 하나씩 더한다.
    // 문자열 더하기이기 때문에 문자가 하나씩 붙는다.
    before += msg[i];

    // 막약 before가 미리 정의해둔 알파벳에 없으면
    if (!words.includes(before)) {
      // 새로 들어온 문자 전 까지의 문자열(사전에 있는 문자)의
      // 인덱스를 구해서 1을 더하고 answer에 넣어준다.

      // 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
      // w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
      answer.push(words.indexOf(before.slice(0, -1)) + 1);

      // 새로운 단어를 사전에 등록한다.
      words.push(before);

      // 현재 입력된 문자부터 다시 시작한다.
      before = msg[i];
    }
  }

  // 위의 과정을 거친 뒤 before가 남아있다면.
  // 사전에 있는 단어가 걸러지지 못한 것 이므로
  // 사전에서 인덱스를 찾고 1을 더한 뒤 넣어준다.
  if (before) answer.push(words.indexOf(before) + 1);
  return answer;
}
