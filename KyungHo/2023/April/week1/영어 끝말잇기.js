/*
1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있다. 규칙은 다음과 같다.
1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말한다.
2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작한다.
3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다.
4. 이전에 등장했던 단어는 사용할 수 없다.
5. 한 글자인 단어는 인정되지 않는다.

다음은 3명이 끝말잇기를 하는 상황을 나타낸다.

문제 풀이
1. 하나씩 돌아간다. 값을 객체에 넣는다.
2. 객체에 값이 있는지 여부에 따라 중복된 것인지 파악한다.
3. 단어의 끝 글자를 스택에 넣는다. 스택에 마지막 값과 다음 나오는 값이 같은지 확인한다.
4. 중복 이거나 같지 않으면 반복을 멈춘다.
5. 반복을 멈춘 시점 값 + 1 / n  => 몇번째 턴에 끝났는지
6. 반복을 멈춘 시점 값 +1 % n => 몇번째 사람이 걸렸는지 
*/

function solution(n, words) {
  let answer = [];
  let wordObj = {};
  wordObj[words[0]] = true;
  let last = [words[0][words[0].length - 1]];

  for (let i = 1; i < words.length; i++) {
    if (wordObj[words[i]] || words[i][0] !== last[last.length - 1]) {
      answer.push((i + 1) % n === 0 ? n : (i + 1) % n);
      answer.push(Math.ceil((i + 1) / n));
      break;
    } else {
      let wl = words[i].slice(-1);
      wordObj[words[i]] = true;
      last.push(wl);
    }
  }
  return answer.length === 0 ? [0, 0] : answer;
}

const result = solution(5, [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
]);
