// function solution(numbers, hand) {
//     let Left = [1,4,7]
//     let Right = [3,6,9]
//     let Mid = [2,5,8,0]
//     let l = [0, 4]
//     let r = [3, 4]
//     // [[0,0], [1,0], [2,0]],
//     // [[0,1], [1,1], [2,1]],
//     // [[0,2], [1,2], [2,2]],
//     // [[0,3], [1,3], [2,3]]
//     // 이동 거리가 같으면 hand 참고
//     // 시작은 *, #
//     let result = []
//     for(let i = 0; i<numbers.length; i++) {
//         if(Left.includes(numbers[i])) {
//             result.push("L")
//             l = [0, i]
//         }
//         if(Right.includes(numbers[i])) {
//             result.push("R")
//             r = [3, i]
//         }
//         if(Mid.includes(numbers[i])) {
//             if(Mid) {}
//         }
//     }
//     console.log(result)
// }

function solution(numbers, hand) {
  // 위치 찾아주는 함수
  function findKey(key) {
    let keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === key) {
          return [i, j];
        }
      }
    }
  }

  var answer = "";
  let left = "*";
  let right = "#";
  for (let i of numbers) {
    if (i === 1 || i === 4 || i === 7) {
      answer += "L";
      left = i;
    } else if (i === 3 || i === 6 || i === 9) {
      answer += "R";
      right = i - 2;
    } else {
      let r = findKey(right);
      let l = findKey(left);
      let middle = findKey(i);
      // 손위치와 눌러야할 키패드 거리 구하기
      let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
      let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
      if (rr === ll) {
        // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
        hand === "right"
          ? ((right = i), (answer += "R"))
          : ((left = i), (answer += "L"));
      } else if (rr > ll) {
        // 오른손의 거리가 더 멀다면
        answer += "L";
        left = i;
      } else {
        // 왼손의 거리가 더 멀다면
        answer += "R";
        right = i;
      }
    }
  }

  return answer;
}
