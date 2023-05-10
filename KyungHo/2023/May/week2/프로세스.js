/*
문제 요약
1. 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄한다.
2. 중요한 문서가 나중에 인쇄될 수 있다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했다.
3. 동작방식은 다음과 같다.
 3-1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼낸다.
 3-2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
 3-3. 그렇지 않으면 J를 인쇄합니다.
4. 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 대, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 함수를 작성하라.

제한사항
1. 현재 대기목록에는 1개 이상 100개 이하의 문서가 있다.
2. 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻이다.
3. location은 0이상 (현재 대기목록에 있는 작업 수 -1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
*/

function solution(priorities, location) {
  let answer = 0;
  let copyPri = Array(priorities.length)
    .fill(false)
    .map((_, idx) => {
      return idx === location ? true : _;
    });

  let idx = 0;
  while (priorities.length !== 0) {
    if (priorities[idx] >= Math.max(...priorities)) {
      priorities = priorities.slice(1);
      copyPri = copyPri.slice(1);
      if (copyPri.indexOf(true) === -1) {
        answer++;
        break;
      } else {
        answer++;
      }
    } else {
      priorities = [...priorities.slice(1), ...priorities.slice(0, 1)];
      copyPri = [...copyPri.slice(1), ...copyPri.slice(0, 1)];
    }
  }

  return answer;
}
