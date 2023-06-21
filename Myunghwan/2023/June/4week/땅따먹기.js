// function solution(land) {
//     // 첫열의 인덱스 수
//     let maxIndex = land[0].indexOf(Math.max(...land[0]))
//     let maxNum = Math.max(...land[0])

//     let result = 0;
//     for(let i = 1; i < land.length; i++){
//         if(maxIndex !== land[i].indexOf(Math.max(...land[i]))){
//             result += Math.max(...land[i])
//         } else {
//             land[i].splice(land[i].indexOf(Math.max(...land[i])))
//             result += Math.max(...land[i])
//         }
//     }
//     return maxNum + result
// }

// 동적 계획법?
function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  return Math.max(...land[land.length - 1]);
  // console.log(land)
}
