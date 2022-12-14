function solution(array, commands) {
  let result = [];
  // array를 commands의 0,1번째 값으로 slice
  // commands가 2중배열이라 for문으로 돌아야할 것 같음
  for (let i = 0; i < commands.length; i++) {
    let slicedArr = array.slice(commands[i][0] - 1, commands[i][1]);
    // slice한 배열을 정렬
    let sortedArr = slicedArr.sort((a, b) => a - b);
    // 정렬한 배열에서 commands의 2번째 인덱스의 값을 구한 후 result 배열에 추가
    result.push(sortedArr[commands[i][2] - 1]);
  }
  return result;
}
