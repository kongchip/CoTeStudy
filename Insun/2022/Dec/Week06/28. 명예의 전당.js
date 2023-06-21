// function solution(k, score) {
//     // k 배열에 score의 요소를 하나씩 추가
//     let arr = []
//     let min = 0
//     for(let i = 0; i < k; i++) {
//         arr.push(score[i])
//         min = Math.min(...arr)
//     }
//     let sortedArr = arr.sort((a,b) => a-b)

//     // k 배열의 마지막 요소와 score 배열의 첫 요소를 비교
//     // k 배열의 마지막 요소 > score 배열 요소 = k 배열의 나머지 요소들과 비교하며 순위 안에 든다면 k배열에 추가
//     // k 배열의 마지막 요소 = score 배열 요소 = score 배열 요소 무시
//     // k 배열의 마지막 요소 < score 배열 요소 = k 배열 맨 마지막에 score 요소 추가하고 k 배열 맨 앞의 요소는 삭제
//     let result = []
//     for(let i = k; i < score.length; i++) {
//         if(sortedArr[sortedArr.length-1] > score[i]) {
//             if(sortedArr[0] < score[i]) {
//                 sortedArr.push(score[i])
//                 sortedArr.shift()
//             }
//             }
//     else if(sortedArr[sortedArr.length-1] === score[i]) continue
//     else {
//         sortedArr.push(score[i])
//         sortedArr.shift()
//     }
//         sortedArr = sortedArr.sort((a,b) => a-b)
//         result.push(Math.min(...sortedArr))
//     }
//     let start = Array.from({length:k}, ()=> min)
//     return start.concat(result)
// }

function solution(k, score) {
  let arr = [];
  let result = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      arr.push(score[i]);
    }
    if (score[i] > Math.min(...arr)) {
      arr.pop();
      // shift보다 pop이 더 코드 효율성이 좋다
      // 그래서 정렬을 내림차순으로 한 것
      arr.push(score[i]);
      arr.sort((a, b) => b - a);
    }
    result.push(arr.at(-1));
    // array[array.length - 1]을 하는 대신, 짧게 array.at(-1)을 사용 가능
  }
  return result;
}
