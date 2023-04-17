/*
경화는 과수원에서 귤을 수확했다. 경화는 수확한 귤 중 k개를 골라 상자 하나에 담아 판매하려고 한다.
수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.
예를 들어 경화가 수확한 귤 8개의 크기가 [1,3,2,5,4,5,2,3]이라고 하자. 경화가 귤 6개를 판매하고 싶다면, 크기가 1,4인 귤을 제외한 여섯 개의 귤을 상자에 담으면, 귤의 크기의 종류가 2,3,5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때입니다.

경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어진다. 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return하도록 만들어라.

풀이
* 서로 다른 수가 최소여야 한다. 그리고 최소이면서 판매하려고 하는 개수와 같아야한다. * 
객체로 값을 카운트 한다.
value 값으로 배열을 만든다.
k값에서 내림차순 배열의 값을 계속 빼고 0보다 작아지면 리턴한다.
*/

function solution(k, tangerine) {
  let answer = 0;
  const count = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const keySort = Object.values(count).sort((a, b) => b - a);

  for (val of keySort) {
    k -= val;
    answer++;
    if (k <= 0) break;
  }

  return answer;
}

const result = solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
console.log(result);
