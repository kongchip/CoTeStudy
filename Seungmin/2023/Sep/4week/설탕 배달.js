const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());
// 5키로로 먼저 나누기
// 나머지가 0이면 몫을 result에 할당하고 리턴
// 나머지가 0이 아닌 경우
// 5키로로 나눈 몫을 result에 할당하고
// 5키로로 나눈 나머지를 3으로 나눈 나머지가 0이라면 그 몫을 result에 누적하고 리턴
// 0이 아니라면 input을 3으로 나누기
// input을 3으로 나눈 나머지가 0 이라면 그 몫을 result에 할당하고 리턴
// 나머지가 0이 아니라면 -1 출력하고 리턴

const solution = () => {
  let result = 0

  // 5로 나누어 떨어지는 경우
  if (input % 5 === 0) result = input / 5

  // 5로 나누어 떨어지지 않는 경우
  else {
    // 5키로 개수를 1개씩 줄이면서 남은 설탕 개수를 3으로 나눠보기
    // i -> 5키로 개수
    // input = 14 -> i = 2
    for (let i = parseInt(input / 5); i >= 0; i--) {
      // (input - (i * 5)) -> 남은 설탕 개수
      if ((input - (i * 5)) % 3 === 0) {
        result = i + (input - (i * 5)) / 3
        break
      }
    }
  }

  console.log(result || -1)
}

solution()