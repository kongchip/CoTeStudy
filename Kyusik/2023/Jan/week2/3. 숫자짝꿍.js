// function solution(X, Y) {
//     // X와 Y를 기준으로 for문을 돌아서 indexOf로 찾고 splice로 요소를 제거하는 방식으로 하면
//     // 시간복잡도가 O(n^2)으로 시간초과가 날 것 같다.
//     // X와 Y를 기준으로 푸는 것이 아니라, 숫자 0~9를 기준으로 풀어야 할 듯?
//     // 아래 배열의 idx가 숫자고, idx에 해당하는 요소가 X와 Y에 존재하는 숫자 count
//     const xNumArr = new Array(10).fill(0);
//     const yNumArr = new Array(10).fill(0);
//     const resultArr = new Array(10).fill(0);
//     const result = [];

//     for(let i = 0; i < X.length; i++) {
//         xNumArr[X[i]]++;
//     }

//     for(let i = 0; i < Y.length; i++) {
//         yNumArr[Y[i]]++;
//     }

//     for(let i = 0; i < xNumArr.length; i++) {
//         if(xNumArr[i] > 0 || yNumArr[i] > 0) {
//             xNumArr[i] > yNumArr[i] ? resultArr[i] = yNumArr[i] : resultArr[i] = xNumArr[i];
//         }
//     }

//     for(let i = 0; i < resultArr.length; i++) {
//         for(let j = 0; j < resultArr[i]; j++) {
//             result.push(i);
//         }
//     }

//     if (result.length === 0) {
//         return '-1'
//     } else {
//         result.sort((a, b) => b - a)
//         return BigInt(result.join('')).toString();
//     }
// }

// // 위 코드 10 ~ 15 시간초과로 실패

function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  // 해당 숫자가 얼마나 있는지 확인해서 더 낮은만큼 정답 문자열에 더함
  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => Number(a) === i).length;
    const curY = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  // 내림차순으로 정렬해 반환하면 최댓값
  return answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
