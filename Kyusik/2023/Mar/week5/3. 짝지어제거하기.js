// function solution(s) {
//     let sArr = s.split('');
//     let j = 0;
//     let k = 1;
//     while (k < sArr.length) {
//         if (sArr[j] === sArr[k]) {
//             sArr.splice(j, 2);
//             j = 0;
//             k = 0;
//         } else {
//             j++;
//             k++;
//         }
//     }

//     if (sArr.length === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// // 시간 초과 및 테스트케이스 절반 실패

function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] !== s[i]) {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }
  if (arr.length > 0) return 0;
  else return 1;
}
