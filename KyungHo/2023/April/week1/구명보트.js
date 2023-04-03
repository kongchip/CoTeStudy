/*
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있다.
예를 들어, 사람들의 몸무게가 [70,50,80,50]이고 구명보트의 무게 제한이 100 이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번 과 3번의 무게의 합은 150이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 한다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 사람을 구출하기 위해 필요한 구명보트 개수의 최소값을 return하도록 함수를 작성해라.

문제 풀이 구성
목적 : 구명보트를 최소한으로 사용해서 모든 사람을 구출하려고 한다.
1. 오름차순 정렬을 한다. O(n)
2. 최대 2명씩 밖에 탈 수 없다!
3. 시작과 끝의 값을 더한다. limit보다 크면 끝값의 index만 줄이고 bote 개수를 늘린다.
4. 시작과 끝의 값이 limit보다 작으면 시작++ 끝-- 를 진행한다.
5. start < end 일때 반복한다.
6. start === end 일때에는 무조건 하나의 인원이 있는것이기 때문에 bote를 추가한다.

*/

function solution(people, limit) {
  let bote = 0;
  people.sort((a, b) => a - b);
  let start = 0;
  let end = people.length - 1;

  while (start < end) {
    const value = people[start] + people[end];
    if (value <= limit) {
      bote++;
      start++;
      end--;
    } else {
      bote++;
      end--;
    }
  }
  if (start === end) {
    bote++;
  }

  return bote;
}

const result = solution([50, 60, 70], 100);
