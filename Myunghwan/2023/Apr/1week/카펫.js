function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  // 세로의 길이는 3이상
  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let width = sum / height;

      if ((height - 2) * (width - 2) === yellow) {
        answer = [height, width];
      }
    }
  }

  return answer;
}
