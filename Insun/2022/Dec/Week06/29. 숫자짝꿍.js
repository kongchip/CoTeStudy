// function solution(X, Y) {
//     // x와 y에서 같은 요소 뽑아내기
//     let arr = []
//     let result = ""
//     X = X.split("").sort((a,b) => b-a)
//     Y = Y.split("").sort((a,b) => b-a)
//     console.log(X,Y)
//     for(let i = 0; i < X.length; i++) {
//         for(let j = 0; j < Y.length; j++) {
//             if(X[i] === Y[j]) {
//                 arr.push(X[i])
//             }
//             else if(arr.length === 0) result = "-1"
//         }
//         console.log(arr)
//     }
//     // let num = new Set(arr)
//     console.log(result)
// }

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
