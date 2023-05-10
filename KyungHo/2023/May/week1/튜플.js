/*
셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소돌의 모음을 튜플이라고 한다.
n개의 요소를 가진 튜플을 n-튜플이라고하며, 다음과 같이 표현이 가능하다.
{a1,a2,a3 ...,an}
성질은 다음과 같다.
1. 중복된 원소가 있을 수 있다. (2,3,1,2)
2. 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플이다. (1,2,3) !== (1,3,2)
3. 튜플의 원소 개수는 유한하다. ( 정해져있다. )
4. 원소의 개수가 n개이고, 중복되는 원소가 없는 튜플이 주어질 때(전부 자연수) 다음과 같은 집합 기호를 이용해 표현할 수 있다.
5. {{a1}, {a1,a2}, {a1,a2,a3}, {a1,a2,a3,a4}... }
   예를 들어 튜플이 (2,1,3,4)인 경우 이는 {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
   순서는 바뀌어도 상관이 없다.

특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 리턴하라.
*/

function solution(s) {
  let answer = [];
  let tuple = s.slice(1, s.length - 1);
  let stack = [];
  let flag = false;
  let idx = 0;
  let char = "";
  while (idx < tuple.length) {
    if (tuple[idx] === "{") {
      flag = true;
      idx++;
      continue;
    }
    if (tuple[idx] === "}") {
      flag = false;
      stack.push(char);
      char = "";
      answer.push(stack.map((v) => Number(v)));
      stack = [];
      idx++;
      continue;
    }

    if (flag && tuple[idx] !== ",") {
      char += tuple[idx];
    } else if (flag && tuple[idx] === ",") {
      stack.push(char);
      char = "";
    }
    idx++;
  }
  let result = [];
  answer
    .sort((a, b) => a.length - b.length)
    .filter((v) => {
      v.map((vs) => {
        result.indexOf(vs) === -1 && result.push(vs);
      });
    });

  return result;
}
