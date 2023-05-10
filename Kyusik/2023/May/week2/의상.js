/*
각 옷의 종류 + 1(그 부위 옷을 입지 않는 경우)을 모두 곱하고 - 1(모든 부위를 입지 않는경우) 해주면 됨.
1. 빈도수 세기 패턴으로 각 종류의 옷이 몇 개 인지 파악.
*/

function solution(clothes) {
  let answer = 1;
  let cloth = {};
  clothes.map((el) => (cloth[el[1]] ? cloth[el[1]]++ : (cloth[el[1]] = 1)));

  for (const key in cloth) {
    // 입지않는 경우의 수 고려해서 +1 한 뒤 곱하기.
    answer *= cloth[key] + 1;
  }

  // 모두 안 입는 경우의 수 -1 후 리턴.
  return answer - 1;
}
