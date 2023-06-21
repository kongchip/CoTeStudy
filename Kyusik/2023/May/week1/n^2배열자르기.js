// function solution(n, left, right) {
//     let answer = [];
//     const outer = [];

//     // 먼저 문제에서 요구하는 2차원 배열을 만들어줌.
//     for (let i = 0; i < n; i++) {
//         outer.push(Array(n).fill(i + 1));
//         for(let j = i; j < n; j++) {
//             outer[i][j] = j + 1;
//         }
//     }

//     // 내부의 배열을 풀어서 1차원으로 만들고 문제에서 요구한 대로 자르자.
//     const oneDim = outer.flat();
//     answer = oneDim.slice(left, right + 1);
//     return answer;
// }
// // signal: aborted (core dumped) 에러로 실패, 메모리 이슈라고 함.

// 문제에서 설명하는대로 접근하지말고 수학적인 규칙을 찾아야 했다.
/*
1(0,0) 2(0,1) 3(0,2) 4(0,3)
2(1,0) 2(1,1) 3(1,2) 4(1,3)
3(2,0) 3(2,1) 3(2,2) 4(2,3)
4(3,0) 4(3,1) 4(3,2) 4(3,3)
기본적으로 (index % n) + 1 이 각 자리의 수가 됨.
그런데 만약 Math.floor(index / n) + 1이 위의 값보다 크다면 이 값이 그 자리의 수가 됨.
*/

function solution(n, left, right) {
  let answer = [];
  for (let i = left; left <= right; left++) {
    const remain = (left % n) + 1;
    const share = Math.floor(left / n) + 1;
    answer.push(Math.max(remain, share));
  }
  return answer;
}
