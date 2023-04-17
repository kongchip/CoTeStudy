/*
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.
위키백과에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 리턴하도록 함수를 작성해라.

*/

function solution(citations) {
  let answer = 0;

  citations.sort((a, b) => b - a);
  for (let i = 0; i > citations.length; i++) {
    if (citations[i] >= i + 1 && citations[i] >= citations.length - i) {
      answer++;
      continue;
    }
    break;
  }
  return answer;
}

const result = solution([6, 0, 3, 1, 5]);
console.log(result);
