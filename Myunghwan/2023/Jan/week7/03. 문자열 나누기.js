function solution(s) {
  let answer = 0;
  let fixedChar = "";
  let cnt1 = 0;
  let cnt2 = 0;

  // 문자를 for of 문으로 하나씩 확인한다.
  for (let c of s) {

    // 첫 문자를 알아야하기 때문에
    // 미리 선언해둔 fixedChar이 공백이면
    // 첫 문자를 fixedChar에 넣어준다.
    if (!fixedChar) fixedChar = c;
    
    // 첫 문자와 들어온 c가 같다면 cnt1를 증가시킨다.
    if(fixedChar === c) cnt1++;
    // 첫 문자와 다르다면 cnt2를 증가시킨다.
    else cnt2++;

    // cnt1과 cnt2의 숫자가 같아지면
    // answer를 1 증가시키고 나머지를 초기화 한다.
    if (cnt1 === cnt2) {
        answer++;
        cnt1 = 0;
        cnt2 = 0;
        fixedChar = "";
    }
  }

  // 반복문이 끝났는데 fixedChar이 남아있는 경우는
  // 잔여 문자가 남아있는 경우이므로 answer을 1 증가시킨다.
  if (fixedChar) answer++;

  return answer;
}