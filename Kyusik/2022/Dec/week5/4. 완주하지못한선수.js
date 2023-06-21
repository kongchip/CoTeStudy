// function solution(participant, completion) {
//         let finisher = completion.pop();
//         let finisherIdx = participant.indexOf(finisher);
//         participant.splice(finisherIdx, 1);
//     }
// }
// // 시간초과 아마 n^2라서 그런듯

function solution(participant, completion) {
  // 배열정렬
  participant = participant.sort();
  completion = completion.sort();
  // 반복문으로 두 배열 배교하다가 아니면 그거임;;;
  for (let a = 0; a < participant.length; a++) {
    if (participant[a] !== completion[a]) {
      return participant[a];
    }
  }
  return participant;
}
